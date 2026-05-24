---
domain: "Opt-Out & Do Not Sell/Share"
order: 4
description: "Mechanisms for consumers to opt out of the sale and sharing of personal information, including recognition of opt-out preference signals."
requirements:
  - "Provide a clear and conspicuous 'Do Not Sell or Share My Personal Information' link (§1798.135(a))"
  - "Recognize and honor Global Privacy Control (GPC) and other opt-out preference signals (§1798.135(e))"
  - "Process opt-out requests without requiring account creation or unnecessary verification"
  - "Maintain opt-out status for at least 12 months before requesting re-authorization (§1798.135(c))"
criteria:
  - "Privacy"
evidence_examples:
  - artifact: "GPC signal detection and processing logs showing honored requests"
    owner: "Engineering lead"
    frequency: "Monthly"
  - artifact: "Opt-out mechanism testing results across browsers and devices"
    owner: "QA or Engineering"
    frequency: "Quarterly"
  - artifact: "Consent management platform configuration showing opt-out defaults"
    owner: "Marketing or Privacy lead"
    frequency: "Quarterly"
---

CPRA significantly strengthened opt-out rights by extending them from the sale of PI to the sharing of PI for cross-context behavioral advertising. The distinction matters: "sharing" under §1798.140(ah) covers disclosing PI to third parties for targeted advertising even when no money changes hands. This means ad-tech integrations, retargeting pixels, and data clean rooms all fall within scope if they involve cross-context behavioral targeting.

The practical requirement is twofold. First, the business must offer a clear, one-click opt-out mechanism — the "Do Not Sell or Share" link — that does not require consumers to create an account or navigate through misleading interface patterns. Second, the business must treat opt-out preference signals, specifically the Global Privacy Control (GPC) browser signal, as a valid opt-out request. The CPPA's final regulations confirm that a GPC signal constitutes a valid request to opt out of both sale and sharing.

Enforcement actions have targeted businesses that technically offered the opt-out link but undermined it through dark patterns, confusing toggle states, or consent management platforms that defaulted to opt-in despite receiving a GPC signal. Organizations should test their opt-out flows quarterly across major browsers and device types, verify that their consent management platform correctly interprets GPC signals at the HTTP header level, and ensure that downstream advertising and analytics partners actually suppress data when an opt-out is in effect. An opt-out that is honored in the CMP but not propagated to the ad server is not compliant.
