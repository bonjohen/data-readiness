---
domain: "Multi-Factor Authentication"
order: 7
description: "Require multi-factor authentication for all individuals accessing customer information systems, with documented exceptions and compensating controls where MFA cannot be implemented."
requirements:
  - "Require MFA for all users accessing any information system containing customer information (§ 314.4(c)(5))"
  - "Require MFA for all remote access to the institution's network and systems"
  - "Document any exceptions to the MFA requirement with justified compensating controls"
evidence_examples:
  - artifact: "MFA enrollment reports showing coverage percentage across all customer information systems"
    owner: "IT Admin"
    frequency: "Quarterly"
  - artifact: "MFA exception register with business justification and approved compensating controls"
    owner: "Security Lead"
    frequency: "Quarterly"
  - artifact: "Authentication configuration documentation showing MFA enforcement settings per system"
    owner: "IT Admin"
    frequency: "Annually"
criteria:
  - "Security"
---

Section 314.4(c)(5) mandates multi-factor authentication for any individual accessing information systems that contain customer information. The requirement applies broadly — employees, contractors, vendors, and administrators must all authenticate with at least two distinct factors before gaining access. Acceptable factors include something the user knows (password), something the user has (hardware token, authenticator app, or push notification), and something the user is (biometric). SMS-based one-time codes, while technically a second factor, are considered weaker due to SIM-swapping and interception risks, and institutions should prefer app-based or hardware token methods.

Remote access is specifically called out by the rule. Any connection to the institution's network or systems from outside the physical office — including VPN connections, remote desktop sessions, cloud application access, and mobile device usage — must require MFA. This requirement became non-negotiable with the 2023 amendments and reflects the reality that remote work has expanded the attack surface for credential theft.

Exceptions to MFA are permitted only where implementation is technically infeasible, and each exception must be individually documented with a business justification and approved compensating controls. Compensating controls might include enhanced logging and monitoring, IP allowlisting, session time limits, or additional access restrictions. The exception register should be reviewed periodically to determine whether the technical barriers have been resolved and MFA can now be deployed. The goal is to drive exception counts toward zero over time.
