---
title: "Attention Is All You Need — Code & Paper Analysis"
date: "2026-04-14"
excerpt: "A mapping between a minimal GPT-style implementation and Vaswani et al. (2017), plus key conceptual explanations for positional encoding and self-attention."
category: "Deep Learning"
readTime: "12 min read"
---

# Attention Is All You Need — Code & Paper Analysis

This document maps each relevant part of `gpt.py` to the corresponding section of **“Attention Is All You Need”** (Vaswani et al., NeurIPS 2017), and answers key conceptual questions about the Transformer architecture.

## 1) Line-by-Line Code → Paper Mapping

### 1.1 Token Embeddings (Lines 67, 75) → Paper §3.4 “Embeddings and Softmax”

```py
self.token_embedding_table = nn.Embedding(vocab_size, n_embd)  # line 67
tok_emb = self.token_embedding_table(idx)  # (B, T, C)         # line 75
```

Paper §3.4: **“we use learned embeddings to convert the input tokens and output tokens to vectors of dimension d_model.”**  
`token_embedding_table` is exactly this: a lookup table mapping each integer token ID to a dense vector of size `n_embd` (playing the role of \(d_{model}\)).

### 1.2 Positional Embeddings (Lines 68, 76–77) → Paper §3.5 “Positional Encoding”

```py
self.position_embedding_table = nn.Embedding(block_size, n_embd)  # line 68
pos_emb = self.position_embedding_table(torch.arange(T, device=device))  # line 76
x = tok_emb + pos_emb  # line 77
```

Transformers process tokens in parallel, so they have no built-in sense of order. The paper injects position information using **positional encodings** and adds them to token embeddings (same dimension so they can be summed).

The paper’s main (fixed) sinusoidal encoding is:

```
PE(pos, 2i)   = sin(pos / 10000^(2i / d_model))
PE(pos, 2i+1) = cos(pos / 10000^(2i / d_model))
```

But the paper also tested **learned positional embeddings** (Table 3, row (E)) and found **“nearly identical results.”**  
Your code uses that learned variant via `nn.Embedding(block_size, n_embd)`, then performs the paper’s key operation: `tok_emb + pos_emb`.

### 1.3 Linear Head + Softmax (Lines 69, 78, 97–98) → Paper §3.4 (+ softmax usage) and decoding mechanics

```py
self.lm_head = nn.Linear(n_embd, vocab_size)  # line 69
logits = self.lm_head(x)  # line 78
probs = F.softmax(logits, dim=-1)  # line 98 (applied after selecting last step)
idx_next = torch.multinomial(probs, num_samples=1)  # line 100
```

Paper §3.4: **“we use the usual learned linear transformation and softmax function to convert the decoder output to predicted next-token probabilities.”**  
`lm_head` is the linear projection from hidden states to vocab logits, `softmax` turns logits into probabilities, and `multinomial` samples a next token.

### 1.4 Autoregressive Generation (Lines 90–103) → Paper §3.1 “Decoder”

```py
def generate(self, idx, max_new_tokens):
    for _ in range(max_new_tokens):
        logits, loss = self(idx)
        logits = logits[:, -1, :]             # line 96: last time step
        probs = F.softmax(logits, dim=-1)     # line 98
        idx_next = torch.multinomial(probs, num_samples=1)  # line 100
        idx = torch.cat((idx, idx_next), dim=1)  # line 102: append
    return idx
```

Paper §3.1: the decoder generates **one token at a time** and is **auto-regressive**, consuming the previously generated tokens as input for the next step.  
`torch.cat` appends the sampled token to the context, implementing exactly that loop.

### 1.5 Cross-Entropy Loss (Lines 83–86) → Paper §5 “Training”

```py
B, T, C = logits.shape
logits = logits.view(B*T, C)
targets = targets.view(B*T)
loss = F.cross_entropy(logits, targets)
```

The paper’s training objective is next-token prediction; it additionally uses **label smoothing** (§5.4). This code uses standard cross-entropy without label smoothing, but the underlying objective is the same.

### 1.6 AdamW Optimizer (Line 109) → Paper §5.3 “Optimizer”

```py
optimizer = torch.optim.AdamW(model.parameters(), lr=learning_rate)
```

