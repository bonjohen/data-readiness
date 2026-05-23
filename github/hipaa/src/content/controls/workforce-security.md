---
domain: "Workforce Security & Training"
order: 2
description: "Authorization and supervision procedures, workforce clearance, termination controls, and security awareness training."
requirements:
  - "(A) Authorization and supervision procedures for workforce members accessing ePHI"
  - "(A) Workforce clearance procedures to determine appropriate ePHI access"
  - "(A) Termination procedures to revoke access upon separation or role change"
  - "(R) Security awareness and training program for all workforce members"
  - "(A) Security reminders and updates"
  - "(A) Protection from malicious software training"
  - "(A) Log-in monitoring awareness"
  - "(A) Password management training"
evidence_examples:
  - artifact: "Training completion records with dates and attestations for all workforce members"
    owner: "HR / Training Coordinator"
    frequency: "Annually"
  - artifact: "Workforce clearance documentation and background check records"
    owner: "HR"
    frequency: "Event-driven (onboarding)"
  - artifact: "Termination checklist with access revocation timestamps"
    owner: "HR + IT"
    frequency: "Event-driven (offboarding)"
  - artifact: "Security awareness training materials and curriculum"
    owner: "Security Officer"
    frequency: "Annually reviewed"
criteria:
  - "Security"
---

Workforce security under 45 CFR § 164.308(a)(3-4) addresses the human element of ePHI protection. The regulation recognizes that technical controls alone are insufficient — organizations must ensure that workforce members are authorized, supervised, and trained to handle ePHI appropriately. While authorization, clearance, and termination procedures are addressable specifications (allowing flexibility in implementation), the security awareness and training program is a required specification.

The training program must cover protection from malicious software, log-in monitoring, password management, and general security awareness. Organizations should maintain records of training completion and periodically issue security reminders. OCR expects to see evidence that training is role-appropriate — a clinician with EHR access needs different training than a facilities worker.

Termination procedures are particularly critical. When a workforce member leaves or changes roles, access to ePHI systems must be revoked promptly. This includes retrieving devices, disabling credentials, and changing shared access codes. Delays in deprovisioning are a frequent finding in OCR investigations and represent a tangible risk of unauthorized ePHI access.
