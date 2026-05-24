---
domain: "Children & Teen Protections"
order: 7
description: "Implement age-appropriate protections for children's and teen data processing, addressing state-specific age thresholds, opt-in consent requirements, and the interaction between state privacy laws and federal COPPA requirements."
requirements:
  - "State-specific age thresholds identified and operationalized (under-13 COPPA interaction, 13-16 for most state laws, 16-18 for targeted advertising in Connecticut and Delaware)"
  - "Opt-in consent requirements for processing children's and teen data under applicable state laws"
  - "Age verification mechanisms appropriate to the risk level and state requirements"
  - "Interaction with federal COPPA requirements documented, with state laws applying additional obligations beyond COPPA's scope"
  - "Prohibition on targeted advertising to known children and teens in states with age-specific ad restrictions"
evidence_examples:
  - artifact: "Age verification implementation documentation including mechanism type, accuracy assessment, and state coverage"
    owner: "Engineering Lead"
    frequency: "Annually reviewed"
  - artifact: "Consent mechanism documentation for children's and teen data with state-specific consent flows"
    owner: "Privacy Operations Lead"
    frequency: "Semi-annually"
  - artifact: "Age-specific data handling policies defining processing restrictions by age bracket and state"
    owner: "Privacy Counsel"
    frequency: "Annually reviewed"
criteria:
  - "Privacy"
---

Children's and teen data protections represent one of the most complex areas of the state privacy patchwork because age thresholds, consent requirements, and processing restrictions vary significantly across jurisdictions — and all operate on top of the federal Children's Online Privacy Protection Act (COPPA), which independently requires verifiable parental consent for collecting personal information from children under 13. State privacy laws layer additional obligations that extend protections to teens and restrict specific processing activities like targeted advertising for older minors.

| Protection | VA (VCDPA) | CO (CPA) | CT (CTDPA) | TX (TDPSA) | OR (OCPA) | DE (DPDPA) |
|------------|------------|----------|------------|------------|-----------|------------|
| Known child (under 13) sensitive | Yes | Yes | Yes | Yes | Yes | Yes |
| Teen data (13-15) opt-in consent | Yes | Yes | Yes | Yes | Yes | Yes |
| Teen (13-17) targeted ad ban | No | No | Yes | No | No | Yes |
| Age verification required | Not specified | Not specified | Yes (for targeted ad restriction) | Not specified | Not specified | Yes |
| COPPA interaction | Supplements | Supplements | Supplements | Supplements | Supplements | Supplements |

Connecticut (CTDPA) and Delaware (DPDPA) stand out for prohibiting targeted advertising directed at consumers the controller knows or willfully disregards are between 13 and 17 years old. This goes beyond the general opt-out framework — it is a prohibition, not a default that can be opted into. Organizations that serve teen audiences in these states must implement mechanisms to identify teen users and suppress targeted advertising for them. The "knows or willfully disregards" standard means organizations cannot simply avoid collecting age data to circumvent the requirement; they must take reasonable steps to determine whether users fall within the protected age range.

All state comprehensive privacy laws treat children's data (data of consumers known to be under 13) as a sensitive data category requiring opt-in consent before processing. This consent requirement operates alongside COPPA's verifiable parental consent, creating a dual-consent regime for organizations subject to both frameworks. In practice, organizations should implement age-gating mechanisms at the point of data collection, define clear age brackets (under 13, 13-15, 16-17, 18+) with distinct processing rules for each bracket, and ensure that the age determination informs downstream processing decisions across advertising, analytics, and data sharing systems. The age verification mechanism must be proportionate to the risk — a social media platform serving teens requires more robust age assurance than a B2B SaaS product unlikely to attract minor users.
