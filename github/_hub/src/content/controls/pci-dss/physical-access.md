---
domain: "Physical Access Restriction"
order: 9
description: "Facility security, visitor management, media handling, and physical controls protecting CDE infrastructure."
requirements:
  - "Physical access controls restrict entry to the CDE to authorized personnel only"
  - "Visitors identified, authorized, escorted, and logged in areas containing CDE systems"
  - "All media containing cardholder data physically secured and access restricted"
  - "Strict control of internal and external distribution of media containing cardholder data"
  - "Electronic media containing cardholder data rendered unrecoverable when no longer needed"
evidence_examples:
  - artifact: "Physical access logs showing badge-in/badge-out records for CDE areas"
    owner: "Security team"
    frequency: "Daily review"
  - artifact: "Visitor logs with identification, escort, and authorization records"
    owner: "Security team"
    frequency: "Daily review"
  - artifact: "Media destruction records with method, date, and witness documentation"
    owner: "IT admin"
    frequency: "Per event"
  - artifact: "Facility security assessment documenting physical access control mechanisms"
    owner: "Security team"
    frequency: "Annually"
criteria:
  - "Security"
---

Requirement 9 addresses the physical dimension of cardholder data protection. Logical access controls are meaningless if an attacker can physically access CDE servers, network equipment, or media. Physical access must be controlled through mechanisms such as badge readers, biometric systems, or locked enclosures, with access granted only to personnel whose job function requires physical presence in the CDE area.

Visitor management is a critical component. All visitors to CDE areas must be identified (government-issued photo ID), authorized by an employee, and escorted at all times. Visitor badges must be visually distinguishable from employee badges, and visitor logs must be maintained for at least three months. Surveillance cameras or equivalent mechanisms should monitor entry points and sensitive areas, with footage retained for at least three months or as required by law.

Media handling controls cover the full lifecycle from creation through destruction. Hard drives, backup tapes, USB devices, paper records, and any other media containing cardholder data must be classified, inventoried, and physically secured. Distribution must be tracked, and media sent externally must be delivered via secured courier with management approval. When media is no longer needed, cardholder data must be rendered unrecoverable through cross-cut shredding (paper), degaussing, or physical destruction (electronic media), with destruction documented and witnessed.
