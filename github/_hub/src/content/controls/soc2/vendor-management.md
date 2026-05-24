---
domain: "Vendor Management"
order: 7
description: "Vendor register, risk rating, pre-engagement due diligence, annual review, and reliance on vendor SOC reports."
requirements:
  - "Maintained vendor register with risk ratings"
  - "Pre-engagement due diligence for critical vendors"
  - "Annual review of critical vendor security posture"
  - "Collection and review of vendor SOC reports or questionnaires"
evidence_examples:
  - artifact: "Vendor register with risk ratings and review dates"
    owner: "Ops / Security"
    frequency: "Annually"
  - artifact: "Vendor SOC report or security questionnaire"
    owner: "Security lead"
    frequency: "Annually per critical vendor"
  - artifact: "Vendor contract with security requirements"
    owner: "Legal / Ops"
    frequency: "Per engagement"
criteria:
  - "Security"
  - "Confidentiality"
---

Vendor management is especially important if you rely on subservice organizations (cloud providers, SaaS tools, data processors) that handle your customers' data. Auditors want to see that you monitor your vendors' security posture rather than assuming it.

The distinction between carve-out and inclusive treatment matters. Most startups use the carve-out method, which means your report acknowledges the vendor's role but doesn't include their controls. You must then show monitoring controls for those carved-out providers.
