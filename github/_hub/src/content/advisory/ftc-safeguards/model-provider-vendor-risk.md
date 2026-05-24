---
module_name: "Model/Provider Vendor Risk"
order: 3
why_credible: "§ 314.4(f) vendor oversight requirements apply to AI model providers that process, store, or have access to customer information through API calls, fine-tuning, or inference pipelines."
additions:
  - "AI model provider security assessment covering data handling and retention practices"
  - "Data processing restrictions preventing customer information use for model training"
  - "Model provider exit planning with data portability and deletion verification"
  - "Subprocessor inventory for AI model providers and their infrastructure dependencies"
  - "Contractual prohibitions on customer information retention beyond inference"
---

AI model providers represent a new category of service provider under § 314.4(f). When a financial institution sends customer information to a model provider — whether through API calls, fine-tuning datasets, or retrieval-augmented generation pipelines — the vendor oversight requirements apply in full. Standard vendor risk assessments may not adequately cover AI-specific risks such as model training on customer data, prompt caching that retains sensitive information, or subprocessor chains where customer data passes through multiple cloud providers.

This module extends vendor risk assessment to address AI-specific concerns: whether the provider trains on customer data, what data retention policies apply to prompts and responses, which subprocessors handle the data, and how to exit the provider relationship without losing access to critical capabilities or leaving customer data behind.
