---
domain: "Change Management"
order: 3
description: "Peer review, testing, approval before production, emergency-change flow, and release traceability."
requirements:
  - "Peer review required for all code changes before merge"
  - "Testing evidence linked to each release"
  - "Approval documented before production deployment"
  - "Emergency change process with post-hoc review"
  - "Release traceability from ticket to deployment"
evidence_examples:
  - artifact: "Branch protection settings and PR approval record"
    owner: "Engineering manager"
    frequency: "Per change; settings reviewed annually"
  - artifact: "CI/CD test results linked to release"
    owner: "DevOps / Engineering"
    frequency: "Per release"
  - artifact: "Change approval ticket with deployment record"
    owner: "Engineering manager"
    frequency: "Per release"
criteria:
  - "Security"
---

Change management provides auditors with confidence that production changes are reviewed, tested, and authorized. Branch protection rules, PR approvals, and CI results are your primary evidence sources.

Emergency changes still need documented review, even if the approval happens after deployment. Auditors understand urgency but expect a retroactive review process with documented justification.
