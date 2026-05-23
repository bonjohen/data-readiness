---
domain: "Transmission Security"
order: 6
description: "Integrity controls and encryption for ePHI transmitted over electronic communications networks."
requirements:
  - "(A) Integrity controls to ensure ePHI is not improperly modified during transmission"
  - "(A) Encryption of ePHI transmitted over electronic communications networks"
evidence_examples:
  - artifact: "TLS configuration records showing minimum version and cipher suite settings"
    owner: "IT Security"
    frequency: "Quarterly reviewed"
  - artifact: "VPN configuration documentation for remote ePHI access"
    owner: "IT Operations"
    frequency: "Annually reviewed"
  - artifact: "Encrypted email policy and gateway configuration"
    owner: "IT Security"
    frequency: "Annually reviewed"
  - artifact: "Network architecture diagram showing encryption points for ePHI data flows"
    owner: "IT Security"
    frequency: "Annually updated"
criteria:
  - "Security"
---

Transmission security under 45 CFR § 164.312(e) addresses the protection of ePHI as it moves across electronic communications networks. Both integrity controls and encryption for data in transit are addressable specifications, but given the ubiquity of TLS and VPN technologies, most organizations are expected to implement encryption rather than document why an alternative is sufficient.

The integrity component requires mechanisms to ensure that ePHI is not improperly modified without detection during transmission. This typically involves TLS with authenticated cipher suites, message authentication codes, or digital signatures on transmitted data. For internal network segments, organizations should assess whether the risk profile justifies encryption or whether physical and logical network controls provide equivalent protection.

OCR has consistently scrutinized transmission security in enforcement actions, particularly for organizations that transmit ePHI over the public internet without encryption. Common risk areas include unencrypted email containing ePHI, unsecured wireless networks in clinical settings, and legacy interfaces between healthcare systems that predate modern encryption standards. Organizations should inventory all ePHI transmission paths and ensure each one has appropriate protection.
