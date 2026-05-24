---
domain: "Data Retention & Deletion"
order: 5
description: "Policies and procedures governing how long children's personal information is retained and ensuring timely, secure deletion."
requirements:
  - "Retain children's PI only as long as reasonably necessary to fulfill the purpose for which it was collected (16 CFR § 312.10)"
  - "Establish and follow documented retention schedules for all categories of children's PI"
  - "Honor parental requests to delete their child's PI within a reasonable timeframe (§ 312.6(a)(2))"
  - "Securely dispose of children's PI that is no longer needed using methods that prevent reconstruction (§ 312.10)"
criteria:
  - "Privacy"
evidence_examples:
  - artifact: "Data retention schedule listing PI categories, retention periods, and deletion triggers"
    owner: "Privacy lead"
    frequency: "Annually"
  - artifact: "Parental deletion request log with response timestamps and completion confirmation"
    owner: "Customer support lead"
    frequency: "Continuous (system-generated)"
  - artifact: "Secure disposal certification or audit trail for expired children's PI"
    owner: "Engineering lead"
    frequency: "Quarterly"
---

COPPA requires at 16 CFR § 312.10 that operators retain children's personal information only for as long as is reasonably necessary to fulfill the purpose for which it was collected. Once that purpose has been served, the operator must securely dispose of the information using reasonable measures to protect against unauthorized access or use. This is not a vague aspiration; the FTC expects operators to have documented retention schedules that specify how long each category of children's PI is kept and what triggers its deletion.

The deletion obligation also arises from parental rights under § 312.6(a)(2). A parent has the right to request that the operator delete any PI collected from their child. Operators must provide a mechanism for parents to exercise this right and must respond within a reasonable timeframe. This means organizations need both automated deletion pipelines for expired data and manual processes for handling parental deletion requests, including verification that the requestor is actually the child's parent.

Secure disposal under § 312.10 requires more than simply deleting a database record. Children's PI embedded in backups, logs, analytics systems, third-party services, and machine learning training sets must all be addressed. Organizations should map every location where children's PI resides and ensure their deletion procedures reach each one. Quarterly audits of deletion completeness, combined with technical controls like automated retention enforcement and cascading deletes, reduce the risk of PI persisting beyond its authorized retention period.
