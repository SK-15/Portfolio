---
title: "4 Surprising Lessons Instacart Learned When Using LLMs to Fix Its Search"
date: "2025-12-14"
excerpt: "Search is a complex problem, and it's not always easy to get right."
category: "Tech"
readTime: "5 min read"
---

4 Surprising Lessons Instacart Learned When Using LLMs to Fix Its Search

Introduction: The Grocery Store Dead End

We’ve all been there: standing in the digital aisle of an online grocery store, staring at a search bar that just doesn’t get it. You type in a broad query like "snacks" and are flooded with thousands of irrelevant items. You try a very specific search like "unsweetened plantbased yogurt" and get nothing back. It’s a frustrating dead end.

Instacart faced these exact challenges. For them, search has a crucial dual role: it must support both efficient restocking for customers with long shopping lists and enable new product discovery to help them find their next favorite item. Their existing search engine struggled on both fronts. To solve this, they turned to Large Language Models (LLMs), but their journey wasn't a simple plug-and-play fix. The team discovered that their biggest breakthroughs were often counter-intuitive. This article distills the four most impactful lessons they learned when using LLMs to transform their search experience.


--------------------------------------------------------------------------------


1. The Big Surprise: Generic LLMs Don't Know Your Customers

Instacart's first attempt involved using a standard LLM to classify search queries. On paper, the model's outputs seemed logical. But when they ran an online A/B test, the team hit a sobering reality check: the results weren't great.

The core problem was a fundamental disconnect: the LLM's general "world knowledge" did not align with the specific shopping behavior and intent of Instacart's users. The model knew what words meant in a general sense, but it didn't understand the unique context of grocery shopping on the platform.

The query "protein" was a perfect example of this mismatch. The LLM suggested logical items like chicken and tofu—foods high in protein. However, Instacart users searching for "protein" are almost always looking for protein shakes, bars, and supplements. This gap between general knowledge and domain-specific user intent was the critical flaw in their initial approach.

"This mismatch wherein the LLM doesn't truly understand Instacart user behavior was really the cause of the problem."


--------------------------------------------------------------------------------


2. The Winning Formula: Combine LLM Power with Your Own Data

Having discovered the limits of general knowledge, the team's real breakthrough came from a fundamental shift in perspective. They stopped asking the LLM to work in a vacuum and instead developed a powerful hybrid approach that augmented prompts with their own rich, domain-specific data.

Instead of just feeding the LLM a user's query, they gave it crucial context. This included not only the top converting categories for that query, but also a wealth of information from their own query understanding models, such as annotations for any brands or dietary attributes present in the query.

Providing this multi-faceted internal data "greatly simplified the problem for the LLM." The model no longer had to guess what an Instacart user wanted; it was given powerful clues based on past successful purchases. The improvement was dramatic. For the query "Wner soda," the previous model offered a classification like "a brand of fruit flavored soda"—which, while not incorrect, wasn't very precise. The new, data-augmented LLM correctly identified it as "a brand of ginger ale." This newfound precision had a massive impact on downstream retrieval and ranking, especially for "tail queries"—the less common but highly specific searches. Precision improved by 18 percentage points and recall improved by a staggering 70 percentage points. It was a significant win.


--------------------------------------------------------------------------------


3. The Practical Reality: Pre-Compute and Cache Everything You Can

Using powerful LLMs in a real-time production environment presents serious engineering challenges, primarily latency and cost. To solve this high-stakes trade-off between performance and cost, Instacart engineered a clever hybrid serving strategy.

They recognized that their query patterns have a "fat head and torso," meaning a large percentage of their search volume comes from a set of common, recurring queries. They leveraged this by pre-computing the LLM outputs for all of these common queries offline in a batch mode. These results are then stored in a cache. When a user enters a common query, the system performs a simple, lightning-fast lookup, having a very low impact on latency. For the "long tail" of less common queries, the system would fall back to the existing models.

This strategy allowed Instacart to improve coverage and accuracy for the majority of queries without degrading performance. And the evolution continues: for the long tail where they used to fall back to older models, they are now working to replace them with a distilled Llama model to do an even better job.


--------------------------------------------------------------------------------


4. The Hidden Hurdle: Evaluation is Harder Than You Think

One of the team's most unexpected challenges was evaluating the quality of the LLM's outputs. The speakers admitted this part of the process was "far more difficult than we anticipated" and something they realized the importance of "kind of late."

They learned that evaluation is not just about checking for factual correctness or preventing hallucinations. The true challenge is ensuring the model's generated content aligns with business metrics and product needs. An answer can be factually correct but still unhelpful, or worse, misaligned with business goals. As one speaker noted, "aligning generation with business metrics like revenue... was very important."

To help tackle this complex problem, Instacart employed a novel technique: using an "LLM as a judge." This approach helped automate parts of the evaluation process, allowing them to assess the quality and business alignment of the model's outputs at scale.


--------------------------------------------------------------------------------


Conclusion: Beyond the Search Box

Instacart's journey reveals a critical insight for anyone looking to implement LLMs: success isn't about replacing old systems entirely. It’s about creating a sophisticated, hybrid approach that combines the powerful reasoning capabilities of an LLM with your own deep domain knowledge.

This fusion of general intelligence and specific context is what unlocks real-world value. As Instacart looks to the future, they are exploring how this approach can evolve search even further. The next frontier isn't just about understanding a single query, but about understanding a customer's entire "mission." What if search could recognize that a user is trying to buy all the ingredients for a specific recipe? By doing so, it would perfectly fulfill its second role: enabling new product discovery and creating a truly seamless shopping experience.
