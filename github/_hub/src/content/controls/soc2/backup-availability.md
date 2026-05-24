---
domain: "Backup and Availability"
order: 10
description: "Backup frequency and retention, failure monitoring, restore testing, and capacity monitoring."
requirements:
  - "Defined backup frequency and retention for critical data"
  - "Monitoring for backup failures with alerting"
  - "Periodic restore testing to validate recoverability"
  - "Capacity and availability monitoring for production systems"
evidence_examples:
  - artifact: "Backup configuration with frequency and retention"
    owner: "SRE / Platform"
    frequency: "Annually or on change"
  - artifact: "Backup failure alert configuration"
    owner: "SRE"
    frequency: "Continuous"
  - artifact: "Restore test report with results"
    owner: "SRE / Platform"
    frequency: "Annually"
criteria:
  - "Security"
  - "Availability"
---

Backup and availability controls demonstrate that your organization can recover from data loss and maintain service continuity. Auditors want evidence not just that backups run, but that they are monitored for failures and periodically tested.

The restore test is the most commonly missing piece. Many organizations back up data reliably but have never verified that a restore actually works. A documented restore test, even on a subset of data, provides strong audit evidence.
