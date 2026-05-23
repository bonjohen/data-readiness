---
module_name: "Training & Inference Data Governance"
order: 6
why_credible: "Using children's behavioral data for model training violates COPPA's purpose limitation without specific parental consent — the FTC has signaled that repurposing children's data for AI training is an enforcement priority."
additions:
  - "Prohibition on using children's data for model training unless covered by specific parental consent"
  - "Data provenance verification ensuring training datasets do not contain children's PI"
  - "Age filtering in training data pipelines to exclude child-originated content"
  - "Inference-time controls preventing children's PI from being cached or retained by model infrastructure"
---

COPPA's purpose limitation principle means that children's PI collected for one purpose (e.g., providing a game experience) cannot be repurposed for another (e.g., training a machine learning model) without obtaining new parental consent specific to that use. The FTC's 2023 actions against ed-tech companies and its proposed rulemaking have made clear that using children's behavioral data, interaction patterns, or content for AI model training is a distinct collection purpose that requires its own consent basis.

Organizations must implement age filtering in their training data pipelines to ensure that data from child-identified accounts is excluded from training datasets. Data provenance tracking should verify the age status of contributing users at the point of data extraction, not just at the point of collection. At inference time, controls should prevent children's PI from being cached, retained, or fed back into model improvement loops without explicit consent coverage.
