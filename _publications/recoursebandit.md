---
title: "Contextual Recourse Bandits: Optimizing Decisions through Counterfactual Explanations"
permalink: /publications/recoursebandit
author_profile: true
---

## Abstract
This paper introduces a new paradigm called the \textit{Contextual Recourse Bandits} in online learning. The objective of this paradigm is to optimize outcomes by dynamically recommending actions and feature modifications.  Drawing inspiration from practical healthcare scenarios where patients' features can be modified to qualify for more effective treatment options, we extend the traditional contextual bandit setup. Our contextual recourse bandit not only selects an action based on the current context but also suggests modifications to the context as recourses. These modified contexts have the potential to improve the outcome.  To address this, we propose the Recourse Linear Upper Confidence Bound (RLinUCB), an innovative algorithm that jointly manages recourse and action recommendations, thereby balancing the exploration-exploitation trade-off. We provide theoretical guarantees demonstrating that RLinUCB achieves sublinear recourse regret under mild conditions. Furthermore, we offer a robust variant that accounts for noisy implementations of recourses. Empirical evaluations further validate the superior performance of RLinUCB compared to existing online contextual bandit algorithms. This work  sheds light on  a new direction in the contextual bandit literature that holds promise for advancing personalized healthcare among other fields.
