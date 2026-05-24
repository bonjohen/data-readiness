---
domain: "Access Controls"
order: 3
description: "Implement technical and administrative safeguards to restrict access to customer information systems based on least-privilege principles, with documented review and approval processes."
requirements:
  - "Implement technical and administrative access restrictions on customer information systems (§ 314.4(c)(1))"
  - "Apply the least-privilege principle — users receive only the access necessary for their job function"
  - "Establish privileged access management with enhanced controls for administrative accounts"
  - "Conduct periodic access reviews to verify appropriateness and revoke unnecessary access"
evidence_examples:
  - artifact: "Access control matrix mapping roles to permitted systems, data classifications, and privilege levels"
    owner: "IT Admin"
    frequency: "Quarterly"
  - artifact: "Privileged access review logs showing administrative account justification and recertification"
    owner: "Security Lead"
    frequency: "Quarterly"
  - artifact: "Access request and approval records with business justification and manager sign-off"
    owner: "IT Admin"
    frequency: "Per request"
  - artifact: "User access deprovisioning records for terminated employees and role changes"
    owner: "HR"
    frequency: "Per event"
criteria:
  - "Security"
---

Section 314.4(c)(1) requires financial institutions to implement access controls that limit who can view, modify, or transmit customer information. This goes beyond simply assigning passwords — the rule expects both technical controls (role-based access, network segmentation, system-level permissions) and administrative controls (access request procedures, manager approvals, documented business justifications). The least-privilege principle is central: every user should have access only to the information and systems required for their specific job function, and no more.

Privileged access — administrative accounts, database access, root credentials — demands enhanced scrutiny. These accounts can bypass normal controls and access the broadest scope of customer information. Institutions must implement controls such as separate administrative accounts, session monitoring, just-in-time access provisioning, and regular recertification of who holds privileged access and why. Shared administrative credentials should be eliminated wherever possible, and where they persist, compensating controls such as password vaulting and session recording are expected.

Access reviews are a recurring obligation, not a one-time setup. The institution must periodically verify that access grants remain appropriate as employees change roles, leave the organization, or as systems evolve. Deprovisioning must be timely — especially for terminated employees — and documented. The access review process should produce an auditable record that demonstrates the institution actively manages who has access to customer information and responds promptly when access is no longer justified.
