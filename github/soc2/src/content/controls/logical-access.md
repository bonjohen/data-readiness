---
domain: "Logical Access"
order: 1
description: "Centralized identity, role-based access, documented provisioning, periodic review, and prompt deprovisioning."
requirements:
  - "Centralized identity provider for all in-scope systems"
  - "Role-based access with documented provisioning workflows"
  - "Periodic access reviews (quarterly preferred, annual minimum)"
  - "Prompt deprovisioning on termination or role change"
evidence_examples:
  - artifact: "User/permission export with review sign-off"
    owner: "Security lead or IT admin"
    frequency: "Quarterly"
  - artifact: "Access request ticket with approver record"
    owner: "IT admin or app owner"
    frequency: "Event-driven"
  - artifact: "Offboarding checklist with disable timestamps"
    owner: "HR + IT"
    frequency: "Event-driven"
criteria:
  - "Security"
---

Logical access is the foundation of your SOC 2 control environment. Auditors expect to see that every user has the right level of access, that access is granted through a documented process, and that former employees or role changes are handled promptly.

Common pitfalls include relying on shared accounts, skipping quarterly access reviews, and slow deprovisioning after offboarding. These are among the most frequently cited findings in SOC 2 audits.
