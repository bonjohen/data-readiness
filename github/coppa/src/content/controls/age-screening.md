---
domain: "Age Screening & Gating"
order: 7
description: "Mechanisms for determining user age and restricting access to child-directed features or triggering COPPA protections."
requirements:
  - "Implement an age gate mechanism on child-directed services to identify users under 13 (16 CFR § 312.2)"
  - "Apply the 'actual knowledge' standard for general audience sites that are not directed to children but become aware a user is under 13 (§ 312.2)"
  - "Use age-neutral screening that does not encourage or facilitate children entering a false age to circumvent protections"
  - "Deploy persistent age gate cookies or equivalent mechanisms to prevent children from re-entering a different age to bypass the gate"
criteria:
  - "Privacy"
evidence_examples:
  - artifact: "Age gate implementation documentation with UX flow screenshots"
    owner: "Product lead"
    frequency: "Annually and on design change"
  - artifact: "Age-neutral design review confirming no leading language or 'just enter a birthdate over 13' patterns"
    owner: "UX lead"
    frequency: "Annually"
  - artifact: "Persistent age gate cookie or session mechanism test results"
    owner: "QA lead"
    frequency: "Quarterly"
---

Age screening is the mechanism by which operators determine whether a user is a child under 13 and trigger the appropriate COPPA protections. For sites and services that are "directed to children" under 16 CFR § 312.2, the operator must treat all users as children unless it can age-screen and separate its child and adult audiences through a reliable mechanism. For general audience sites, COPPA applies when the operator has "actual knowledge" that a user is a child, which can arise from information the user provides, customer support interactions, or other signals.

The FTC has been increasingly critical of age gates that are designed to be easily circumvented. An age gate that simply asks "Are you over 13? Yes/No" or that allows a child to re-enter a different birthdate after being blocked provides no meaningful protection and may expose the operator to liability. The 2024 FTC policy statement on age gating emphasized that age-neutral design is essential: the screening mechanism should not telegraph the "right" answer, should not display the minimum age before asking, and should not allow trivial retry. Persistent cookies or device fingerprints that remember a failed age check and prevent immediate re-attempts are a practical safeguard.

Organizations should document their age gate implementation, including the specific UX flow, the data collected during screening, how screening results are stored, and how the mechanism handles edge cases such as users who clear cookies or switch devices. Periodic testing should verify that the age gate functions as intended and cannot be bypassed through common workarounds. For general audience sites, teams should establish procedures for recognizing and acting on "actual knowledge" signals, such as a user stating their age in a chat or customer support interaction.
