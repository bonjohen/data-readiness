---
module_name: "Training & Inference Data Governance"
order: 6
why_credible: "Purpose limitation provisions across state privacy laws restrict repurposing personal data for model training without compatible purpose justification, and data minimization requirements constrain the volume and retention of training data."
additions:
  - "Purpose compatibility analysis for using personal data in model training, documented against each applicable state's purpose limitation standard"
  - "Training data minimization ensuring only the minimum personal data necessary is used, with de-identification applied where feasible"
  - "Consumer notice requirements for AI training use cases — processing personal data for model training must be disclosed in privacy notices"
  - "Opt-out right coverage for consumers who object to their personal data being used for model training, where training constitutes sale or targeted advertising"
  - "Inference-time data governance ensuring model inputs containing personal data are processed consistent with the original collection purpose"
---

Using personal data to train AI models raises purpose limitation questions under every state comprehensive privacy law. If personal data was collected for a disclosed purpose — such as providing a service to the consumer — and the organization subsequently uses that data to train a machine learning model, the training activity must either fall within the original disclosed purpose, qualify as a compatible purpose, or be supported by additional consumer notice and consent. Colorado (CPA s 6-1-1308) and Oregon (OCPA s 4) apply the strictest purpose limitation standards, requiring processing to be "specified and explicit," which leaves less room for compatible-purpose arguments than Virginia's or Connecticut's broader formulations.

Organizations should conduct a purpose compatibility analysis before using personal data for model training, documenting the relationship between the original collection purpose and the training purpose, the consumer's reasonable expectations, and the potential impact on consumer rights. Where the analysis concludes that training is not a compatible purpose, the organization must either obtain additional consent, de-identify the data before use, or refrain from using the data for training. At inference time, the same purpose limitation analysis applies: personal data submitted to a model for inference must be processed consistent with the purpose for which it was collected, and the model's output must not be used in ways that exceed the disclosed purpose.
