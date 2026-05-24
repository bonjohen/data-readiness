---
domain: "Incident Response"
order: 10
description: "Maintain a written incident response plan with defined roles, escalation procedures, FTC notification obligations for breaches affecting 500+ customers, and mandatory post-incident review."
requirements:
  - "Maintain a written incident response plan addressing detection, containment, eradication, and recovery (§ 314.4(h))"
  - "Define roles, responsibilities, and escalation paths for security incident response"
  - "Implement notification procedures including FTC notification when 500 or more customers are affected"
  - "Conduct post-incident review to identify root causes and update safeguards accordingly"
evidence_examples:
  - artifact: "Written incident response plan with detection procedures, containment steps, communication templates, and recovery checklists"
    owner: "CISO"
    frequency: "Annually"
  - artifact: "Incident log recording all security events, severity classification, response actions, and resolution timestamps"
    owner: "Security Lead"
    frequency: "Per incident"
  - artifact: "FTC notification records and customer breach notification documentation for qualifying incidents"
    owner: "Compliance Officer"
    frequency: "Per incident"
  - artifact: "Post-incident review reports with root cause analysis, lessons learned, and remediation actions"
    owner: "CISO"
    frequency: "Per incident"
criteria:
  - "Security"
---

Section 314.4(h) requires a written incident response plan that the institution can execute immediately when a security event occurs. The plan must cover the full incident lifecycle — detection and identification of the event, containment to prevent further damage, eradication of the threat, recovery of affected systems, and post-incident analysis. A plan that exists only as a document but has never been tested is insufficient; the rule expects that the institution can demonstrate readiness through tabletop exercises, simulations, or actual incident response performance.

The plan must define specific roles and responsibilities. Who declares an incident? Who leads containment? Who communicates with affected customers, regulators, and law enforcement? Who handles evidence preservation? These roles must be assigned to named positions (not just departments) with clear escalation paths when the primary responder is unavailable. Contact information, after-hours procedures, and external resources (forensic firms, legal counsel, law enforcement liaisons) should be documented and current.

The 2023 amendments introduced a specific FTC notification requirement: when an incident results in unauthorized access to unencrypted customer information affecting 500 or more customers, the institution must notify the FTC. The notification must include details about the incident, the type of information involved, the number of affected individuals, and the institution's remediation actions. Post-incident reviews are mandatory regardless of notification thresholds — every incident should produce a root cause analysis and drive updates to the safeguards program so that the same type of incident does not recur.
