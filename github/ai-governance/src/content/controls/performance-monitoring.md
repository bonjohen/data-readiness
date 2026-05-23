---
domain: "Performance & Reliability Monitoring"
order: 5
description: "Continuous monitoring of AI system accuracy, drift detection, robustness testing, and reliability SLAs."
requirements:
  - "Accuracy and performance benchmarks established for each AI system"
  - "Production monitoring for model drift and degradation"
  - "Robustness testing against adversarial inputs and edge cases"
  - "Reliability metrics and SLAs defined"
  - "Automated alerting for performance degradation"
evidence_examples:
  - artifact: "Performance benchmark records with baseline metrics"
    owner: "ML Engineering"
    frequency: "Prior to deployment and on retrain"
  - artifact: "Drift detection dashboards and alert logs"
    owner: "ML Engineering / SRE"
    frequency: "Continuous"
  - artifact: "Robustness test results (adversarial, edge case)"
    owner: "ML Engineering"
    frequency: "Prior to deployment and quarterly"
  - artifact: "SLA documentation and uptime reports"
    owner: "SRE / Operations"
    frequency: "Monthly"
criteria:
  - "Governance"
---

The MEASURE function of the AI RMF requires organizations to track AI system performance through their operational lifecycle, not just at the point of deployment. Unlike traditional software where behavior is deterministic, AI systems can degrade silently — a model that performed well on training data may lose accuracy as real-world data distributions shift, a phenomenon known as model drift.

Performance monitoring starts with establishing clear benchmarks before deployment: accuracy metrics appropriate to the task (precision, recall, F1, AUC-ROC, etc.), latency requirements, throughput expectations, and reliability targets expressed as SLAs. These benchmarks become the baseline against which production performance is continuously measured. Drift detection systems compare incoming data distributions and model output distributions against the baseline, triggering alerts when statistically significant deviations occur.

Robustness testing addresses a different failure mode: not gradual degradation, but adversarial or unexpected inputs that cause catastrophic failures. This includes adversarial examples designed to fool the model, out-of-distribution inputs the model was never trained on, and edge cases that expose brittleness. For generative AI systems, robustness testing extends to prompt injection attacks, jailbreak attempts, and hallucination rates. Organizations should define automated alerting thresholds that escalate performance issues before they reach end users, with clear runbooks for investigation and remediation.
