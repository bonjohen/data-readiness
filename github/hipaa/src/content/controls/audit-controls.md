---
domain: "Audit Controls & Logging"
order: 4
description: "Hardware, software, and procedural mechanisms to record and examine activity in ePHI systems."
requirements:
  - "(R) Implement hardware, software, and procedural mechanisms to record and examine activity in information systems containing ePHI"
  - "(R) Procedures for monitoring log-in attempts and reporting discrepancies"
  - "(R) Retention of audit logs for a period consistent with documentation retention requirements"
  - "(R) Regular review of audit logs and activity reports"
evidence_examples:
  - artifact: "Audit log configuration documentation for all ePHI systems"
    owner: "IT Security"
    frequency: "Annually reviewed"
  - artifact: "Log review records with reviewer sign-off and findings"
    owner: "IT Security"
    frequency: "Monthly"
  - artifact: "SIEM dashboard or centralized log aggregation configuration"
    owner: "IT Security"
    frequency: "Quarterly verified"
  - artifact: "Log retention policy aligned with HIPAA six-year documentation requirement"
    owner: "Compliance Officer"
    frequency: "Annually reviewed"
criteria:
  - "Security"
---

Audit controls under 45 CFR § 164.312(b) require covered entities and business associates to implement mechanisms that record and examine activity in information systems containing ePHI. This is a required implementation specification with no addressable alternative — every system that touches ePHI must produce audit trails. The logs must capture who accessed what data, when, and what actions were taken.

Generating logs is only part of the requirement. Organizations must establish procedures for regularly reviewing audit logs, monitoring log-in attempts, and investigating discrepancies. Unreviewed logs provide forensic value but fail the intent of the regulation, which is proactive detection of unauthorized access or suspicious activity. OCR expects to see evidence that logs are actually examined, not merely collected.

Log retention is another critical dimension. While the Security Rule does not specify an exact retention period for audit logs, the documentation retention requirement under § 164.530(j) mandates six years for policies and procedures. Organizations should align their log retention with this baseline and consider longer retention where state laws or business needs dictate. Centralized log management through a SIEM or equivalent platform significantly simplifies both review and retention.
