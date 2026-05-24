---
domain: "Consumer Rights Mapping"
order: 1
description: "Maintain a comprehensive cross-state matrix of consumer privacy rights, ensuring organizational processes satisfy the access, deletion, correction, portability, opt-out, and appeal requirements of each applicable state law."
requirements:
  - "Cross-state comparison of right of access (all comprehensive privacy states)"
  - "Right to deletion with state-specific exemptions mapped (all states)"
  - "Right to correction recognized and operationalized (Virginia, Colorado, Connecticut, Texas, Oregon, Montana, Delaware, Tennessee, Indiana)"
  - "Data portability in machine-readable format (Virginia, Colorado, Connecticut, Texas, Oregon, Montana, Delaware)"
  - "Opt-out of sale of personal data (all states with comprehensive privacy laws)"
  - "Opt-out of targeted advertising (all states; definitions vary)"
  - "Opt-out of profiling with legally or similarly significant effects (Virginia, Colorado, Connecticut, Texas, Oregon, Montana, Delaware)"
  - "Right to appeal a controller's refusal with documented process (Virginia VCDPA, Colorado CPA, Connecticut CTDPA)"
evidence_examples:
  - artifact: "Consumer rights matrix comparing right availability, timelines, and exemptions across all applicable states"
    owner: "Privacy Program Manager"
    frequency: "Quarterly"
  - artifact: "State-by-state feature comparison documenting definitional differences for each right"
    owner: "Privacy Counsel"
    frequency: "Semi-annually"
  - artifact: "Appeal process documentation including response templates and escalation procedures"
    owner: "Privacy Operations Lead"
    frequency: "Annually reviewed"
  - artifact: "Consumer rights request log with state attribution, request type, response date, and outcome"
    owner: "Privacy Operations Lead"
    frequency: "Ongoing"
criteria:
  - "Privacy"
---

U.S. state comprehensive privacy laws grant consumers a broadly similar set of rights, but the details diverge enough to create real operational complexity. Every state with a comprehensive privacy law provides rights of access and deletion, and every state provides an opt-out of the sale of personal data and of targeted advertising. However, correction rights, portability rights, and profiling opt-outs are not universal, and the right to appeal a controller's denial of a rights request exists only in Virginia (VCDPA s 59.1-577), Colorado (CPA s 6-1-1306), and Connecticut (CTDPA s 42-520). Organizations operating across multiple states need a single, authoritative matrix that maps which rights apply under which statutes, with which response timelines and exemptions.

| Right | VA (VCDPA) | CO (CPA) | CT (CTDPA) | TX (TDPSA) | OR (OCPA) | MT (MCDPA) | DE (DPDPA) | IA (ICDPA) | TN (TIPA) | IN (ICDPA) |
|-------|------------|----------|------------|------------|-----------|------------|------------|------------|-----------|------------|
| Access | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Deletion | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Correction | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No | Yes | Yes |
| Portability | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No | Yes | Yes |
| Opt-out of Sale | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Opt-out of Targeted Ads | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Opt-out of Profiling | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No | Yes | No |
| Right to Appeal | Yes | Yes | Yes | No | No | No | No | No | No | No |

Response timelines also vary. Virginia, Connecticut, and most other states require a 45-day initial response with a 45-day extension, while Colorado requires a shorter 45-day window with limited extensions. Iowa allows 90 days. The operational burden multiplies when a single consumer request implicates data governed by multiple state laws — organizations need clear jurisdictional logic to determine which state's requirements control the response and to ensure the response satisfies the most protective applicable standard.

The appeal right in Virginia, Colorado, and Connecticut deserves particular attention because it creates a two-tier process. When a controller denies a request, the consumer can appeal to the controller, and the controller must respond within 60 days (Virginia) or 45 days (Colorado, Connecticut). If the appeal is also denied, the consumer can file a complaint with the state attorney general. Organizations without a documented appeal workflow risk both regulatory exposure and consumer frustration, and the appeal process must be as accessible as the original request mechanism.
