---
domain: "Material Incident Determination"
order: 1
description: "Framework for determining whether a cybersecurity incident is material under SEC rules, including escalation triggers and documentation requirements."
requirements:
  - "Materiality analysis framework for cyber incidents"
  - "Define 'material' in company context using quantitative and qualitative factors"
  - "Incident escalation triggers tied to materiality thresholds"
  - "Legal and financial impact assessment methodology"
  - "Documentation trail for all materiality decisions"
evidence_examples:
  - artifact: "Materiality framework document"
    owner: "General Counsel"
    frequency: "Annually reviewed"
  - artifact: "Escalation matrix with defined triggers"
    owner: "CISO"
    frequency: "Annually reviewed"
  - artifact: "Incident-to-materiality decision logs"
    owner: "Incident Response Lead"
    frequency: "Per incident"
  - artifact: "Quantitative and qualitative materiality threshold documentation"
    owner: "CFO"
    frequency: "Annually reviewed"
criteria:
  - "Governance"
---

The SEC Final Rule (17 CFR § 229.106) requires registrants to determine whether a cybersecurity incident is material — a determination that triggers the 4-business-day clock for filing an 8-K under Item 1.05. This control establishes the framework, criteria, and decision-making process your organization uses to make that determination consistently and defensibly. Without a predefined materiality framework, companies risk either delayed disclosure (regulatory violation) or premature disclosure (market disruption from immaterial events).

Your materiality framework should define both quantitative thresholds (financial impact, number of records affected, system downtime duration) and qualitative factors (reputational harm, litigation exposure, regulatory scrutiny, impact on business relationships). The framework must account for aggregation — multiple individually immaterial incidents that collectively cross the materiality threshold. Legal counsel, the CFO, and the CISO should jointly own the framework, with clear escalation paths ensuring that incidents reaching preliminary thresholds are surfaced to decision-makers without delay.

Documentation is the backbone of defensible materiality determinations. Every incident that reaches the escalation threshold should have a written record of the analysis performed, the factors considered, the individuals involved in the determination, and the rationale for the conclusion — whether or not the incident is ultimately deemed material. This documentation protects the organization in SEC inquiries and demonstrates that the company has a bona fide process, not ad hoc judgment calls.
