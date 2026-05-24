---
domain: "Model Lifecycle Management"
order: 9
description: "Version control, validation gates, deployment approvals, production maintenance, and retirement procedures for AI models."
requirements:
  - "Version control for models and training data"
  - "Validation and testing gates before deployment"
  - "Deployment approval process with sign-off authority"
  - "Production monitoring and maintenance procedures"
  - "Retirement and decommissioning procedures"
evidence_examples:
  - artifact: "Model version registry with training data references"
    owner: "ML Engineering"
    frequency: "Per model version"
  - artifact: "Validation test results and gate approval records"
    owner: "ML Engineering / QA"
    frequency: "Per deployment"
  - artifact: "Deployment approval sign-offs"
    owner: "AI Governance Lead / Engineering Manager"
    frequency: "Per deployment"
  - artifact: "Decommission records with rollback and data retention details"
    owner: "ML Engineering"
    frequency: "As needed"
criteria:
  - "Governance"
---

The MANAGE function of the AI RMF requires structured lifecycle management for AI models, from initial development through retirement. Unlike traditional software, where a release is a deterministic build artifact, AI models are the product of code, data, hyperparameters, and training environment — all of which must be versioned together to enable reproducibility and auditability.

Version control for AI models must go beyond source code. A model version should capture the training data snapshot, preprocessing logic, model architecture, hyperparameters, training environment, and evaluation results as an immutable bundle. This enables rollback to any previous version if a production issue is detected and supports audit requirements for explaining which model version produced a given decision. Validation gates should include performance benchmarks, bias testing, robustness checks, and security review before any model reaches production.

The deployment approval process should require sign-off from both technical and governance stakeholders — engineering confirms the model meets performance requirements, while governance confirms it meets fairness, transparency, and oversight requirements. For high-risk systems, deployment approval should include a final review of the impact assessment. Retirement procedures are equally important: when a model is decommissioned, organizations must address data retention requirements, transition plans for downstream consumers, and archival of model artifacts sufficient to respond to future inquiries about historical decisions the model made.
