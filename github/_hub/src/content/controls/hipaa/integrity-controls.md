---
domain: "Integrity Controls"
order: 5
description: "Mechanisms to authenticate ePHI, verify it has not been altered, and authenticate persons or entities."
requirements:
  - "(A) Mechanism to authenticate ePHI and verify its integrity"
  - "(A) Mechanism to corroborate that ePHI has not been altered or destroyed in an unauthorized manner"
  - "(R) Person or entity authentication — verify the identity of persons or entities seeking access to ePHI"
evidence_examples:
  - artifact: "Integrity verification reports (checksums, hash validations) for ePHI databases"
    owner: "IT Operations"
    frequency: "Monthly"
  - artifact: "Authentication system configuration and multi-factor authentication enrollment records"
    owner: "IT Security"
    frequency: "Quarterly reviewed"
  - artifact: "Hash verification records for ePHI backups and archives"
    owner: "IT Operations"
    frequency: "Per backup cycle"
criteria:
  - "Security"
---

Integrity controls under 45 CFR § 164.312(c-d) protect ePHI from unauthorized alteration or destruction. The addressable specifications require mechanisms to authenticate ePHI — confirming that data received or stored is genuine and unmodified. This includes technologies like checksums, digital signatures, and hash verification that detect tampering or corruption in stored or transmitted health records.

Person or entity authentication is the required specification in this domain, mandating that organizations verify the identity of anyone or anything seeking access to ePHI. This goes beyond simple username and password — it encompasses multi-factor authentication, biometric verification, token-based authentication, and other methods appropriate to the risk level. The standard applies to both human users and system-to-system interfaces.

In practice, integrity controls work in concert with audit controls and access management. When an organization can demonstrate that ePHI is authenticated at rest, verified during transmission, and accessible only to authenticated persons and entities, it builds a comprehensive trust chain. OCR investigations often examine whether integrity mechanisms were in place before a breach, as unauthorized modification of health records can have direct patient safety implications.
