---
domain: "Access Management"
order: 3
description: "Unique user identification, emergency access procedures, automatic logoff, and encryption of ePHI at rest."
requirements:
  - "(R) Unique user identification — assign a unique name or number to each user"
  - "(R) Emergency access procedure for obtaining ePHI during an emergency"
  - "(A) Automatic logoff after a predetermined period of inactivity"
  - "(A) Encryption and decryption of ePHI at rest"
evidence_examples:
  - artifact: "User ID policy prohibiting shared or generic accounts"
    owner: "IT Security"
    frequency: "Annually reviewed"
  - artifact: "Emergency access procedures with break-glass account documentation"
    owner: "IT Security"
    frequency: "Annually tested"
  - artifact: "Session timeout configuration evidence across ePHI systems"
    owner: "IT Operations"
    frequency: "Quarterly verified"
  - artifact: "Encryption status report for ePHI storage systems"
    owner: "IT Security"
    frequency: "Quarterly"
criteria:
  - "Security"
---

Access management under 45 CFR § 164.312(a) establishes the technical controls that govern who can access ePHI and under what circumstances. The required specification for unique user identification ensures that every action in an ePHI system can be traced to a specific individual, eliminating the accountability gaps created by shared or generic accounts. Emergency access procedures provide a documented, auditable path to ePHI when normal access channels are unavailable.

Automatic logoff and encryption are addressable specifications, meaning organizations must implement them or document why an equivalent alternative is reasonable and appropriate. In practice, most organizations implement both — session timeouts prevent unauthorized access from unattended workstations, and encryption at rest protects ePHI on stolen or decommissioned devices.

OCR has levied significant penalties for encryption failures, particularly involving lost or stolen laptops containing unencrypted ePHI. Even though encryption is addressable rather than required, choosing not to encrypt is a risk decision that demands rigorous documentation of the alternative safeguards in place and the rationale for that decision.
