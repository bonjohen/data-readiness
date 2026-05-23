---
domain: "Sensitive Data Categories"
order: 5
description: "Identify, classify, and apply heightened protections to sensitive data categories as defined by each applicable state privacy law, ensuring opt-in consent and data protection assessments where required."
requirements:
  - "Cross-state mapping of sensitive data definitions (racial/ethnic origin, religious beliefs, health and mental health data, sexual orientation, citizenship/immigration status, genetic data, biometric data, children's data, precise geolocation, financial data)"
  - "Opt-in consent before processing sensitive data categories (required by Virginia, Colorado, Connecticut, Texas, Oregon, Montana, Delaware, Tennessee, Indiana)"
  - "Data protection assessment triggered by sensitive data processing in states requiring PIAs"
  - "Sensitive data inventory identifying all systems, databases, and processes that collect or store sensitive categories"
  - "Heightened access controls and security measures for sensitive data categories"
evidence_examples:
  - artifact: "Sensitive data inventory mapping data categories to systems, storage locations, and applicable state definitions"
    owner: "Privacy Program Manager"
    frequency: "Semi-annually"
  - artifact: "Opt-in consent records with timestamps, consent language, and state-specific consent mechanism documentation"
    owner: "Privacy Operations Lead"
    frequency: "Ongoing"
  - artifact: "Data classification policy defining sensitive categories with cross-state definitional alignment"
    owner: "Privacy Counsel"
    frequency: "Annually reviewed"
criteria:
  - "Privacy"
---

Sensitive data receives heightened protections under every U.S. state comprehensive privacy law, but the definitions of what qualifies as "sensitive" vary significantly across jurisdictions. All states include racial or ethnic origin, religious beliefs, health data (including mental health), sexual orientation, and biometric data in their sensitive data definitions. However, the edges of the definition diverge: precise geolocation (within a specified radius, typically 1,750 feet) is sensitive under most states but the radius thresholds differ; citizenship and immigration status is sensitive under Colorado, Connecticut, and several other states but not all; and financial data is explicitly listed in some states but addressed through other mechanisms in others.

| Category | VA | CO | CT | TX | OR | MT | DE | IA | TN | IN |
|----------|----|----|----|----|-----|----|----|----|----|-----|
| Racial/ethnic origin | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Religious beliefs | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Health/mental health | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Sexual orientation | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Genetic data | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Biometric data | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Precise geolocation | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Citizenship/immigration | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No | Yes | No |
| Children's data | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |

The operational implication of the consent requirement is substantial. Unlike the GDPR's "explicit consent" standard for special categories, most U.S. state laws require "opt-in consent" for sensitive data processing, which means the controller must obtain affirmative agreement from the consumer before collecting or processing any sensitive category. This is not a notice-and-choice framework — it is an affirmative consent framework. Controllers must implement consent collection mechanisms that are specific to sensitive data categories, capture the consumer's affirmative act, record the timestamp and consent language, and provide a mechanism for withdrawal. Consent must be freely given, specific, informed, and unambiguous, and it cannot be bundled with other consents.

Organizations should build a unified sensitive data inventory that maps every data element to its classification under each applicable state law. This inventory feeds both the consent management system (to ensure opt-in consent is collected before processing) and the PIA process (since sensitive data processing triggers assessment requirements in states that mandate PIAs). The inventory should be maintained as a living document, updated whenever new data collection activities are introduced, new state laws take effect, or existing definitions are amended through regulatory guidance.
