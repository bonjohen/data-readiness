---
domain: "Third-Party Risk Assessment"
order: 6
description: "Oversight and identification of material cybersecurity risks arising from third-party service providers, including vendor assessment and monitoring."
requirements:
  - "Describe oversight and identification of material risks from third-party service providers"
  - "Vendor cybersecurity risk assessment process"
  - "Contractual security requirements for service providers"
  - "Monitoring of third-party cybersecurity incidents"
evidence_examples:
  - artifact: "Vendor risk register with cybersecurity ratings"
    owner: "Vendor Management Lead"
    frequency: "Quarterly updated"
  - artifact: "Third-party security assessment records and questionnaires"
    owner: "CISO"
    frequency: "Annually per vendor"
  - artifact: "Contractual security provisions and SLA documentation"
    owner: "General Counsel"
    frequency: "Per contract"
  - artifact: "Third-party incident monitoring and notification procedures"
    owner: "Security Operations"
    frequency: "Continuous"
criteria:
  - "Governance"
---

Item 106(b)(2) specifically requires companies to describe their oversight and identification of material cybersecurity risks associated with the use of third-party service providers. This reflects the SEC's recognition that supply chain and vendor compromises are among the most significant cybersecurity risks facing public companies — breaches at third-party providers (SolarWinds, MOVEit, Okta) have repeatedly demonstrated that a company's attack surface extends well beyond its own infrastructure.

Your third-party risk management program should include a tiered assessment process that classifies vendors by the sensitivity of data they access and the criticality of services they provide. High-risk vendors — those with access to material data, financial systems, or critical infrastructure — should undergo detailed security assessments including SOC 2 report review, penetration test results, and contractual security requirements. Contracts should include provisions for breach notification timelines, right-to-audit clauses, and security minimum requirements. The vendor risk register should be a living document, updated as vendor relationships change and as new threat intelligence emerges.

Monitoring is the operational backbone of third-party risk oversight. Your organization should have processes for tracking vendor security incidents, evaluating whether a vendor breach could constitute a material event for your company, and escalating vendor-related incidents through the materiality determination framework. This monitoring feeds directly into the 10-K disclosure — if a third-party risk has materially affected or could reasonably affect your company, it must be disclosed.
