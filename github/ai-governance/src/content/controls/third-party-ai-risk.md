---
domain: "Third-Party AI Risk"
order: 10
description: "Assessment, contractual controls, and ongoing monitoring for AI systems provided by vendors and third parties."
requirements:
  - "Vendor AI system assessment completed before adoption"
  - "Contractual requirements for AI transparency and data handling"
  - "Ongoing monitoring of vendor AI system performance"
  - "Supply chain risk assessment for AI components (models, data, infrastructure)"
  - "Incident reporting requirements established for vendor AI systems"
evidence_examples:
  - artifact: "Vendor AI assessment questionnaires and evaluation results"
    owner: "Procurement / AI Governance Lead"
    frequency: "Prior to adoption and annually"
  - artifact: "Contract provisions for AI transparency and incident reporting"
    owner: "Legal / Procurement"
    frequency: "Per contract cycle"
  - artifact: "Vendor AI performance monitoring reports"
    owner: "AI Governance Lead / Operations"
    frequency: "Quarterly"
  - artifact: "AI supply chain risk register"
    owner: "Risk Management"
    frequency: "Annually"
criteria:
  - "Governance"
---

The GOVERN function of the AI RMF extends governance obligations to AI systems the organization consumes from third parties, not just those it builds internally. Most organizations use significantly more third-party AI than they develop — embedded ML features in SaaS platforms, API-based language models, AI-powered analytics tools, and vendor-provided decision systems. Each of these carries risks that the organization must assess and manage, even though it does not control the underlying model.

Vendor assessment should evaluate the same dimensions the organization applies to its own systems: what data was used for training, what bias testing was performed, what transparency documentation is available (model cards, system cards), what human oversight mechanisms exist, and what the vendor's incident response process covers. Contractual provisions should codify these expectations — the right to audit, requirements for bias testing results, data handling restrictions, incident notification timelines, and model change notification.

Supply chain risk for AI is an emerging concern that goes beyond traditional vendor risk management. A single foundation model provider may underpin multiple vendor products, creating concentration risk. Training data contamination at a foundation model level propagates to every downstream application. Model updates by the vendor can change behavior in ways that affect the organization's compliance posture. Organizations should map their AI supply chain, identify concentration risks, and establish monitoring that detects behavioral changes in vendor AI systems that could affect their own operations or compliance.
