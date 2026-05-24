---
domain: "Encryption"
order: 5
description: "Encrypt customer information in transit and at rest using industry-standard methods, with documented key management procedures and compensating controls where encryption is not feasible."
requirements:
  - "Encrypt customer information in transit over external networks (§ 314.4(c)(3))"
  - "Encrypt customer information at rest on all storage systems"
  - "Implement key management procedures covering generation, distribution, rotation, and revocation"
  - "Document and justify alternative compensating controls where encryption is technically infeasible"
evidence_examples:
  - artifact: "Encryption standards document specifying algorithms, key lengths, and approved protocols"
    owner: "Security Lead"
    frequency: "Annually"
  - artifact: "Key management records including rotation schedules, custodian assignments, and revocation logs"
    owner: "IT Admin"
    frequency: "Quarterly"
  - artifact: "TLS configuration audit reports verifying cipher suites, certificate validity, and protocol versions"
    owner: "Security Lead"
    frequency: "Quarterly"
criteria:
  - "Security"
---

Section 314.4(c)(3) requires encryption of customer information both in transit and at rest. For transit encryption, this means TLS 1.2 or higher for all external network communications, including web applications, API integrations, email transmissions containing customer data, and file transfers to and from vendors. Internal network traffic carrying customer information should also be encrypted, particularly across network segments and between data centers. The encryption requirement is not limited to internet-facing systems — any network path that carries customer information is in scope.

At-rest encryption covers databases, file systems, backups, portable media, and cloud storage. The encryption must use industry-standard algorithms and key lengths — AES-256 for symmetric encryption, RSA-2048 or higher for asymmetric. Full-disk encryption alone may not be sufficient if the threat model includes insider access or compromised application credentials; field-level or database-level encryption may be necessary for the most sensitive data elements.

Key management is where encryption programs often fail in practice. The institution must document how keys are generated, who holds them, how they are rotated, and how compromised keys are revoked. Key material should never be stored alongside the data it protects. Where encryption is technically infeasible — for example, in legacy systems that cannot be upgraded — the institution must document the limitation, implement compensating controls such as enhanced access restrictions and monitoring, and include the gap in its risk assessment with a remediation timeline.
