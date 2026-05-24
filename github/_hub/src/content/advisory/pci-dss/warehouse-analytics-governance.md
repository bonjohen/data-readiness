---
module_name: "Warehouse & Analytics Governance"
order: 7
why_credible: "Analytics warehouses processing cardholder data or CDE-derived datasets fall within PCI DSS scope and must meet all 12 requirements including network segmentation (Req 1), access controls (Req 7), and audit trails (Req 10)."
additions:
  - "CDE scoping assessment for analytics warehouses receiving cardholder data feeds"
  - "Network segmentation between analytics environments and the production CDE"
  - "Column-level access controls preventing unauthorized access to PAN fields in analytical datasets"
  - "Data masking and tokenization requirements for cardholder data used in reporting and dashboards"
  - "Audit logging of all analytical queries touching cardholder data fields"
---

Analytics warehouses are frequently overlooked during PCI DSS scoping because they are perceived as read-only reporting systems rather than payment processing infrastructure. However, if a warehouse receives transaction data feeds containing PAN, cardholder names, or service codes, it is a cardholder data storage location subject to all applicable PCI DSS requirements. This means the warehouse needs network segmentation from untrusted networks (Req 1), hardened configurations (Req 2), PAN protection at rest (Req 3), access controls (Req 7), unique user identification (Req 8), and comprehensive audit logging (Req 10).

The practical solution is to minimize cardholder data in analytics environments. Data feeds from production CDE systems to warehouses should tokenize or mask PAN before transmission, reducing the warehouse to out-of-scope status. When full PAN is genuinely required for analytics (rare but possible for fraud investigation or dispute resolution), the warehouse must be segmented, encrypted, access-controlled, and logged to the same standard as the production payment system. Column-level access controls can limit PAN visibility to the small number of analysts who actually need it, while everyone else works with truncated or tokenized values.
