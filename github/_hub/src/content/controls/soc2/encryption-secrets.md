---
domain: "Encryption and Secrets"
order: 9
description: "Encryption in transit and at rest, secure secret storage, and key rotation process."
requirements:
  - "Encryption in transit (TLS) for all external communications"
  - "Encryption at rest for sensitive data stores"
  - "Secure secret storage (vault or managed service)"
  - "Key rotation process where risk warrants it"
evidence_examples:
  - artifact: "TLS configuration and certificate records"
    owner: "SRE / DevOps"
    frequency: "Annually or on change"
  - artifact: "Secret management tool configuration"
    owner: "DevOps / Security"
    frequency: "Annually"
  - artifact: "Key rotation log or policy"
    owner: "Security lead"
    frequency: "Per rotation schedule"
criteria:
  - "Security"
  - "Confidentiality"
---

Encryption controls protect data from unauthorized access both in transit and at rest. Auditors verify that sensitive data is encrypted using industry-standard methods and that secrets (API keys, credentials, certificates) are stored securely rather than hardcoded in source code.

Key rotation is important but should be risk-proportionate. Auditors primarily want to see that you have a process, not that every key rotates on a fixed schedule regardless of risk.
