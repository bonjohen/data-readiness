---
domain: "Privileged Access and MFA"
order: 2
description: "Separate privileged roles, least privilege enforcement, and MFA for administrative and production-sensitive access."
requirements:
  - "Separate privileged roles from standard user accounts"
  - "Enforce least privilege across all in-scope systems"
  - "MFA required for administrative and production-sensitive access"
  - "Document and review privileged access grants periodically"
evidence_examples:
  - artifact: "Admin role inventory with justification"
    owner: "Security lead"
    frequency: "Quarterly"
  - artifact: "MFA enforcement configuration screenshot"
    owner: "IT admin"
    frequency: "Annually or on change"
  - artifact: "Privileged access request and approval record"
    owner: "IT admin"
    frequency: "Event-driven"
criteria:
  - "Security"
---

Privileged access controls limit the blast radius of compromised credentials. Auditors look for clear separation between day-to-day and administrative accounts, enforced MFA on all elevated access, and evidence that privileged grants are justified and reviewed.

A common gap is allowing developers to use the same account for both development work and production infrastructure access. Separate roles with documented justification close this gap.
