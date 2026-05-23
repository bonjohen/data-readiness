---
domain: "Cure Period & Enforcement"
order: 8
description: "Maintain compliance documentation and response procedures aligned with state-specific cure periods and attorney general enforcement frameworks, ensuring timely remediation and regulatory correspondence capabilities."
requirements:
  - "Cure period lengths mapped per state (30 days Virginia and Connecticut, 60 days Colorado and Texas, no mandatory cure in some newer laws)"
  - "Attorney general enforcement authority recognized as the primary (and in most states, exclusive) enforcement mechanism"
  - "No private right of action under most state comprehensive privacy laws (distinction from CCPA/CPRA)"
  - "Penalty framework comparison documented across applicable states"
  - "Cure period response procedures with documented remediation timelines and evidence of cure"
  - "Compliance documentation maintained proactively for AG inquiry readiness"
evidence_examples:
  - artifact: "Cure period response procedures including intake, triage, remediation workflow, and evidence-of-cure documentation"
    owner: "Privacy Counsel"
    frequency: "Annually reviewed"
  - artifact: "AG correspondence records including inquiry responses, document productions, and resolution outcomes"
    owner: "Privacy Counsel"
    frequency: "As needed"
  - artifact: "Compliance timeline documentation showing cure period tracking per state with remediation milestones"
    owner: "Privacy Operations Lead"
    frequency: "Ongoing"
criteria:
  - "Privacy"
---

Enforcement of U.S. state comprehensive privacy laws is exclusively through attorney general action in nearly every state — the significant exception being California's CCPA/CPRA, which provides a limited private right of action for data breaches. For the patchwork states covered here, the AG is the sole enforcer, which means the practical compliance priority is maintaining readiness for AG inquiries and civil investigative demands rather than defending private lawsuits. However, the cure period provisions that initially softened enforcement are eroding: while early-adopter states provided mandatory cure periods, newer laws are eliminating or shortening them.

| State | Cure Period | Sunset Date | AG Enforcement | Private Right of Action | Max Penalty |
|-------|-------------|-------------|----------------|------------------------|-------------|
| Virginia (VCDPA) | 30 days | None (permanent) | Yes | No | $7,500/violation |
| Colorado (CPA) | 60 days | January 1, 2025 (sunset) | Yes | No | $20,000/violation |
| Connecticut (CTDPA) | 60 days | December 31, 2024 (sunset) | Yes | No | $5,000/violation |
| Texas (TDPSA) | 30 days | None | Yes | No | $7,500/violation |
| Oregon (OCPA) | 30 days | January 1, 2026 (sunset) | Yes | No | $7,500/violation |
| Iowa (ICDPA) | 90 days | None (permanent) | Yes | No | Per consumer protection act |
| Montana (MCDPA) | 60 days | April 1, 2026 (sunset) | Yes | No | $7,500/violation |
| Delaware (DPDPA) | 60 days | December 31, 2025 (sunset) | Yes | No | $10,000/violation |

The sunsetting of cure periods in Colorado, Connecticut, Oregon, Montana, and Delaware is a critical compliance development. Once a cure period sunsets, the AG can pursue enforcement action immediately upon discovering a violation without offering the controller an opportunity to remediate first. Organizations that have relied on cure periods as an informal compliance buffer need to shift to proactive compliance postures — maintaining evidence of compliance, not just the ability to cure. The cure period, where it still exists, requires the controller to cure the violation within the specified timeframe after receiving written notice from the AG, and to provide the AG with an express written statement that the violation has been cured and that no further violations will occur.

Organizations should maintain cure period response procedures as part of their privacy incident management framework. The procedure should define the intake process for AG notices, triage criteria for assessing the severity and scope of the alleged violation, a remediation workflow with assigned responsibilities and deadlines, a documentation protocol for evidence of cure, and a communication plan for responding to the AG. Even in states where cure periods have sunset, having a rapid-response capability demonstrates good faith and may influence the AG's exercise of enforcement discretion.
