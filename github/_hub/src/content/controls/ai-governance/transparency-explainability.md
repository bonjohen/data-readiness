---
domain: "Transparency & Explainability"
order: 6
description: "Model cards, user-facing disclosures, explanation methods, and documentation of AI system limitations."
requirements:
  - "Model cards or system cards maintained for each AI system"
  - "Explanation methods appropriate to audience (technical, user, affected person)"
  - "Disclosure of AI use to end users"
  - "Documentation of known limitations and failure modes"
  - "Interpretability requirements scaled by risk tier"
evidence_examples:
  - artifact: "Model cards or system cards for each AI system"
    owner: "ML Engineering / AI Governance Lead"
    frequency: "On deployment and on material change"
  - artifact: "User-facing AI disclosure statements"
    owner: "Product / Legal"
    frequency: "On deployment"
  - artifact: "Explainability documentation with audience-appropriate methods"
    owner: "ML Engineering"
    frequency: "On deployment and annually"
  - artifact: "Limitation and failure mode disclosures"
    owner: "ML Engineering"
    frequency: "On deployment and on material change"
criteria:
  - "Governance"
---

The MANAGE function of the AI RMF requires that AI systems be understandable to the people who use, oversee, and are affected by them. Transparency is not a single requirement but a spectrum — a data scientist needs access to model architecture and training details, an end user needs to know they are interacting with AI, and a person affected by an AI decision needs an explanation they can meaningfully evaluate and contest.

Model cards (or system cards for composite AI systems) are the foundational transparency artifact. Each card documents the system's purpose, training data, performance characteristics, known limitations, ethical considerations, and intended use. The card should be a living document updated whenever the model is retrained, the deployment context changes, or new limitations are discovered. For generative AI systems, the card should also address hallucination rates, content policy boundaries, and the provenance of training data.

Interpretability requirements should scale with risk tier. A minimal-risk recommendation engine may satisfy transparency with a general disclosure that AI is used. A high-risk system making consequential decisions about individuals must provide specific, actionable explanations — not just "the model said so" but which factors contributed to the decision and how different inputs would change the outcome. Organizations should invest in appropriate explainability techniques (SHAP values, attention visualization, counterfactual explanations) proportional to the stakes involved.
