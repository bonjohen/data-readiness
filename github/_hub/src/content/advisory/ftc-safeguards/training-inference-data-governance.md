---
module_name: "Training and Inference Data Governance"
order: 6
why_credible: "Using customer information for AI model training or inference requires safeguards under § 314.4(b) risk assessment, including evaluation of whether the use creates new threats to customer data security."
additions:
  - "Risk assessment for AI training datasets containing customer information"
  - "Data minimization requirements for inference pipelines processing customer data"
  - "Customer information anonymization and de-identification standards for AI use cases"
  - "Model output review to prevent memorization and leakage of customer information"
  - "Governance controls for fine-tuning models on customer financial data"
---

When financial institutions use customer information to train, fine-tune, or run inference on AI models, the § 314.4(b) risk assessment must evaluate the new threats this creates. Training data that includes customer financial records, account numbers, or personally identifiable information introduces risks of memorization — where the model can reproduce specific customer data in its outputs — and data leakage through model extraction or adversarial prompting.

This module establishes governance controls for AI data pipelines: risk assessment requirements before customer information enters any training or inference workflow, data minimization and anonymization standards, review processes for model outputs that may contain memorized customer data, and restrictions on fine-tuning that ensure customer information is not permanently encoded into model weights accessible beyond the institution's control.
