---
name: "GitHub / GitLab"
category: "operational"
good_fit: "Version control for model code and training pipelines; branch protections and PR approvals provide evidence for model deployment gates. GitHub Actions / GitLab CI can enforce validation gates before model deployment."
cautions: "Standard VCS tracks code but not model artifacts, training data snapshots, or hyperparameters. Requires integration with ML-specific versioning tools (DVC, MLflow) for full model lifecycle traceability."
---