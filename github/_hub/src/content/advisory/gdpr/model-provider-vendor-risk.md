---
module_name: "Model Provider & Vendor Risk"
order: 3
why_credible: "GDPR Art. 28 processor requirements extend to AI model providers when they process personal data on behalf of the controller, requiring binding agreements, due diligence, and sub-processor chain management."
additions:
  - "Processor agreements for AI model providers covering data handling, retention, and deletion obligations"
  - "Sub-processor chain mapping for AI inference pipelines spanning multiple providers"
  - "Training data due diligence to assess whether provider models were trained on personal data without lawful basis"
---

AI model providers occupy a complex position in the GDPR processor hierarchy. When personal data is sent to a model provider for inference — whether through API calls, fine-tuning, or embedding generation — the provider typically acts as a processor under Art. 28, triggering the full suite of contractual obligations: documented instructions, confidentiality, security measures, sub-processor controls, DSR assistance, breach notification, and data deletion on termination. Organizations must evaluate whether each provider's terms of service actually satisfy Art. 28(3) requirements or whether supplementary contractual terms are needed.

The sub-processor chain for AI services can be particularly opaque. A single API call may traverse cloud infrastructure providers, model hosting platforms, content filtering services, and logging systems — each potentially processing personal data. Organizations should map these chains, assess the adequacy of each link's data protection measures, and ensure that their processor agreement with the primary provider flows down through the entire chain. Training data provenance is an emerging concern: if a provider's model was trained on personal data without a lawful basis, using that model for inference involving additional personal data creates compounding compliance risk that should be assessed during vendor due diligence.
