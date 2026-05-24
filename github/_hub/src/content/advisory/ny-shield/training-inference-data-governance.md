---
module_name: "Training & Inference Data Governance"
order: 6
why_credible: "Using private information for model training creates risks to the security, confidentiality, and integrity of that information that must be assessed under the risk assessment safeguard requirement of § 899-bb(2)(b)."
additions:
  - "Risk assessment of model training datasets for inclusion of NY resident private information under the SHIELD Act's expanded definition"
  - "Data minimization controls to limit private information exposure during model training and fine-tuning"
  - "Inference pipeline controls to prevent model outputs from leaking memorized private information"
  - "Documentation of training data provenance to support breach investigation if a model is found to have memorized private information"
---

The SHIELD Act's risk assessment framework applies directly to the use of private information in AI model training. When training datasets include NY resident data — whether Social Security numbers in structured records, biometric templates in image datasets, or email-password pairs in text corpora — the organization must identify this as a reasonably foreseeable risk to the security and confidentiality of that information. Model training can memorize private information, making it potentially recoverable through carefully constructed inference queries, which creates a data exposure vector that traditional access controls may not address.

Organizations should implement data governance controls across the model lifecycle: screening training datasets for private information before ingestion, applying techniques such as differential privacy or data anonymization to reduce memorization risk, monitoring inference outputs for signs of private information leakage, and maintaining provenance records that enable the organization to determine whether a breached model was trained on specific categories of private information. These controls support the organization's ability to scope breach notifications under § 899-aa if a model exposure is discovered.
