---
domain: "Bias & Fairness Testing"
order: 4
description: "Pre-deployment and ongoing testing for bias across demographic groups with defined fairness metrics and remediation procedures."
requirements:
  - "Bias testing across demographic groups completed before deployment"
  - "Fairness metrics defined and documented (demographic parity, equalized odds, etc.)"
  - "Disparate impact analysis performed"
  - "Ongoing monitoring for bias drift in production"
  - "Remediation procedures established for detected bias"
evidence_examples:
  - artifact: "Bias test reports with demographic group analysis"
    owner: "Data Science / ML Engineering"
    frequency: "Prior to deployment and quarterly"
  - artifact: "Fairness metric dashboards with threshold definitions"
    owner: "AI Governance Lead"
    frequency: "Continuous monitoring"
  - artifact: "Demographic impact analysis documentation"
    owner: "Data Science / ML Engineering"
    frequency: "Prior to deployment and on model retrain"
  - artifact: "Bias remediation records and outcome tracking"
    owner: "AI Governance Lead"
    frequency: "As needed"
criteria:
  - "Governance"
---

The MEASURE function of the AI RMF requires quantitative assessment of AI system behavior, and bias testing is among the most consequential measurement activities. Undetected bias in AI systems can cause discriminatory outcomes at scale — affecting hiring decisions, credit access, healthcare recommendations, and countless other domains where AI increasingly operates.

Effective bias testing requires upfront decisions about which fairness metrics to apply, because different metrics can conflict with each other. Demographic parity (equal positive outcome rates across groups) may be appropriate for some applications, while equalized odds (equal error rates across groups) better serves others. The choice of metric must be documented and justified relative to the system's purpose and the populations it affects. Disparate impact analysis — measuring whether outcomes differ by more than a legally significant threshold across protected classes — provides a regulatory compliance baseline.

Production monitoring is equally critical because bias can emerge over time even in systems that tested clean at deployment. Model drift, changes in input data distributions, and shifts in user behavior can all introduce or amplify bias. Organizations need automated monitoring pipelines that flag statistical deviations in outcome rates across demographic groups, along with clear remediation procedures that define who is responsible for investigation, what corrective actions are available, and under what conditions a system should be suspended pending remediation.
