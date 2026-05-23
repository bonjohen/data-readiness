---
domain: "Change Management"
order: 9
description: "Evaluate the security impact of changes to information systems handling customer data, with documented approval, rollback procedures, and post-change verification."
requirements:
  - "Evaluate the security impact of all changes to information systems that handle customer information (§ 314.4(c)(7))"
  - "Implement a change approval process requiring security review before implementation"
  - "Maintain rollback procedures for changes that introduce security regressions"
  - "Conduct post-change verification to confirm security controls remain effective"
evidence_examples:
  - artifact: "Change request logs with security impact assessment, approval signatures, and implementation dates"
    owner: "IT Admin"
    frequency: "Per change"
  - artifact: "Security impact assessment templates completed for infrastructure, application, and configuration changes"
    owner: "Security Lead"
    frequency: "Per change"
  - artifact: "Post-change verification records confirming that security controls function as expected after deployment"
    owner: "IT Admin"
    frequency: "Per change"
criteria:
  - "Security"
---

Section 314.4(c)(7) requires financial institutions to evaluate the security implications of changes to their information systems before those changes are implemented. This applies to all change types — infrastructure upgrades, application deployments, configuration modifications, network changes, vendor integrations, and cloud service migrations. The underlying concern is that well-intentioned changes can inadvertently weaken existing security controls, create new vulnerabilities, or expose customer information through misconfiguration.

The change management process must include a security impact assessment as a standard gate. Before any change is approved, someone with security expertise must evaluate whether it affects access controls, encryption, logging, network segmentation, or any other safeguard protecting customer information. Changes that could affect security controls should require explicit security sign-off in addition to the standard change advisory board approval. Emergency changes — those made under time pressure to restore service — must still receive a retrospective security review within a defined timeframe.

Rollback capability is essential. Every change to a system handling customer information should have a documented rollback plan that can restore the previous state if the change introduces a security regression. Post-change verification must confirm that security controls remain effective after the change is implemented — this means testing access controls, verifying encryption settings, confirming logging is active, and validating that monitoring alerts still fire as expected. The change record should capture the entire lifecycle from request through verification, creating an auditable trail that demonstrates the institution manages change with security as a first-class concern.
