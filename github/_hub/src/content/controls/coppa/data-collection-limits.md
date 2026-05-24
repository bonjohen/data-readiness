---
domain: "Data Collection Limitations"
order: 3
description: "Restrictions ensuring operators collect only the minimum personal information reasonably necessary for a child's participation in an activity."
requirements:
  - "Do not condition a child's participation in an activity on disclosure of more PI than is reasonably necessary for that activity (16 CFR § 312.7)"
  - "Limit PI collection to what is reasonably necessary for the child's participation in the specific game, prize offer, or other activity (§ 312.7)"
  - "Do not engage in behavioral advertising directed at children or use children's PI for behavioral profiling without specific parental consent (§ 312.5)"
criteria:
  - "Privacy"
evidence_examples:
  - artifact: "Data collection audit mapping each PI field to the specific activity requiring it"
    owner: "Product lead"
    frequency: "Quarterly"
  - artifact: "Feature-level PI necessity justification document"
    owner: "Privacy lead"
    frequency: "Annually and on feature launch"
  - artifact: "Advertising and analytics configuration review showing behavioral ad exclusions for child users"
    owner: "Engineering lead"
    frequency: "Quarterly"
---

COPPA's data minimization principle at 16 CFR § 312.7 is one of the regulation's most practically significant requirements. An operator may not condition a child's participation in a game, prize offer, or other activity on the child disclosing more personal information than is reasonably necessary to participate in that activity. This means organizations must evaluate each feature, interaction, and data collection point to determine the minimum set of PI required for the child to use it. A drawing app does not need a child's home address; a newsletter signup does not need a birthdate beyond age verification.

Enforcement actions have repeatedly targeted operators who collect PI that serves the operator's business interests rather than the child's participation in the activity. Collecting persistent identifiers for behavioral advertising, gathering device-level data beyond what the app functionally requires, and requiring account creation with full name and email for activities that could function anonymously are all practices that violate § 312.7. The FTC's 2023 enforcement actions against ed-tech companies reinforced that even "educational purpose" does not justify unlimited data collection.

Organizations should maintain a living document that maps every PI field collected from children to the specific activity or feature that requires it, with a written justification for why that field is reasonably necessary. When product teams propose new features, the privacy review should include a § 312.7 necessity analysis before development begins. Quarterly audits of analytics and advertising SDK configurations should verify that behavioral targeting is disabled for child-identified sessions.
