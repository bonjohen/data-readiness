---
module_name: "Training & Inference Data Governance"
order: 6
why_credible: "Using consumer PI for model training may constitute a 'business purpose' under §1798.140(e) requiring disclosure in the privacy notice, and repurposing PI collected for one purpose into training data may violate purpose limitation (§1798.100(c))."
additions:
  - "Training data provenance documentation linking datasets to original collection purposes"
  - "Consumer notice disclosures when PI is used for model training or fine-tuning"
  - "Opt-out mechanism for consumers whose PI is used in training datasets"
  - "De-identification or aggregation requirements for PI incorporated into training data"
---

The use of consumer personal information for AI model training sits at the intersection of several CCPA/CPRA obligations. If the organization collected PI for a stated business purpose — say, providing customer support — and then repurposes that PI to train a machine learning model, the new use must either fall within the original stated purpose or be disclosed as a separate business purpose in the privacy notice. The data minimization principle further requires that the training use be reasonably necessary and proportionate.

Organizations should document the provenance of all training datasets, identifying which contain consumer PI, what the original collection purpose was, and whether the privacy notice disclosed the training use. Where PI is used for training, consumers should have an opt-out pathway, and the organization should evaluate whether de-identification or aggregation can achieve the training objective without retaining identifiable PI. Inference-time data governance is equally important: if the model's outputs could reveal or reconstruct PI from the training data, that exposure must be assessed and mitigated.
