---
domain: "AI System Inventory"
order: 1
description: "Comprehensive catalog of all AI systems with risk classification, purpose documentation, and stakeholder identification."
requirements:
  - "Catalog all AI systems with unique identifiers"
  - "Classify each system by risk tier (minimal, limited, high, unacceptable)"
  - "Document purpose and intended use for each system"
  - "Identify stakeholders and affected populations"
  - "Maintain regular inventory update cadence"
evidence_examples:
  - artifact: "AI system registry with unique identifiers and descriptions"
    owner: "AI Governance Lead"
    frequency: "Quarterly"
  - artifact: "Risk classification records with tier justification"
    owner: "Risk Management"
    frequency: "Annually or on system change"
  - artifact: "Stakeholder analysis and affected population mapping"
    owner: "AI Governance Lead"
    frequency: "Annually"
criteria:
  - "Governance"
---

The NIST AI RMF GOVERN function establishes the organizational foundation for AI risk management, and it starts with knowing what you have. An AI system inventory is the single most important prerequisite for every other control in this framework. Without a complete, accurate catalog of AI systems, risk categorization, bias testing, and oversight mechanisms all operate on incomplete information.

Each entry in the inventory should capture the system's unique identifier, its purpose and intended use, the AI techniques employed (machine learning, rule-based, generative, etc.), the data sources it consumes, and the populations it affects. Risk tier classification drives the level of governance rigor applied: a minimal-risk internal recommendation engine requires lighter oversight than a high-risk system making consequential decisions about individuals.

Organizations frequently undercount their AI systems because teams adopt AI tools informally — embedded ML features in SaaS platforms, copilot integrations, automated analytics pipelines. A thorough inventory process must survey all business units, not just the data science team, and include third-party AI systems consumed via API alongside internally developed models.
