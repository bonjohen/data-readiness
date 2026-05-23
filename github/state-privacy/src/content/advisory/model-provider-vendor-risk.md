---
module_name: "Model Provider & Vendor Risk"
order: 3
why_credible: "State processor requirements under Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Texas (TDPSA), and Oregon (OCPA) create contractual obligations that extend to AI model providers processing personal data on behalf of controllers."
additions:
  - "AI model provider classification as processor or sub-processor under each applicable state law, with DPA coverage ensuring all required provisions are met"
  - "Data flow mapping for model API calls to determine which personal data elements are transmitted to model providers and which state laws apply"
  - "Sub-processor cascade management when model providers engage their own infrastructure sub-processors for inference or fine-tuning"
  - "Contractual restrictions on model providers using personal data for training purposes, aligned with purpose limitation requirements across all applicable states"
---

AI model providers occupy the processor role under state privacy laws when they process personal data on behalf of a controller — for example, when an organization sends customer data to a model API for classification, summarization, or decision support. Every state with a comprehensive privacy law requires controller-processor agreements with specific mandatory provisions, and these requirements apply to AI model providers just as they apply to any other processor. The challenge is that many model provider terms of service are not drafted with multi-state privacy law compliance in mind, and organizations must negotiate or supplement those terms to meet their contractual obligations under each applicable state.

Organizations should assess each AI model provider relationship against the DPA requirements of all applicable states, ensuring that the agreement covers confidentiality, instruction limitations, audit rights, sub-processor management, and data return or deletion. Particular attention should be paid to model providers' data retention and training practices — if a provider retains personal data from API calls for model improvement, that secondary use may violate purpose limitation provisions across multiple states unless the consumer was notified and, where required, consented. The sub-processor chain is also critical: model providers typically rely on cloud infrastructure providers, and the controller's obligations to manage sub-processors extend through the chain.
