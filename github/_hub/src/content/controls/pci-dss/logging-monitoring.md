---
domain: "Logging & Monitoring"
order: 10
description: "Audit trail implementation, event correlation, time synchronization, log review, and retention for all CDE activity."
requirements:
  - "Audit trails established for all access to system components and cardholder data, linking actions to individual users"
  - "Automated audit trail mechanisms implemented for reconstructing security-relevant events"
  - "Time synchronization using NTP across all critical systems to ensure accurate log correlation"
  - "Audit logs reviewed at least daily, with automated mechanisms to detect anomalies and alert on suspicious activity"
  - "Audit trail history retained for at least 12 months, with at least three months immediately available for analysis"
evidence_examples:
  - artifact: "Log configurations showing captured event types and fields per system component"
    owner: "IT admin"
    frequency: "Semi-annually"
  - artifact: "SIEM dashboards and alert rule definitions for security event detection"
    owner: "Security team"
    frequency: "Quarterly"
  - artifact: "Daily log review records documenting reviewer, findings, and actions taken"
    owner: "Security team"
    frequency: "Daily"
  - artifact: "Log retention policy and storage capacity verification"
    owner: "IT admin"
    frequency: "Annually"
criteria:
  - "Security"
---

Requirement 10 mandates comprehensive audit logging across the cardholder data environment. Every access to cardholder data and every action on CDE system components must generate an audit trail entry that includes at minimum: user identification, event type, date and time, success or failure, origination of the event, and the identity or name of affected data, system component, or resource. This granularity enables forensic reconstruction when a breach is suspected.

Time synchronization is a foundational prerequisite that many organizations underestimate. Without consistent timestamps across all systems, correlating events across multiple log sources becomes unreliable. PCI DSS v4.0.1 requires NTP or equivalent time-synchronization technology, with time data protected from unauthorized modification and discrepancies detected and corrected.

The daily log review requirement is one of the most operationally demanding controls in PCI DSS. Reviewing logs manually at scale is infeasible, so most organizations deploy SIEM solutions that aggregate, correlate, and alert on security-relevant events. The review must be documented — who reviewed, what was examined, what anomalies were found, and what actions were taken. Retention of 12 months with three months immediately available means organizations need both hot storage (for recent analysis) and archive storage (for forensic investigations and compliance evidence).
