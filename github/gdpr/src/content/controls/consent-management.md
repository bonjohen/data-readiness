---
domain: "Consent Management"
order: 3
description: "Collect, record, and manage consent that meets GDPR standards for being freely given, specific, informed, and unambiguous, with granular controls and easy withdrawal."
requirements:
  - "Freely given, specific, informed, and unambiguous consent (Art. 7(1))"
  - "Granular consent per processing purpose — no bundled consent"
  - "Easy withdrawal mechanism that is as simple as giving consent (Art. 7(3))"
  - "Children's consent with parental verification where applicable (Art. 8)"
evidence_examples:
  - artifact: "Consent collection UI screenshots showing granular purpose selection and clear language"
    owner: "Product Manager"
    frequency: "Per release"
  - artifact: "Consent database exports with timestamps, purpose, version, and withdrawal status"
    owner: "Privacy Engineer"
    frequency: "Quarterly"
  - artifact: "Withdrawal mechanism logs showing time-to-effect and confirmation delivery"
    owner: "Privacy Operations Manager"
    frequency: "Monthly"
criteria:
  - "Privacy"
---

Consent under the GDPR is not a checkbox exercise. Article 7 sets a high bar: consent must be freely given (no imbalance of power or bundling with unrelated services), specific (tied to a defined purpose), informed (clear explanation of what is being consented to), and unambiguous (requiring a clear affirmative action). Pre-ticked boxes, silence, and inactivity do not qualify. Organizations relying on consent as their lawful basis must demonstrate that each of these conditions is met at the time of collection.

Granularity is a frequent compliance gap. When an organization bundles multiple processing purposes into a single consent request, the consent may be invalid for all purposes. Each distinct purpose should have its own consent mechanism, and data subjects must be able to consent to some purposes while declining others. Withdrawal must be as easy as giving consent — if consent was collected via a single click, withdrawal should require no more than that. Art. 8 adds additional requirements for children's data, with member states setting the age threshold between 13 and 16, requiring organizations to implement age verification and parental consent mechanisms appropriate to their user base.
