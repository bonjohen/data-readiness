---
domain: "Data Governance for AI"
order: 8
description: "Training data quality, provenance tracking, consent management, labeling QA, and synthetic data governance."
requirements:
  - "Training data quality assessed for accuracy, completeness, and representativeness"
  - "Data provenance and lineage tracking from source to model"
  - "Consent and authorization verified for data use in AI training and inference"
  - "Data labeling quality assurance processes established"
  - "Synthetic data generation and use governed"
evidence_examples:
  - artifact: "Data quality reports with representativeness analysis"
    owner: "Data Engineering / Data Science"
    frequency: "Per training cycle"
  - artifact: "Data provenance and lineage records"
    owner: "Data Engineering"
    frequency: "Per training cycle"
  - artifact: "Consent and authorization documentation for training data"
    owner: "Legal / Privacy"
    frequency: "Prior to data acquisition"
  - artifact: "Labeling QA audit records and inter-annotator agreement scores"
    owner: "Data Science"
    frequency: "Per labeling campaign"
criteria:
  - "Governance"
---

The MAP function of the AI RMF recognizes that AI system quality is fundamentally bounded by data quality. Biased training data produces biased models; incomplete data produces models that fail on underrepresented scenarios; mislabeled data produces models that learn the wrong patterns. Data governance for AI extends traditional data management practices with requirements specific to machine learning: representativeness across demographic groups, provenance tracking through complex preprocessing pipelines, and quality assurance for human-generated labels.

Data provenance is particularly important because AI training pipelines typically transform data through multiple stages — collection, cleaning, augmentation, feature engineering, labeling — and problems introduced at any stage propagate into the final model. Lineage tracking should document the source of every dataset, the transformations applied, the personnel involved, and the quality checks performed. For organizations using third-party datasets or pre-trained models, provenance extends to understanding the upstream data sources and any licensing or consent constraints they carry.

Synthetic data introduces a new governance dimension. While synthetic data can address representativeness gaps and privacy concerns, it also carries risks: synthetic data may not accurately represent real-world distributions, it can amplify biases present in the seed data used for generation, and its provenance is fundamentally different from organic data. Organizations should document their synthetic data generation methodology, validate that synthetic data does not introduce distributional artifacts, and maintain clear lineage separating synthetic from organic data throughout the pipeline.
