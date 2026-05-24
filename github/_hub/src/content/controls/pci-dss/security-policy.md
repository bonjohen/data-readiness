---
domain: "Information Security Policy"
order: 12
description: "Enterprise security policy, risk assessment, awareness training, incident response, and service provider management."
requirements:
  - "Information security policy established, published, maintained, reviewed annually, and acknowledged by all personnel"
  - "Acceptable use policies defined for critical technologies including remote access, wireless, removable media, and email"
  - "Formal risk assessment process conducted at least annually and upon significant environmental changes"
  - "Security awareness program implemented with training upon hire and at least annually thereafter"
  - "Incident response plan established, tested at least annually, and ready for immediate activation"
evidence_examples:
  - artifact: "Information security policy document with version control and annual review date"
    owner: "Compliance"
    frequency: "Annually"
  - artifact: "Employee policy acknowledgment records confirming receipt and understanding"
    owner: "Compliance"
    frequency: "Annually and upon hire"
  - artifact: "Risk assessment report documenting identified threats, vulnerabilities, and risk ratings"
    owner: "Security team"
    frequency: "Annually"
  - artifact: "Security awareness training completion records and incident response plan test results"
    owner: "Security team"
    frequency: "Annually"
criteria:
  - "Security"
---

Requirement 12 is the governance umbrella that ties all other PCI DSS requirements together through policy, process, and people. The information security policy must address all twelve PCI DSS requirements, be reviewed at least annually, and be disseminated to all relevant personnel. It is not enough to have a policy document — employees must acknowledge it, and management must enforce it. The policy must adapt as the threat landscape and business environment change.

Risk assessment is the mechanism that ensures security controls are proportionate to actual threats. PCI DSS v4.0.1 requires at least an annual formal risk assessment that identifies critical assets, threats, and vulnerabilities, and produces a risk rating for each identified risk. The risk assessment methodology must be documented, and results must drive prioritization of remediation efforts. Significant changes to the environment — new business processes, major system upgrades, acquisitions — should trigger an updated risk assessment.

The human element is addressed through security awareness training and incident response preparedness. All personnel must receive security awareness training upon hire and at least annually, with content that covers their specific responsibilities for protecting cardholder data. The incident response plan must define roles, communication procedures, containment strategies, and notification requirements (including payment brand notification). Annual testing of the IR plan — through tabletop exercises or simulated incidents — ensures that the organization can respond effectively when a breach occurs rather than scrambling to improvise under pressure.
