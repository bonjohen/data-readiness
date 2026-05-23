---
domain: "Data Inventory & Mapping"
order: 1
description: "Comprehensive mapping of personal information categories, sources, purposes of collection, and downstream sharing with third parties."
requirements:
  - "Maintain a personal information category inventory aligned with Cal. Civ. Code §1798.140(v)"
  - "Create and update data flow diagrams showing PI collection, use, storage, and disclosure"
  - "Document the business or commercial purpose for each category of PI collected (§1798.100(a))"
  - "Record all third-party sharing and service provider disclosures by PI category"
criteria:
  - "Privacy"
evidence_examples:
  - artifact: "PI category inventory spreadsheet with source, purpose, and retention columns"
    owner: "Privacy lead"
    frequency: "Quarterly"
  - artifact: "Data flow diagram covering all consumer-facing applications"
    owner: "Engineering lead"
    frequency: "Annually and on system change"
  - artifact: "Third-party data sharing register with contractual basis"
    owner: "Legal"
    frequency: "Quarterly"
  - artifact: "Purpose-of-use documentation linked to each PI category"
    owner: "Privacy lead"
    frequency: "Annually"
---

Data inventory and mapping is the foundational control for CCPA/CPRA compliance. Without an accurate picture of what personal information your organization collects, where it flows, and why it is collected, every downstream obligation becomes guesswork. The statute defines personal information broadly in §1798.140(v), covering identifiers, commercial information, biometrics, internet activity, geolocation, professional data, and inferences drawn from any of these categories. Organizations that treat this as a one-time cataloging exercise quickly fall behind as new data sources, integrations, and vendor relationships emerge.

A practical inventory ties each PI category to its collection source (directly from consumers, from third parties, from cookies/tracking), the business purpose it serves, the retention period applied, and the downstream recipients. This mapping directly feeds the privacy notice disclosures required under §1798.100(b) and the right-to-know response obligations. Regulators expect data flow diagrams that show the journey of PI from intake through processing, storage, and eventual deletion or de-identification.

Common pitfalls include treating the inventory as a legal-only exercise without engineering input, failing to capture PI embedded in logs and analytics pipelines, and letting the inventory go stale after the initial build. The California Privacy Protection Agency (CPPA) has signaled in rulemaking that it expects organizations to demonstrate ongoing accuracy of their PI mapping, not just a point-in-time snapshot. Quarterly reviews with cross-functional stakeholders are the minimum cadence that withstands regulatory scrutiny.
