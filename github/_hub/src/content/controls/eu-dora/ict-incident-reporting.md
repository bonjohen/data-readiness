---
domain: "ICT Incident Classification & Reporting"
order: 2
description: "Classification methodology for ICT-related incidents and mandatory reporting of major incidents to competent authorities."
requirements:
  - "Classification methodology for ICT-related incidents using defined criteria (clients affected, duration, geographic spread, data losses, criticality of services)"
  - "Notification to competent authority for major incidents via initial, intermediate, and final reports"
  - "Significant cyber threat reporting to competent authorities (voluntary)"
  - "Incident management process covering detection, logging, classification, escalation, and resolution"
evidence_examples:
  - artifact: "Incident classification matrix with major incident criteria and severity thresholds"
    owner: "ICT Risk Manager"
    frequency: "Annually reviewed; updated upon regulatory guidance"
  - artifact: "Major incident notification records (initial, intermediate, final reports to competent authority)"
    owner: "Compliance Officer"
    frequency: "Per major incident"
  - artifact: "Incident management procedure documentation with escalation paths"
    owner: "Security Operations Center"
    frequency: "Annually reviewed"
  - artifact: "Incident register with classification decisions and timeline records"
    owner: "ICT Risk Manager"
    frequency: "Per incident; quarterly summary review"
criteria:
  - "Governance"
---

DORA Chapter III (Articles 17–23) introduces a harmonized ICT incident classification and reporting regime across the EU financial sector. Financial entities must implement a classification methodology that evaluates incidents against defined criteria — number of clients affected, duration of the incident, geographic spread, data losses, and criticality of impacted services — to determine whether an incident qualifies as major. This replaces the fragmented reporting requirements that previously existed across different financial sector directives.

Major incidents trigger mandatory notification to the competent authority through a structured reporting sequence: an initial notification within tight timeframes, an intermediate report with updated details, and a final report including root cause analysis and remediation measures. The European Supervisory Authorities (ESAs) have published regulatory technical standards (RTS) specifying exact timelines and report templates. Financial entities may also voluntarily report significant cyber threats they detect.

The underlying incident management process must support this reporting obligation with reliable detection, structured logging, consistent classification decisions, and clear escalation paths. Organizations that rely on critical ICT third-party service providers must ensure their contractual arrangements include provisions for the provider to support incident detection and reporting obligations, since the financial entity retains ultimate responsibility for regulatory notification regardless of where the incident originates.
