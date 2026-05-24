---
domain: "Consumer Rights — Access & Deletion"
order: 3
description: "Verified consumer request intake, processing, and fulfillment for access (right to know) and deletion rights within statutory timelines."
requirements:
  - "Respond to verified consumer requests within 45 calendar days, with one 45-day extension if reasonably necessary (§1798.145(g))"
  - "Implement identity verification procedures proportional to the sensitivity of the PI requested (§1798.185(a)(7))"
  - "Apply two-step confirmation for deletion requests to prevent accidental data loss"
  - "Provide a 12-month lookback of PI collected, disclosed, and sold when responding to right-to-know requests (§1798.130(a)(2))"
criteria:
  - "Privacy"
evidence_examples:
  - artifact: "Consumer request intake log with receipt dates, verification status, and response dates"
    owner: "Privacy lead"
    frequency: "Monthly"
  - artifact: "Identity verification procedure documentation with threshold criteria"
    owner: "Legal"
    frequency: "Annually"
  - artifact: "Sample right-to-know response package showing 12-month lookback"
    owner: "Privacy lead"
    frequency: "On request"
  - artifact: "Deletion confirmation records with two-step verification evidence"
    owner: "Engineering lead"
    frequency: "On request"
---

The right to know and the right to delete are the most operationally demanding consumer rights under the CCPA/CPRA. When a consumer submits a verifiable request, the business must confirm receipt within 10 business days and provide a substantive response within 45 calendar days. The response must cover the categories of PI collected, the specific pieces of PI held (if requested), the sources, the business purposes, and the categories of third parties to whom PI was disclosed or sold over the preceding 12 months.

Deletion requests add mechanical complexity because PI often resides in multiple systems — production databases, backups, analytics warehouses, vendor systems, and logs. The statute requires businesses to direct service providers and contractors to delete the consumer's PI as well, creating a cascading obligation. Two-step confirmation protects both the consumer and the business: the consumer first submits the request, then separately confirms they want the deletion to proceed. Organizations should maintain a system-of-record map that identifies every location where PI for a given consumer could reside so deletion can be executed comprehensively.

Common audit findings include: missed 45-day deadlines because intake channels are not monitored consistently, verification procedures that are either too lax (accepting unverified requests and risking unauthorized disclosure) or too burdensome (effectively discouraging consumers from exercising their rights), and incomplete deletion that leaves PI in backup systems or third-party platforms. A ticketing workflow with automated SLA tracking and escalation rules is the minimum infrastructure needed to manage this obligation reliably at scale.
