---
module_name: "Human Review & Agent Gates"
order: 2
why_credible: "Clinical decision support and AI-assisted diagnostics require human oversight per both HIPAA and FDA guidance on clinical AI systems."
additions:
  - "Clinician review gates for AI-generated health recommendations"
  - "ePHI access logging for all AI agent interactions"
  - "Patient safety escalation procedures for AI-flagged anomalies"
  - "Audit trail requirements for AI-assisted clinical decisions"
---

AI systems operating in healthcare settings — from clinical decision support to administrative automation — must incorporate human review gates before actions affecting patient care or ePHI access are finalized. HIPAA's § 164.312(b) audit controls require that AI agent interactions with ePHI be logged with the same rigor as human access, and the Security Rule's risk analysis requirements extend to the risks introduced by autonomous agents.

Organizations deploying AI agents with ePHI access should implement tiered escalation: routine operations may proceed with logging only, but decisions involving patient care recommendations, ePHI disclosure, or access changes must route through clinician or compliance review. This aligns with emerging FDA guidance on clinical AI and ensures that the human accountability chain required by HIPAA is maintained.
