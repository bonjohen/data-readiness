---
domain: "Account Data Protection"
order: 3
description: "Minimization, masking, encryption, and key management for stored cardholder data and sensitive authentication data."
requirements:
  - "Stored account data minimized — only data necessary for business needs is retained"
  - "PAN rendered unreadable anywhere it is stored using truncation, hashing, tokenization, or strong encryption"
  - "Sensitive authentication data (SAD) not stored after authorization, even if encrypted"
  - "Cryptographic key management procedures documented and implemented for all encryption of stored data"
evidence_examples:
  - artifact: "Data retention and disposal policy with defined retention periods"
    owner: "Compliance"
    frequency: "Annually"
  - artifact: "PAN discovery scan results showing no unprotected PAN in storage"
    owner: "Security team"
    frequency: "Quarterly"
  - artifact: "Encryption key management records including key custodian assignments and rotation schedules"
    owner: "Security team"
    frequency: "Annually and on key events"
  - artifact: "Data flow diagrams documenting all locations where account data is stored"
    owner: "Compliance"
    frequency: "Annually and on change"
criteria:
  - "Security"
---

Requirement 3 is the heart of PCI DSS — protecting stored account data. The standard draws a hard line: sensitive authentication data (full track data, CAV2/CVC2/CVV2, PINs) must never be stored after authorization, regardless of encryption. Primary account numbers must be rendered unreadable wherever stored, whether in databases, log files, backups, or removable media. The four approved methods are truncation, one-way hashing, tokenization, and strong cryptography with associated key management.

Data minimization is equally important. Many organizations store cardholder data they no longer need, expanding their CDE scope unnecessarily. A well-defined retention policy that specifies what is kept, why, and for how long — combined with automated purging — reduces both compliance burden and breach impact.

Key management is where many implementations fail under audit scrutiny. PCI DSS v4.0.1 requires documented key generation, distribution, storage, rotation, and destruction procedures. Key custodians must be formally designated, split knowledge and dual control must be enforced for manual key operations, and key rotation must occur at defined intervals or upon suspected compromise. PAN discovery scans should run at least quarterly to catch unprotected PAN that has leaked outside designated storage locations.
