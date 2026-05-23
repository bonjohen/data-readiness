---
module_name: "Training & Inference Data Governance"
order: 6
why_credible: "Using ePHI for AI model training requires minimum necessary standard compliance and may require patient authorization under the HIPAA Privacy Rule."
additions:
  - "De-identification per Safe Harbor or Expert Determination methods (§ 164.514)"
  - "IRB or privacy board review for research use of ePHI in model training"
  - "Limited data set agreements for permitted training scenarios"
  - "Data provenance tracking from source ePHI through model artifacts"
---

Training AI models on health data sits at the intersection of HIPAA's Privacy and Security Rules. The Privacy Rule's minimum necessary standard limits the ePHI that can be used, and depending on the purpose, patient authorization or a Privacy Rule exception (such as the research exception with IRB approval) may be required. Organizations must determine whether their intended use falls under treatment, payment, healthcare operations, or research before proceeding.

The preferred approach is de-identification before training data reaches the model, using either Safe Harbor (removing 18 specified identifiers) or Expert Determination (statistical verification by a qualified expert) as defined in § 164.514. When de-identification is not feasible, limited data set agreements provide a narrower framework. Throughout the pipeline, organizations must maintain data provenance records documenting how ePHI was sourced, transformed, and used in model development.
