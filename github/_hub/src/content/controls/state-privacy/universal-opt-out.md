---
domain: "Universal Opt-Out Mechanisms"
order: 4
description: "Implement technical mechanisms to detect and honor universal opt-out preference signals such as Global Privacy Control, as required by Colorado, Connecticut, Texas, Montana, Delaware, and Oregon, with fallback opt-out mechanisms for all applicable states."
requirements:
  - "Global Privacy Control (GPC) signal recognition and honoring as required by Colorado (CPA), Connecticut (CTDPA), Texas (TDPSA), Montana (MCDPA), Delaware (DPDPA), and Oregon (OCPA)"
  - "Browser-level opt-out preference signal detection implemented across all consumer-facing digital properties"
  - "Technical integration mapping GPC signals to downstream processing restrictions (sale, targeted advertising)"
  - "Fallback opt-out mechanisms (cookie preference center, web form, toll-free number) for states without universal signal requirements or for consumers not using GPC-enabled browsers"
  - "Documentation of opt-out signal processing logic and consumer preference persistence"
evidence_examples:
  - artifact: "GPC implementation documentation including signal detection code, downstream processing logic, and browser compatibility testing"
    owner: "Engineering Lead"
    frequency: "Annually reviewed"
  - artifact: "Opt-out signal testing results showing correct detection and honoring across browsers and platforms"
    owner: "QA Lead"
    frequency: "Quarterly"
  - artifact: "Preference management records showing consumer opt-out state and processing restriction enforcement"
    owner: "Privacy Operations Lead"
    frequency: "Ongoing"
criteria:
  - "Privacy"
---

Universal opt-out mechanisms represent one of the most technically demanding requirements in the state privacy patchwork. Colorado was the first state to require controllers to recognize and honor universal opt-out signals by July 2024, and Connecticut, Texas, Montana, Delaware, and Oregon have followed with similar requirements. The Global Privacy Control (GPC) specification — a browser-level HTTP header and JavaScript API signal — has emerged as the de facto standard. When a consumer's browser sends the `Sec-GPC: 1` header, controllers in these states must treat it as a valid opt-out of both the sale of personal data and targeted advertising, without requiring any additional action from the consumer.

| State | GPC/Universal Signal Required | Effective Date | Scope of Opt-Out |
|-------|-------------------------------|----------------|------------------|
| Colorado (CPA) | Yes | July 1, 2024 | Sale + targeted advertising |
| Connecticut (CTDPA) | Yes | January 1, 2025 | Sale + targeted advertising |
| Texas (TDPSA) | Yes | January 1, 2025 | Sale + targeted advertising |
| Montana (MCDPA) | Yes | January 1, 2025 | Sale + targeted advertising |
| Delaware (DPDPA) | Yes | January 1, 2026 | Sale + targeted advertising |
| Oregon (OCPA) | Yes | January 1, 2024 | Sale + targeted advertising |
| Virginia (VCDPA) | Not required | N/A | Manual opt-out only |
| Iowa (ICDPA) | Not required | N/A | Manual opt-out only |

The implementation challenge is that GPC operates at the browser level, but the processing restrictions it triggers operate at the data pipeline level. Receiving the GPC signal on a web request is straightforward; propagating the consumer's opt-out preference to ad-tech partners, analytics platforms, data brokers, and retargeting systems requires integration work that spans the entire data processing ecosystem. Organizations must map every downstream system that uses personal data for sale or targeted advertising and ensure that the GPC signal triggers processing restrictions in each one. This mapping should be documented and tested regularly — a broken integration means non-compliance even if the signal is correctly detected.

For states that do not require universal opt-out signals (Virginia, Iowa), and for consumers who do not use GPC-enabled browsers, organizations must still provide accessible opt-out mechanisms. Best practice is a layered approach: GPC detection as the primary mechanism, supplemented by a cookie preference center or consent management platform, a web-based opt-out form, and where required by state law, a toll-free phone number. The preference management system must persist opt-out choices and apply them consistently across sessions and devices where the consumer can be identified.
