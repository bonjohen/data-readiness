---
module_name: "Model/Provider Vendor Risk"
order: 3
why_credible: "CCPA service provider requirements (§1798.140(ag)) extend to AI model providers that process consumer PI, requiring written contracts restricting PI use and prohibiting secondary use of consumer data for model improvement."
additions:
  - "AI model provider register with PI exposure assessment for each integration"
  - "Data processing agreement review for model providers covering PI retention and training exclusions"
  - "Contractual prohibition on model providers using consumer PI for model training without explicit authorization"
  - "Incident notification requirements for model provider PI breaches or unauthorized access"
---

When an organization sends consumer personal information to a third-party AI model provider — whether through API calls, fine-tuning datasets, or retrieval-augmented generation — that provider becomes a service provider or contractor under the CCPA/CPRA. The written contract must prohibit the provider from retaining, using, or disclosing the PI for any purpose other than performing the specified services. This is directly at odds with the default terms of many AI model providers, which reserve the right to use API inputs for model improvement.

Organizations should maintain an AI model provider register that documents which providers receive consumer PI, what categories are transmitted, whether the provider's terms include a training exclusion, and what data processing agreements are in place. Due diligence should cover the provider's data residency, sub-processor chain, breach notification capabilities, and ability to support downstream deletion requests. A model provider that cannot delete consumer PI from its training data when the consumer exercises their deletion right creates a compliance gap that the business — not the provider — is responsible for addressing.