Paper §5.3 uses **Adam** with specific \(\beta_1, \beta_2\) and a warmup/decay learning-rate schedule (Equation 3).  
This code uses **AdamW** (a modern Adam variant with decoupled weight decay) with a constant learning rate.

### 1.7 Batching & Data Pipeline (Lines 38–45) → Paper §5.1 “Training Data and Batching”

```py
ix = torch.randint(len(data) - block_size, (batch_size,))
x = torch.stack([data[i:i+block_size] for i in ix])
y = torch.stack([data[i+1:i+block_size+1] for i in ix])
```

Paper §5.1 discusses batching by approximate length for translation. Here, `get_batch` samples many fixed-length windows in parallel and shifts targets by 1 token, matching the next-token prediction setup.

### 1.8 What the Paper Has That `gpt.py` Is Missing

`gpt.py` is a simplified checkpoint: embeddings + a linear head + autoregressive sampling. It does **not** implement the core Transformer blocks from the paper:

| Missing component | Paper section |
|---|---|
| Scaled Dot-Product Attention: \(softmax(QK^T/\sqrt{d_k})V\) | §3.2.1 |
| Multi-Head Attention (parallel heads, concat + output projection) | §3.2.2 |
| Causal masking (prevent attending to future tokens) | §3.2.3 |
| Position-wise feed-forward network (two linear layers + ReLU) | §3.3 |
| Residual connections \(LayerNorm(x + Sublayer(x))\) | §3.1 |
| Layer normalization | §3.1 |

## 2) What is Positional Encoding?

Transformers process tokens in parallel. Without recurrence or convolution, they have no inherent notion of token order. **Positional encoding** injects order information into token representations before attention is applied.

The paper’s sinusoidal positional encoding:

```
PE(pos, 2i)   = sin(pos / 10000^(2i / d_model))
PE(pos, 2i+1) = cos(pos / 10000^(2i / d_model))
```

Why sinusoids?
- The paper hypothesizes this enables learning **relative position**: for a fixed offset \(k\), \(PE_{pos+k}\) can be expressed as a linear function of \(PE_{pos}\).
- Different dimensions encode different frequencies, giving both short-range and long-range position signals.

Your code uses a **learned** positional embedding table instead (`nn.Embedding(block_size, n_embd)`), which the paper reports performs similarly (Table 3(E)). The key idea remains: **add position vectors to token embeddings** so position is present in all downstream computations.

## 3) What is Self-Attention?

**Self-attention** lets each token build a context-aware representation by “looking at” other tokens in the same sequence.

### Mechanics

1) Project token representations \(X\) into queries, keys, values:

```text
Q = X W_Q
K = X W_K
V = X W_V
```

2) Compute attention weights and aggregate values:

```text
Attention(Q, K, V) = softmax( Q K^T / sqrt(d_k) ) V
```

The \(/ \sqrt{d_k}\) scaling prevents large dot products from pushing softmax into saturation (tiny gradients), which the paper explains in §3.2.1.

### Multi-head attention

Instead of one attention, the paper runs \(h\) attentions in parallel with different learned projections:

```text
head_i = Attention(Q W_Qi, K W_Ki, V W_Vi)
MultiHead(Q,K,V) = Concat(head_1, ..., head_h) W_O
```

This lets different heads learn different relations (syntax, long-range dependencies, etc.) simultaneously.

## 4) Why is GPT a Decoder-Only Model?

The original Transformer (paper) uses an **encoder-decoder** structure:

```text
Encoder stack:   bidirectional self-attention + FFN
Decoder stack:   causal (masked) self-attention + (optional) cross-attention + FFN
```

### Encoder vs Decoder (intuition)
- **Encoder**: each position can attend to all positions (left and right). Great for “understanding” tasks.
- **Decoder**: uses **causal masking** so position \(t\) can only attend to positions \(\le t\), preserving autoregressive generation.

### Why GPT drops the encoder
GPT is trained for **next-token prediction** (language modeling). For that setting:
- There is no separate “source sequence” to encode (unlike translation).
- Generation must be **left-to-right**, so causal masking is the right inductive bias.
- Cross-attention to an encoder output is unnecessary without a distinct input sequence.

So GPT is effectively a **stack of Transformer decoder blocks** (masked self-attention + FFN + residual/LayerNorm), trained on next-token prediction at scale.

