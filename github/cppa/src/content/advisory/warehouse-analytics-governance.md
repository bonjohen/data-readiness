---
module_name: "Warehouse & Analytics Governance"
order: 7
why_credible: "Data warehouses that aggregate consumer PI across contexts must respect CPRA's cross-context behavioral advertising restrictions (§1798.140(k)) and the prohibition on combining PI from different sources without appropriate authorization."
additions:
  - "Cross-context PI aggregation controls preventing unauthorized behavioral profiling"
  - "Warehouse-level access controls aligned with purpose limitation for each PI dataset"
  - "Automated PI retention enforcement within warehouse and analytics pipelines"
  - "Consumer rights fulfillment procedures covering warehouse-resident PI"
---

Data warehouses and analytics platforms are often the largest and least-governed repositories of consumer personal information. They aggregate PI from multiple collection points — web, mobile, CRM, support tickets, transactions — and enable cross-context analysis that may constitute "sharing" under CPRA if it supports behavioral advertising across different contexts. The statute defines cross-context behavioral advertising (§1798.140(k)) as the targeting of advertising based on PI obtained from a consumer's activity across distinctly branded websites, applications, or services other than the one with which the consumer intentionally interacts.

Organizations should implement warehouse-level controls that prevent unauthorized cross-context aggregation. This includes tagging PI datasets with their collection context and purpose, applying access controls that restrict analysts to data within their authorized scope, and building automated retention enforcement that purges PI that has exceeded its retention period. Consumer rights fulfillment is particularly challenging in warehouse environments because PI is often denormalized, duplicated across tables, and embedded in derived datasets. A deletion request that reaches the production database but not the warehouse leaves the organization non-compliant.
