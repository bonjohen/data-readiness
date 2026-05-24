---
module_name: "Warehouse & Analytics Governance"
order: 7
why_credible: "DORA's business continuity (Art. 11–12) and ICT asset management requirements apply to data warehouses supporting financial analytics, reporting, and regulatory obligations."
additions:
  - "Warehouse infrastructure included in resilience testing programme"
  - "Regulatory reporting data integrity controls with reconciliation procedures"
  - "Analytics platform BCP/DR with defined RTOs for reporting-critical systems"
---

Data warehouses and analytics platforms in financial entities are ICT assets under DORA that often support critical functions — regulatory reporting, risk calculation, client reporting, and management information. These systems must be included in the ICT asset register, classified by criticality, and covered by business continuity and disaster recovery plans with defined RTOs appropriate to their role in time-sensitive regulatory obligations.

Resilience testing should include warehouse failure scenarios, particularly for systems feeding regulatory reports with fixed deadlines. Financial entities should validate that backup and recovery procedures work for large-scale data stores, that data integrity is preserved through recovery operations, and that analytics platforms can be restored within the RTOs needed to meet regulatory reporting timelines. Data reconciliation procedures between source systems and the warehouse provide an ongoing integrity check that supports both operational resilience and audit readiness.
