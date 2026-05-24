---
domain: "Risk Categorization & Tiering"
order: 2
description: "Structured methodology for categorizing AI system risk levels and applying tiered governance requirements."
requirements:
  - "Risk categorization methodology documented and approved"
  - "Factors include potential harm severity, reversibility, scale of impact, and automation level"
  - "Tiered governance requirements established (higher risk = more oversight)"
  - "Alignment with organizational risk tolerance documented"
evidence_examples:
  - artifact: "Risk categorization framework document"
    owner: "Risk Management"
    frequency: "Annually"
  - artifact: "Tier assignment records with justification for each AI system"
    owner: "AI Governance Lead"
    frequency: "Quarterly or on system change"
  - artifact: "Risk tolerance documentation and board-level approval"
    owner: "Executive Leadership"
    frequency: "Annually"
criteria:
  - "Governance"
---

The GOVERN function of the AI RMF requires organizations to establish risk tolerances and categorization methodologies before deploying AI systems. Risk categorization translates abstract principles into concrete governance requirements — a system classified as high-risk triggers mandatory bias testing, human oversight, and explainability documentation, while a minimal-risk system may proceed with lighter controls.

Effective categorization considers multiple dimensions: the severity of potential harm (financial loss, physical safety, civil rights), whether harms are reversible, the scale of affected populations, and the degree of human autonomy removed by automation. These factors combine into a risk tier that maps directly to the organization's control obligations. The methodology must be documented, repeatable, and approved by leadership to ensure consistent application across business units.

A common pitfall is treating risk categorization as a one-time exercise. AI systems evolve — models are retrained, use cases expand, deployment contexts shift. The categorization must be revisited whenever a material change occurs, and the organization's risk tolerance itself should be reviewed annually to ensure alignment with the evolving regulatory landscape and organizational strategy.
