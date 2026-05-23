---
domain: "Strong Cryptography for Transmission"
order: 4
description: "TLS configuration, certificate management, and encryption of cardholder data during transmission over open and public networks."
requirements:
  - "Strong cryptography used during transmission of cardholder data over open and public networks"
  - "Only trusted keys and certificates accepted — expired or self-signed certificates rejected"
  - "PAN protected if transmitted via end-user messaging technologies (email, instant messaging, SMS, chat)"
evidence_examples:
  - artifact: "TLS configuration records showing minimum protocol versions and cipher suites"
    owner: "IT admin"
    frequency: "Semi-annually"
  - artifact: "Certificate inventory with expiration dates and renewal tracking"
    owner: "Security team"
    frequency: "Quarterly"
  - artifact: "Messaging security policies prohibiting unencrypted PAN in end-user communications"
    owner: "Compliance"
    frequency: "Annually"
criteria:
  - "Security"
---

Requirement 4 ensures that cardholder data is protected when it leaves the controlled boundaries of the CDE and traverses open or public networks, including the internet, wireless networks, cellular technologies, and satellite communications. Strong cryptography means current-generation TLS (1.2 or higher) with approved cipher suites — SSL and early TLS are explicitly prohibited by PCI DSS v4.0.1.

Certificate management is a critical operational control. Expired, revoked, or self-signed certificates undermine the trust model that TLS depends on. Organizations must maintain a certificate inventory, track expiration dates, and have renewal processes that prevent lapses. Wildcard certificates, while convenient, expand the blast radius if a private key is compromised and should be used judiciously.

A commonly overlooked area is end-user messaging. Support staff who email a customer's full PAN, or developers who paste card numbers into Slack channels, create transmission-layer exposures that no amount of TLS on the payment gateway can mitigate. Policies must explicitly prohibit sending unprotected PAN via messaging technologies, and technical controls such as DLP scanning should be deployed to enforce those policies.
