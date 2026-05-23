---
domain: "Privacy by Design & Default"
order: 9
description: "Integrate data protection into the design of processing activities and ensure default settings minimize personal data collection and use, as required by Art. 25."
requirements:
  - "Data protection integrated into system design from the earliest stages of development"
  - "Default settings configured to minimize data collection, processing scope, and retention"
  - "Pseudonymization and encryption implemented as standard protective measures"
  - "Privacy requirements embedded in the software development lifecycle (SDLC)"
evidence_examples:
  - artifact: "Privacy design review checklists completed for each new system or feature"
    owner: "Privacy Engineer"
    frequency: "Per project milestone"
  - artifact: "Privacy requirement specifications included in product requirements documents"
    owner: "Product Manager"
    frequency: "Per feature release"
  - artifact: "Default settings documentation demonstrating data minimization configurations"
    owner: "Engineering Lead"
    frequency: "Per release"
  - artifact: "Technical architecture reviews incorporating pseudonymization and encryption standards"
    owner: "Security Architect"
    frequency: "Quarterly"
criteria:
  - "Privacy"
---

Article 25 codifies the principle that data protection should not be an afterthought. Controllers must implement appropriate technical and organizational measures — such as pseudonymization, encryption, and data minimization — both at the time of determining the means for processing and at the time of the processing itself. The measures must be designed to implement data protection principles (like purpose limitation and storage limitation) effectively and to integrate necessary safeguards into the processing. This obligation takes into account the state of the art, implementation costs, the nature and scope of processing, and the risks to data subjects.

Privacy by default requires that, by default, only personal data necessary for each specific purpose is processed. This applies to the amount of data collected, the extent of processing, the period of storage, and accessibility. Personal data should not be made accessible to an indefinite number of people without the individual's intervention. In practice, this means opt-in rather than opt-out for data sharing features, minimal data collection in default form configurations, and restricted access permissions as the starting point rather than broad access narrowed after the fact.

Implementing these principles requires embedding privacy considerations into the SDLC — from requirements gathering through design, development, testing, and deployment. Organizations should maintain privacy design patterns, conduct threat modeling that includes privacy threats alongside security threats, and ensure that privacy reviews are a gate in the release process rather than an optional consultation. The EDPB's Guidelines 4/2019 on Art. 25 provide detailed guidance on how to operationalize these requirements across different types of processing activities.
