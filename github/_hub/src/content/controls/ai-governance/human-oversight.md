---
domain: "Human Oversight & Accountability"
order: 7
description: "Human-in-the-loop mechanisms, override capabilities, accountability chains, and appeal processes for AI decisions."
requirements:
  - "Human-in-the-loop required for high-risk decisions"
  - "Override mechanisms documented and tested"
  - "Clear accountability chain defining responsibility for AI decisions"
  - "Escalation paths for AI system failures"
  - "Appeal mechanisms available for affected individuals"
evidence_examples:
  - artifact: "Human oversight procedures and decision authority matrix"
    owner: "AI Governance Lead"
    frequency: "Annually"
  - artifact: "Override mechanism logs and testing records"
    owner: "Operations / ML Engineering"
    frequency: "Quarterly"
  - artifact: "RACI matrix for AI system accountability"
    owner: "AI Governance Lead"
    frequency: "Annually"
  - artifact: "Appeal process documentation and resolution records"
    owner: "Compliance / Legal"
    frequency: "Ongoing"
criteria:
  - "Governance"
---

The GOVERN function of the AI RMF places human oversight at the center of responsible AI deployment. No matter how accurate or well-tested an AI system is, there must be humans who are empowered, informed, and positioned to intervene when the system produces harmful, incorrect, or inappropriate outcomes. This is especially critical for high-risk systems where AI decisions affect individuals' rights, opportunities, or safety.

Effective human oversight requires more than theoretical override capability. Override mechanisms must be practically accessible — operators need to be able to halt, reverse, or modify AI decisions in real time without undue friction. These mechanisms must be tested regularly to verify they work under operational conditions. The accountability chain must be unambiguous: for every AI-driven decision, there should be an identifiable human who is responsible for the outcome, even when the human did not make the specific decision.

Appeal mechanisms address the rights of people affected by AI decisions. When an individual receives an adverse outcome from an AI system — a denied application, a flagged transaction, a risk score — they should have a clear path to request human review of that decision. The appeal process must be accessible, timely, and substantive, meaning a human actually reviews the case rather than simply confirming the AI's output. Escalation paths for system-level failures (model outages, detected bias, data quality issues) ensure that operational problems receive appropriate organizational attention.
