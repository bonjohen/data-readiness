---
domain: "ICT Change Management"
order: 7
description: "Policies and procedures governing ICT changes including risk assessment, testing, approval, rollback, and emergency change processes."
requirements:
  - "ICT change management policies and procedures covering the full change lifecycle"
  - "Risk assessment for all ICT changes proportionate to their scope and impact"
  - "Testing before production deployment with documented results"
  - "Rollback procedures for failed or problematic changes"
  - "Emergency change process with expedited approval and post-hoc review"
  - "Change approval authority with defined roles and escalation paths"
evidence_examples:
  - artifact: "ICT change management policy with defined change categories and approval authorities"
    owner: "IT Operations Manager"
    frequency: "Annually reviewed"
  - artifact: "Change request logs with risk assessments, test results, and approval records"
    owner: "Change Advisory Board / IT Operations"
    frequency: "Per change; monthly summary review"
  - artifact: "Pre-deployment test records and rollback procedure documentation"
    owner: "DevOps / Engineering"
    frequency: "Per change"
criteria:
  - "Governance"
---

Article 9(4)(e) of DORA requires financial entities to establish ICT change management policies and procedures as a core component of their ICT security framework. Every change to ICT systems — whether software updates, configuration modifications, infrastructure changes, or data migrations — must follow a controlled process that includes risk assessment, testing, approval, and documented rollback capability. The rigour of these controls should be proportionate to the change's scope and potential impact on critical functions.

Testing before production deployment is non-negotiable. Changes must be validated in a controlled environment, with test results documented and linked to the change request. Rollback procedures must be defined and tested before the change is deployed, ensuring that a failed change can be reversed without unacceptable service disruption. For emergency changes — where the urgency of a fix outweighs the normal approval process — an expedited path must exist, but it must include mandatory post-hoc review and retrospective approval.

The change management framework also intersects with third-party ICT risk management. When changes originate from or affect ICT third-party service providers, the financial entity must ensure that its change management controls extend to cover those changes, either through contractual requirements or through validation procedures applied before provider changes are accepted into the entity's production environment.
