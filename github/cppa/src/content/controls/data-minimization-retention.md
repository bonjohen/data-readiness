---
domain: "Data Minimization & Retention"
order: 5
description: "Collect and retain only the personal information reasonably necessary and proportionate to the disclosed purpose."
requirements:
  - "Limit PI collection to what is reasonably necessary and proportionate to the disclosed purpose (§1798.100(c))"
  - "Establish and enforce retention schedules for each PI category"
  - "Implement documented disposal procedures for PI that has exceeded its retention period"
  - "Conduct proportionality reviews when introducing new PI collection or expanding existing uses"
criteria:
  - "Privacy"
evidence_examples:
  - artifact: "Retention schedule matrix mapping PI categories to retention periods and legal bases"
    owner: "Privacy lead"
    frequency: "Annually"
  - artifact: "Data disposal execution log with dates, categories purged, and systems affected"
    owner: "Engineering lead"
    frequency: "Quarterly"
  - artifact: "Proportionality review for new PI collection or purpose expansion"
    owner: "Privacy lead"
    frequency: "Event-driven"
---

CPRA introduced an explicit data minimization principle that did not exist in the original CCPA. Under §1798.100(c), a business's collection, use, retention, and sharing of PI must be "reasonably necessary and proportionate" to the purposes for which it was collected or processed. This shifts the burden: businesses must affirmatively justify why they need each category of PI they collect, rather than simply disclosing that they collect it.

The retention component requires organizations to define how long they keep each PI category, tied to a documented business or legal basis. Open-ended retention ("we keep it indefinitely") is no longer defensible. Retention schedules should distinguish between active-use retention (data available in production systems), archival retention (data moved to cold storage for legal hold or regulatory reasons), and deletion (data permanently removed or de-identified). Each transition should be automated where possible and logged where automation is not feasible.

Proportionality reviews are the mechanism for preventing scope creep. When a product team proposes collecting a new data element, expanding the use of existing PI, or sharing PI with a new vendor, a proportionality review evaluates whether the proposed collection is necessary for the stated purpose and whether a less invasive alternative exists. These reviews should be embedded into the product development lifecycle — typically as a gate in the design or architecture review phase — rather than conducted retroactively after the feature has shipped.
