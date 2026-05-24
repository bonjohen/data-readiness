---
module_name: "Training & Inference Data Governance"
order: 6
why_credible: "Using cardholder data for model training violates Req 3 data minimization principles unless the data is properly tokenized, encrypted, or anonymized to a degree that renders PAN unrecoverable."
additions:
  - "Prohibition on using raw PAN or SAD in model training datasets"
  - "Data anonymization and tokenization requirements before cardholder data enters training pipelines"
  - "Inference input validation preventing PAN from being submitted in model queries"
  - "Model output filtering to prevent generated responses from containing valid PAN patterns"
  - "Training data retention and disposal policies aligned with Req 3 minimization requirements"
---

Model training creates one of the most insidious PCI DSS risks: cardholder data baked permanently into model weights. If a model is trained on datasets containing raw PAN, the model may memorize and regurgitate those numbers during inference — a data breach that cannot be remediated by deleting files or revoking access. Requirement 3's data minimization principle requires that cardholder data be stored only when necessary and for only as long as needed. Training data that includes PAN is stored indefinitely in the model's parameters, violating both the minimization and the disposal requirements.

The safest approach is to never allow raw cardholder data into training pipelines. Transaction data used for fraud modeling, churn prediction, or behavioral analysis should be tokenized or anonymized before entering the training pipeline, with validation checks confirming that no PAN survives the transformation. At inference time, input validation should reject prompts containing PAN patterns, and output filtering should screen generated responses for sequences matching valid card number formats (Luhn-valid 13-19 digit numbers). These controls create defense in depth against cardholder data leakage through the AI system lifecycle.
