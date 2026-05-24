---
domain: "Logging and Monitoring"
order: 4
description: "Centralized audit logs, alert routing, threat monitoring, and incident escalation paths."
requirements:
  - "Centralized log collection for all in-scope systems"
  - "Alert routing for security-relevant events"
  - "Monitoring for threats, anomalies, and capacity"
  - "Defined escalation path from alert to incident"
evidence_examples:
  - artifact: "Log aggregation configuration and retention policy"
    owner: "SRE / Platform team"
    frequency: "Annually or on change"
  - artifact: "Alert rule definitions and notification routing"
    owner: "SRE / Security"
    frequency: "Quarterly review"
  - artifact: "Sample alert-to-incident escalation record"
    owner: "Security lead"
    frequency: "Per incident"
criteria:
  - "Security"
  - "Availability"
---

Logging and monitoring demonstrate that your organization can detect and respond to security events. Auditors want to see that logs are collected, retained, and actually reviewed rather than simply stored.

The most common gap is having logging enabled but no defined alert rules or escalation process. Collecting logs without acting on them does not satisfy the control objective.
