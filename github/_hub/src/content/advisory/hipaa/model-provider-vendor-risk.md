---
module_name: "Model Provider & Vendor Risk"
order: 3
why_credible: "AI model providers accessing ePHI are business associates under HIPAA requiring BAAs per § 164.308(b), with direct Security Rule liability."
additions:
  - "BAA requirements for all AI model providers processing ePHI"
  - "ePHI training data restrictions and contractual prohibitions"
  - "De-identification verification before ePHI reaches external models"
  - "Vendor security posture assessment for AI-specific risks"
---

Under the HIPAA Omnibus Rule, any AI model provider that creates, receives, maintains, or transmits ePHI on behalf of a covered entity is a business associate requiring a BAA. This includes cloud-hosted AI services, fine-tuning providers, and inference API vendors. The BAA must explicitly address whether ePHI may be used for model training, how data is isolated, and what security controls the provider implements.

Organizations should verify de-identification before sending health data to external AI models, using either the Safe Harbor or Expert Determination method defined in § 164.514. Vendor risk assessments must evaluate AI-specific concerns: model memorization of training data, multi-tenant data isolation, and the provider's breach notification capabilities. The covered entity remains responsible for the BA's compliance failures, making thorough due diligence essential.
