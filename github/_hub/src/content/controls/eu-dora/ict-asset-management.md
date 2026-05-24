---
domain: "ICT Asset Management"
order: 8
description: "Inventory of all ICT and information assets with dependency mapping, criticality classification, and regular updates."
requirements:
  - "Complete inventory of all ICT assets and information assets"
  - "Identification of dependencies and interconnections between ICT assets"
  - "Classification of ICT assets by criticality to business functions"
  - "Regular inventory updates reflecting acquisitions, changes, and decommissions"
  - "Mapping of ICT assets to supported business functions and processes"
evidence_examples:
  - artifact: "ICT asset register with classifications, owners, and lifecycle status"
    owner: "IT Asset Manager"
    frequency: "Continuously maintained; quarterly completeness review"
  - artifact: "Dependency and interconnection maps showing relationships between ICT assets"
    owner: "Enterprise Architecture / IT Operations"
    frequency: "Annually updated; reviewed after significant infrastructure changes"
  - artifact: "Criticality classification records aligned with business impact analysis"
    owner: "ICT Risk Manager"
    frequency: "Annually reviewed"
criteria:
  - "Governance"
---

Article 8(4) of DORA requires financial entities to maintain a comprehensive, up-to-date inventory of all ICT assets and information assets. This inventory must go beyond a simple list of hardware and software — it must capture dependencies, interconnections, and the mapping between ICT assets and the business functions they support. The goal is to ensure that the financial entity understands its digital estate well enough to assess risk, plan recovery, and manage changes effectively.

Classification by criticality is essential. Not all ICT assets carry equal risk to operational resilience, and the inventory must reflect this through a criticality scheme aligned with the entity's business impact analysis. Assets supporting critical or important functions receive heightened attention in risk assessment, testing, and continuity planning. Dependencies between assets must be documented so that the failure or compromise of one asset can be assessed for cascading impact.

The inventory must be a living document, updated as assets are acquired, modified, or decommissioned. This is particularly important in environments with rapid infrastructure changes — cloud deployments, containerized workloads, and API integrations can create ICT assets faster than traditional inventory processes can track them. Financial entities should consider automated discovery tools to supplement manual inventory maintenance, ensuring the register remains accurate and complete as the digital estate evolves.
