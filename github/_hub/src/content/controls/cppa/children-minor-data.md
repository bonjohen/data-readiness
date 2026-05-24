---
domain: "Children & Minor Data"
order: 9
description: "Additional consent and protection requirements for the personal information of consumers under 16 years of age."
requirements:
  - "Obtain affirmative opt-in consent before selling or sharing PI of consumers aged 13–15 (§1798.120(c))"
  - "Obtain verifiable parental consent before selling or sharing PI of consumers under 13 (§1798.120(c))"
  - "Implement age verification mechanisms where minors are likely users"
  - "Wait at least 12 months before requesting opt-in again after a minor declines (§1798.135(c))"
criteria:
  - "Privacy"
evidence_examples:
  - artifact: "Age gate implementation evidence with technical documentation"
    owner: "Engineering lead"
    frequency: "Annually"
  - artifact: "Minor opt-in consent records with timestamps and verification method"
    owner: "Privacy lead"
    frequency: "On request"
  - artifact: "Parental consent workflow documentation and sample consent artifacts"
    owner: "Legal"
    frequency: "Annually"
---

The CCPA/CPRA imposes heightened protections for the personal information of consumers under 16. Unlike the general framework, which requires businesses to offer opt-out mechanisms, the sale or sharing of minors' PI operates on an opt-in basis. For consumers between 13 and 15, the minor themselves must affirmatively authorize the sale or sharing. For consumers under 13, a parent or guardian must provide verifiable consent. These requirements apply regardless of whether the business has actual knowledge of the consumer's age — if the business "willfully disregards" the consumer's age, the opt-in requirement still applies.

Age verification is the critical operational challenge. Businesses whose products or services are directed at children or are likely to be accessed by minors need a defensible mechanism for determining age. This can range from neutral age screens to more robust verification methods depending on the risk profile. The California Age-Appropriate Design Code Act (CAADCA), though subject to legal challenges, has further raised expectations around age estimation for online services. Organizations should document their age verification approach, the rationale for the method chosen, and the fallback procedures when age cannot be determined.

The 12-month waiting period after a minor declines consent is frequently overlooked. If a minor (or their parent for under-13s) declines to opt in, the business cannot ask again for at least 12 months. This requires tracking the declination date and enforcing a suppression window. Common pitfalls include applying the opt-in requirement only to direct sales while ignoring sharing for cross-context behavioral advertising, failing to propagate the minor's opt-in or declination status to downstream advertising partners, and treating age verification as a one-time gate rather than an ongoing obligation as the consumer interacts with the service.
