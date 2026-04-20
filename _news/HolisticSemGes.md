---
layout: post
title: New preprint "HolisticSemGes- Semantic Grounding of Holistic Co-Speech Gesture Generation with Contrastive Flow-Matching"
permalink: /news/HolisticSemGes/
date: 2026-04-20 07:59:00+0200
inline: false
---

We are happy to share our new preprint, **“HolisticSemGes: Semantic Grounding of Holistic Co-Speech Gesture Generation with Contrastive Flow-Matching,”** by **Lanmiao Liu, Esam Ghaleb, Aslı Özyürek, and Zerrin Yumak**.

The preprint is available on [arXiv](https://arxiv.org/pdf/2603.26553).

### Abstract

While the field of **co-speech gesture generation** has seen significant advances, producing **holistic, semantically grounded gestures** remains a challenge. Existing approaches rely on **external semantic retrieval methods**, which limit their generalisation capability due to dependence on predefined linguistic rules. **Flow-matching-based methods** produce promising results; however, the network is optimised using only **semantically congruent samples** without exposure to **negative examples**, leading to the learning of **rhythmic gestures** rather than **sparse motions** such as **iconic** and **metaphoric gestures**.

Furthermore, by modelling **body parts in isolation**, most methods fail to maintain **cross-modal consistency**. We introduce a **Contrastive Flow Matching-based co-speech gesture generation model** that uses **mismatched audio–text conditions as negatives**, training the velocity field to follow the correct motion trajectory while repelling semantically incongruent trajectories. Our model ensures **cross-modal coherence** by embedding **text, audio, and holistic motion** into a **composite latent space** via **cosine** and **contrastive objectives**.

Extensive experiments and a user study demonstrate that our proposed approach outperforms **state-of-the-art methods** on two datasets, **BEAT2** and **SHOW**.

**Project page:** [HolisticSemGes](https://marcos452.github.io/HoliticSemGes)
