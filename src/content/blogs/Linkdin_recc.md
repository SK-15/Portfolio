---
title: "Go Big, Then Go Small: LinkedIn's AI Recommendation Engine"
date: "2025-12-14"
excerpt: "A dive into new species of Recommendation Engines"
category: "Tech"
readTime: "5 min read"
---
<!-- # Go Big, Then Go Small: 5 Surprising Lessons from LinkedIn's AI Recommendation Engine -->

Every scroll through a professional feed, every job suggestion, and every recommended article is the end result of a complex prediction. For years, platforms like LinkedIn relied on an army of specialized AI models to make these predictions, each working in isolation. Seeking to overhaul this fragmented approach, LinkedIn embarked on a mission to replace its many systems with a single, powerful foundation model based on a Large Language Model (LLM).

The goal was to build a unified AI "brain" with a holistic understanding of each user. To achieve this, the team converted all user data—profiles, past interactions, and historical activity—into a conversational format, a process they call "promptification." By feeding these detailed prompts to the LLM, they could ask it to predict the next best action for any user. This ambitious journey revealed several counter-intuitive and powerful lessons for deploying AI at a massive scale. Here are the five most impactful takeaways from their experience.

## 1. You Have to Go Big Before You Can Go Small

LinkedIn's core strategy began with building a massive, **150-billion-parameter model**, dubbed "Blue XL," to maximize its reasoning power and recommendation quality. Only after achieving this peak performance did the team shrink the model. Using a process called "distillation," they taught a much smaller, more efficient model (e.g., 3 billion parameters) to mimic the giant one, making it practical for a high-demand production environment.

The key insight, which runs contrary to the common instinct of starting with a more efficient model, is that this sequence is non-negotiable. The initial large model's immense capacity is essential for solving the complex personalization tasks required; a small model trained from scratch simply can't reach the same level of performance.

> "You have to first go big and then go small. If you... try to train the model from scratch with a small model, it doesn't actually work that well."

This finding suggests that for complex enterprise problems, the most efficient path to a small, production-ready model is paradoxically through first building an enormous one.

## 2. More User History is Better... Until It's Not

It seems logical that giving an AI more data about a user's history would lead to better recommendations. The LinkedIn team found this to be true—up to a point. As they increased the "context length," or the amount of user history fed into the model, performance steadily improved.

However, they made a surprising discovery: after the context length became too long, performance began to drop. This drop-off wasn't due to unhelpful data, but rather a limitation in the LLM architecture's ability to generalize to extremely long sequences of user interactions. This confirms a finding seen across the AI industry, where, as the team noted, "if you look at most of the literature they tell that the... performance of the model actually drops if you go beyond some context."

> "The context length actually matters a lot for these kinds of applications... towards the end of this graph the performance actually drops. We don't believe this is because... the context is actually less informative; the problem is that the models... don't generalize that well to the longer context."

This highlights a critical real-world limitation of current LLMs, revealing a "sweet spot" for historical data that forces a trade-off between giving the model more information and respecting its architectural limits.

## 3. The Secret to Efficient AI is Patient, Gradual Shrinking

To make a model like Blue XL efficient enough for live production, the team used techniques like "pruning" (removing redundant parts) and "distillation." While engineers often seek the single, most aggressive optimization, the LinkedIn team found that patience was a more potent virtue.

The key to their success was a slow, iterative process. Instead of one giant leap, they gently shrank the model in stages, for example, from the 150B behemoth down to an 8B model, then distilling to a 3B model, and finally to a 1B model. This cycle of "more pruning, more distillation, more pruning, more distillation" has a symbiotic effect: each distillation step "bakes in" the learnings from the larger model before the next round of pruning carefully sheds complexity. This gradual approach resulted in almost no loss of quality, whereas an aggressive, single-step pruning could cause a 1% drop—a significant decline at LinkedIn's scale.

> "...the recipe here is... to do the gradual pruning... We start pruning the model, a very small pruning... we distill to the smaller model, and we do it over and over again."

This disciplined, step-by-step approach demonstrates that in the world of large model optimization, slow and steady often wins the race.

## 4. The Model's "World Knowledge" Finally Cracks the Cold-Start Problem

The "cold-start" problem is a long-standing bugbear for personalization engineers: how do you provide good recommendations for new users with little or no interaction history?

Here, the value of a single, unified foundation model became undeniable. The LLM's pre-trained "world knowledge" allows it to make much better inferences about a user's potential interests, even with fewer than five past interactions. The performance gap between this new model and the older, specialized systems was largest for users with the least amount of data. This directly proves that a generalist, knowledge-rich model can solve one of the industry's oldest challenges in a way that isolated, task-specific models never could.

## 5. Extreme Automation is the Only Way to Experiment at Scale

Finding the optimal recipes for distillation, pruning, and quantization—a technique for reducing the model's numerical precision—required running a vast number of experiments. The team's high velocity was only possible because they built a highly automated system to manage the process.

This system handled everything end-to-end, from running an experiment with new parameters to automatically pushing results into spreadsheets for analysis. Critically, this wasn't about building a proprietary stack from scratch. The team achieved this by expertly integrating best-in-class open-source tools, ensuring they worked seamlessly together.

> "Automation is the key if you want to... really optimize for these models."

This underscores a maturing reality in enterprise AI: the most significant competitive advantages often lie not in the model itself, but in the operational velocity of the teams that build it.

# Conclusion: A New Foundation for Personalization

LinkedIn's quest to build a single AI "brain" for its platform revealed a fundamental tension: the need for massive scale versus the demand for extreme efficiency. As their journey shows, the path forward is filled with non-obvious strategies, from the necessity of going big before going small to the power of a patient, gradual approach to optimization. The results prove that a foundational model can not only unify disparate systems but also solve long-standing industry challenges like the cold-start problem.

As these powerful, generalist AI models continue to replace countless specialized systems, what new ways of interacting with and personalizing our digital world will they unlock next?
