---
domain: "Privacy Impact Assessments"
order: 3
description: "Conduct and maintain data protection assessments for processing activities that trigger assessment requirements under applicable state privacy laws, including targeted advertising, sale of personal data, profiling, and sensitive data processing."
requirements:
  - "Data protection assessments required by Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Texas (TDPSA), and Oregon (OCPA) for specified high-risk processing activities"
  - "Assessment triggers: targeted advertising, sale of personal data, profiling with risk of unfair or deceptive treatment, processing sensitive data, and processing presenting heightened risk of harm"
  - "Assessment content must weigh benefits of processing against potential risks to consumer rights, with state-specific content variations"
  - "Maintain completed assessment records available for attorney general inquiry (Virginia, Colorado, Connecticut, Texas)"
  - "Reassess when processing activities materially change or new state law triggers apply"
evidence_examples:
  - artifact: "PIA trigger matrix mapping processing activities to state-specific assessment requirements"
    owner: "Privacy Program Manager"
    frequency: "Quarterly"
  - artifact: "Completed PIA templates with risk-benefit analysis, mitigation measures, and approval signatures"
    owner: "Privacy Counsel"
    frequency: "Per triggered activity"
  - artifact: "PIA inventory log tracking all assessments, dates, outcomes, and reassessment schedules"
    owner: "Privacy Operations Lead"
    frequency: "Ongoing"
  - artifact: "AG inquiry response package with redacted PIA summaries and privilege-protected materials"
    owner: "Privacy Counsel"
    frequency: "As needed"
criteria:
  - "Privacy"
---

Data protection assessments (also called privacy impact assessments) are mandatory under five major state privacy laws for processing activities that present elevated risks to consumers. Virginia (VCDPA s 59.1-580), Colorado (CPA s 6-1-1309), Connecticut (CTDPA s 42-523), Texas (TDPSA s 541.105), and Oregon (OCPA s 9) all require controllers to conduct and document assessments before engaging in targeted advertising, selling personal data, processing sensitive data, profiling consumers, and — in some states — any processing that presents a heightened risk of harm. Iowa's ICDPA, Montana's MCDPA, and several newer laws do not include explicit PIA requirements, creating an uneven landscape.

| Trigger | VA | CO | CT | TX | OR |
|---------|----|----|----|----|-----|
| Targeted advertising | Yes | Yes | Yes | Yes | Yes |
| Sale of personal data | Yes | Yes | Yes | Yes | Yes |
| Profiling (significant effects) | Yes | Yes | Yes | Yes | Yes |
| Sensitive data processing | Yes | Yes | Yes | Yes | Yes |
| Heightened risk of harm | No | Yes | No | No | Yes |
| AG may request assessment | Yes | Yes | Yes | Yes | Yes |

The content requirements for assessments are similar across states but not identical. All five states require the assessment to identify and weigh the benefits of the processing to the controller, the consumer, the public, and other stakeholders against the potential risks to consumer rights, considering the use of de-identification, reasonable consumer expectations, and the context of the processing. Colorado stands out by requiring the assessment to consider the benefits and risks to the state and public, and by requiring controllers to make assessments available to the AG upon request as part of a civil investigative demand — other states have similar AG access provisions but with varying procedural mechanisms.

Organizations should build a single PIA framework that satisfies the most demanding state's requirements and then apply it uniformly. A trigger matrix should map each processing activity to the state-specific triggers it implicates, so that the organization knows which assessments to conduct and which to update when processing changes. PIAs should be treated as living documents — reassessed when processing activities change materially, when new state laws take effect, or when the risk profile of a processing activity evolves. Privilege considerations are important: the attorney general access provisions mean that PIA content should be drafted with awareness that it may be disclosed, and organizations may consider maintaining privileged attorney-client communications separately from the assessment itself.
