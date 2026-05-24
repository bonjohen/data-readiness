---
domain: "Contingency Planning"
order: 8
description: "Data backup, disaster recovery, emergency mode operations, and testing and revision of contingency procedures."
requirements:
  - "(R) Data backup plan — establish and implement procedures to create and maintain exact copies of ePHI"
  - "(R) Disaster recovery plan — establish procedures to restore ePHI data lost during an emergency"
  - "(R) Emergency mode operation plan — procedures to enable continuation of critical business processes during an emergency"
  - "(A) Testing and revision procedures for contingency plans"
  - "(A) Applications and data criticality analysis"
evidence_examples:
  - artifact: "Backup verification records with restoration test results"
    owner: "IT Operations"
    frequency: "Monthly"
  - artifact: "Disaster recovery plan document with defined RTOs and RPOs"
    owner: "IT Security / Business Continuity"
    frequency: "Annually reviewed"
  - artifact: "Emergency mode operation procedures and activation criteria"
    owner: "Security Officer"
    frequency: "Annually reviewed"
  - artifact: "Contingency plan test results and lessons learned"
    owner: "IT Security"
    frequency: "Annually"
criteria:
  - "Security"
---

Contingency planning under 45 CFR § 164.308(a)(7) ensures that ePHI remains available and recoverable during and after emergencies. The three required specifications — data backup, disaster recovery, and emergency mode operations — form a continuum from routine data protection through catastrophic event response. Healthcare organizations face unique pressure here because ePHI unavailability can directly affect patient care.

The data backup plan must address the creation and maintenance of retrievable exact copies of ePHI. This means documented backup schedules, defined retention periods, secure off-site or cloud storage, and regular restoration testing. A backup that has never been tested is not a backup — it is an assumption. OCR expects evidence that restoration procedures work and that backup integrity is verified.

Testing and revision of contingency plans and applications and data criticality analysis are addressable specifications, but organizations that skip them face significant risk. A criticality analysis identifies which systems and data are essential to operations, guiding recovery prioritization. Regular testing — whether tabletop exercises or full failover drills — reveals gaps before a real emergency exposes them. Organizations should document test scenarios, results, and any corrective actions taken.
