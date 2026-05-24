---
module_name: "Model Provider Vendor Risk"
order: 3
why_credible: "Section 899-bb(2)(b)(i)(E) requires selecting service providers capable of maintaining appropriate safeguards and requiring those safeguards by contract — a mandate that applies directly to AI model providers processing private information."
additions:
  - "Vendor security assessments for AI model providers evaluating their ability to maintain safeguards for private information"
  - "Contractual provisions requiring AI model providers to implement administrative, technical, and physical safeguards for NY resident data"
  - "Data processing agreements specifying prohibitions on using private information for model training without explicit authorization"
  - "Ongoing monitoring of AI model provider security practices and incident notification capabilities"
  - "Exit and data deletion provisions ensuring private information is disposed of when the vendor relationship ends"
---

The SHIELD Act's vendor management requirement under § 899-bb(2)(b)(i)(E) creates a direct compliance obligation when organizations use AI model providers that process private information. Whether sending data to cloud-based language models, using provider-hosted inference endpoints, or integrating model APIs into applications that handle NY resident data, the organization must first assess whether the provider can maintain appropriate safeguards and then require those safeguards contractually. This is not a best-practice recommendation — it is a statutory requirement that applies to any service provider handling private information.

Organizations should conduct thorough due diligence on AI model providers, evaluating their security programs, data handling practices, breach notification capabilities, and data residency policies. Contracts must include specific safeguard requirements, restrictions on secondary use of private information (particularly for model training), breach notification obligations that support the organization's own notification timelines under § 899-aa, and data disposal provisions that align with § 899-bb(2)(b)(iii)(D). The vendor assessment should be repeated periodically, recognizing that AI model providers' practices and risk profiles evolve rapidly.
