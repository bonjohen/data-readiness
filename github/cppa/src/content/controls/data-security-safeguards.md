---
domain: "Data Security Safeguards"
order: 8
description: "Reasonable security procedures and practices to protect personal information from unauthorized access, destruction, use, modification, or disclosure."
requirements:
  - "Implement reasonable security procedures and practices appropriate to the nature of the PI (§1798.100(e))"
  - "Maintain breach notification procedures compliant with Cal. Civ. Code §1798.82"
  - "Apply encryption to PI categories covered under the breach notification statute"
  - "Conduct periodic risk assessments addressing threats to PI confidentiality, integrity, and availability"
criteria:
  - "Privacy"
evidence_examples:
  - artifact: "Annual risk assessment report covering PI systems and threat landscape"
    owner: "Security lead"
    frequency: "Annually"
  - artifact: "Encryption-at-rest and in-transit configuration evidence for PI data stores"
    owner: "Engineering lead"
    frequency: "Quarterly"
  - artifact: "Breach response plan with tabletop exercise results"
    owner: "Security lead"
    frequency: "Annually"
  - artifact: "Vulnerability scan and penetration test reports for PI-processing systems"
    owner: "Security lead"
    frequency: "Quarterly"
---

The CCPA's private right of action under §1798.150 makes data security one of the highest-stakes control domains. Consumers whose nonencrypted and nonredacted PI is subject to unauthorized access due to a business's failure to implement and maintain reasonable security procedures can seek statutory damages of $100 to $750 per consumer per incident, or actual damages, whichever is greater. Class action litigation under this provision has produced significant settlements, making "reasonable security" a concrete financial risk rather than an abstract compliance obligation.

The statute does not prescribe specific technical controls, but the California Attorney General has pointed to the Center for Internet Security (CIS) Controls as a benchmark for "reasonable security." At a minimum, organizations should implement access controls, encryption for PI at rest and in transit, network segmentation for PI-processing systems, logging and monitoring, vulnerability management, and incident response capabilities. CPRA added a requirement for businesses whose processing presents significant risk to consumer privacy to submit risk assessments to the CPPA, further raising the bar.

Breach notification under §1798.82 requires notification to affected consumers "in the most expedient time possible and without unreasonable delay" when unencrypted PI is acquired by an unauthorized person. Breaches affecting more than 500 California residents also require notification to the Attorney General. Organizations should maintain a tested incident response plan, conduct tabletop exercises at least annually, and ensure that their encryption posture covers the specific PI categories listed in the breach notification statute (SSN, driver's license, financial account numbers, medical information, health insurance information, and biometric data).
