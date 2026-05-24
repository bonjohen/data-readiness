---
module_name: "Model Provider & Vendor Risk"
order: 3
why_credible: "Third-party AI providers with access to cardholder data or CDE systems fall under PCI DSS Req 12.8 service provider management and must be assessed for compliance with all applicable requirements."
additions:
  - "PCI DSS compliance attestation requirements for AI/ML vendors processing or accessing cardholder data"
  - "Contractual obligations specifying vendor responsibilities for each applicable PCI DSS requirement"
  - "Data flow mapping documenting where cardholder data is transmitted to, processed by, or stored at vendor systems"
  - "Annual review of vendor PCI DSS compliance status and AOC/SAQ documentation"
  - "Incident notification clauses requiring vendor disclosure of breaches affecting cardholder data within 24 hours"
---

PCI DSS Requirement 12.8 mandates that organizations maintain a list of all service providers with whom cardholder data is shared, along with a written agreement acknowledging the provider's responsibility for the security of that data. AI model providers are no exception. If cardholder data — even tokenized or anonymized data derived from cardholder data — is sent to a third-party model for inference, classification, or analysis, that provider is a service provider under PCI DSS and must be managed accordingly. The organization must obtain and review the provider's Attestation of Compliance (AOC) or equivalent evidence annually.

Data flow mapping is critical because AI integrations can create unexpected data paths. A fraud detection model hosted by a third party might receive transaction amounts, merchant categories, and card BINs — data elements that individually may seem innocuous but collectively constitute cardholder data. Organizations must map every data element transmitted to AI vendors against the PCI DSS definition of cardholder data and sensitive authentication data, and treat any vendor receiving in-scope data as a full PCI DSS service provider with corresponding contractual and monitoring obligations.
