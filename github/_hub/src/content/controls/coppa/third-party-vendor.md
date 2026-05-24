---
domain: "Third-Party & Vendor Controls"
order: 4
description: "Operator obligations for third parties that collect or receive children's personal information on the operator's behalf."
requirements:
  - "Maintain operator liability for PI collection by third parties acting on the operator's behalf (16 CFR § 312.8)"
  - "Include contractual restrictions limiting third-party use of children's PI to the purpose for which it was disclosed (§ 312.8)"
  - "Monitor third-party compliance with COPPA requirements through periodic assessments (§ 312.8)"
  - "Review ad networks, analytics providers, and SDKs embedded in child-directed services for COPPA compliance"
criteria:
  - "Privacy"
evidence_examples:
  - artifact: "Third-party vendor register listing all parties receiving children's PI with contractual COPPA clauses"
    owner: "Legal"
    frequency: "Quarterly"
  - artifact: "SDK and ad network audit report for child-directed applications"
    owner: "Engineering lead"
    frequency: "Semi-annually"
  - artifact: "Third-party compliance questionnaire responses and assessment results"
    owner: "Compliance lead"
    frequency: "Annually"
  - artifact: "Contractual amendments restricting third-party PI use to disclosed purposes"
    owner: "Legal"
    frequency: "Event-driven (on contract renewal or new vendor)"
---

Under 16 CFR § 312.8, an operator of a child-directed site or service remains liable for personal information collected from children by third parties acting on its behalf, even if the operator did not directly collect the data. This means that every analytics SDK, advertising network, social plugin, and service provider embedded in or connected to a child-directed service is the operator's responsibility. The operator must ensure these third parties comply with COPPA's requirements and must contractually restrict their use of children's PI to the specific purpose for which it was provided.

The practical challenge is that modern web and mobile applications often integrate dozens of third-party services, many of which collect persistent identifiers, device information, or behavioral data by default. FTC enforcement actions have targeted operators who embedded advertising SDKs that collected persistent identifiers from children without parental consent, even when the operator itself did not intend to collect that data. The 2023 Epic Games settlement and earlier actions against app developers underscore that ignorance of what third-party code does in your application is not a defense.

Organizations should maintain a comprehensive vendor register that identifies every third party receiving children's PI, the contractual basis for the sharing, and the specific COPPA restrictions in place. Engineering teams should conduct semi-annual audits of all SDKs and third-party scripts in child-directed applications, using network traffic analysis to identify undisclosed data collection. New vendor onboarding should include a COPPA-specific compliance questionnaire, and contracts should include audit rights and breach notification obligations specific to children's data.
