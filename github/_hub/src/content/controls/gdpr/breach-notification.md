---
domain: "Data Breach Notification"
order: 8
description: "Detect, assess, and notify personal data breaches within the timelines and procedures mandated by Art. 33–34."
requirements:
  - "72-hour notification to the supervisory authority for breaches likely to result in risk (Art. 33(1))"
  - "Risk assessment to determine whether data subject notification is required (Art. 34)"
  - "Comprehensive breach register documenting all breaches regardless of notification obligation (Art. 33(5))"
  - "Processor obligation to notify controller without undue delay upon becoming aware of a breach (Art. 33(2))"
evidence_examples:
  - artifact: "Breach register documenting facts, effects, and remedial actions for all incidents"
    owner: "Information Security Manager"
    frequency: "Ongoing"
  - artifact: "Supervisory authority notification records with submission timestamps and content"
    owner: "Data Protection Officer"
    frequency: "Per breach event"
  - artifact: "Incident response playbook covering breach detection, assessment, containment, and notification workflows"
    owner: "Chief Information Security Officer"
    frequency: "Annually reviewed"
  - artifact: "Processor breach notification clause compliance tracker"
    owner: "Vendor Management Lead"
    frequency: "Semi-annually"
criteria:
  - "Privacy"
---

Articles 33 and 34 establish a structured breach notification regime. When a personal data breach occurs that is likely to result in a risk to the rights and freedoms of individuals, the controller must notify the competent supervisory authority without undue delay and, where feasible, within 72 hours of becoming aware of the breach. The notification must include the nature of the breach, approximate number of data subjects and records affected, the DPO's contact details, likely consequences, and measures taken or proposed to address the breach. If full information is not available within 72 hours, information may be provided in phases.

Data subject notification under Art. 34 is triggered when a breach is likely to result in a *high* risk to rights and freedoms — a higher threshold than the supervisory authority notification. The communication must describe the breach in clear and plain language and include the DPO's contact details, likely consequences, and remedial measures. Notification to data subjects is not required if the controller has implemented appropriate technical protections (such as encryption) rendering the data unintelligible, has taken subsequent measures eliminating the high risk, or if individual notification would involve disproportionate effort (in which case a public communication is required).

All breaches — whether or not they trigger a notification obligation — must be documented in a breach register under Art. 33(5). This register must record the facts of the breach, its effects, and the remedial action taken. Supervisory authorities use this register during audits to assess whether the organization's breach assessment process is consistent and whether notification decisions were appropriate. Organizations should invest in breach detection capabilities and tabletop exercises to ensure the 72-hour clock starts with actual awareness, not delayed discovery.
