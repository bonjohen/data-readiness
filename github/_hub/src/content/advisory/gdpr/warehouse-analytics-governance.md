---
module_name: "Warehouse & Analytics Governance"
order: 7
why_credible: "GDPR purpose limitation under Art. 5(1)(b) restricts repurposing personal data in analytics warehouses and data lakes without a compatible purpose assessment, and data minimization under Art. 5(1)(c) constrains the scope of data aggregation."
additions:
  - "Compatible purpose test (Art. 6(4)) for analytics use cases repurposing operational personal data"
  - "Anonymization and pseudonymization strategies for analytics datasets to reduce compliance burden"
  - "Analytics-specific DPIA for warehouse processing that profiles or segments individuals"
---

Data warehouses and analytics platforms are where purpose limitation violations most commonly occur. Personal data collected for transactional purposes — order processing, customer support, account management — flows into centralized analytics environments where it is aggregated, enriched, and analyzed for purposes that may not have been contemplated at collection. Each new analytics use case that involves personal data requires either a compatible purpose assessment under Art. 6(4) or a new, independent lawful basis. Simply moving data into a warehouse does not cleanse it of its original purpose constraints.

Organizations should implement a governance layer between operational data sources and analytics environments that enforces purpose controls, applies pseudonymization or anonymization where feasible, and documents the lawful basis for each analytics processing activity. Anonymization — when properly implemented so that data subjects can no longer be identified — removes data from GDPR scope entirely, making it the preferred approach for analytics where individual identification is not needed. However, anonymization must be genuine: datasets that can be re-identified through combination with other available data remain personal data. A DPIA should be conducted for analytics processing that involves profiling, segmentation, or scoring of individuals, as these activities are likely to meet the Art. 35 threshold for high-risk processing.
