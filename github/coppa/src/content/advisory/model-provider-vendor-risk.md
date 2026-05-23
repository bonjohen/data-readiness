---
module_name: "Model Provider & Vendor Risk"
order: 3
why_credible: "AI model providers processing children's PI are subject to COPPA operator liability under § 312.8 — the operator cannot outsource compliance by outsourcing the processing."
additions:
  - "Children's PI handling restrictions in all AI model provider contracts"
  - "Training data exclusion verification ensuring children's PI is not used to train third-party models"
  - "Age-appropriate output requirements for model providers serving child-directed applications"
  - "Right-to-delete cascade requirements for children's PI processed by model providers"
---

When an operator uses a third-party AI model provider to power features on a child-directed service, that provider is acting on the operator's behalf under 16 CFR § 312.8. The operator remains fully liable for the provider's handling of children's PI, including any data the model provider ingests for inference, logs for quality assurance, or retains for model improvement. Contracts with AI model providers must explicitly prohibit the use of children's PI for training, restrict retention to the minimum necessary for the inference request, and require the provider to honor deletion requests that cascade from parental rights under § 312.6.

Vendor risk assessments for AI model providers should verify that the provider's data handling practices are technically capable of segregating children's PI, that the provider does not commingle children's data with general training corpora, and that outputs generated for child audiences meet age-appropriateness standards. The operator should require periodic attestations from the provider and retain audit rights specific to children's data handling.
