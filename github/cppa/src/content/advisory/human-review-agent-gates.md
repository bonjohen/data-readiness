---
module_name: "Human Review & Agent Gates"
order: 2
why_credible: "CPRA's profiling provisions (§1798.185(a)(16)) and right to opt out of automated decision-making require human oversight when automated systems produce legal or similarly significant effects on consumers."
additions:
  - "Human-in-the-loop checkpoints for AI decisions that affect consumer rights or access"
  - "Escalation procedures when automated processing impacts consumer PI access, pricing, or service availability"
  - "Documentation of automated decision logic for right-to-know response fulfillment"
  - "Consumer-facing disclosure of significant automated decision-making involving PI"
---

CPRA directed the CPPA to issue regulations governing consumers' right to opt out of automated decision-making technology, including profiling (§1798.185(a)(16)). While the final rulemaking on this topic is still evolving, the direction is clear: automated systems that use personal information to make decisions with legal or similarly significant effects on consumers must include human review mechanisms and consumer opt-out pathways.

Organizations deploying AI agents or automated workflows that process consumer PI should implement gate controls — points in the workflow where a human reviewer evaluates the AI's output before it reaches the consumer or triggers a consequential action. These gates are particularly important for decisions about pricing, eligibility, content moderation, and account actions. When a consumer exercises their right to know, the organization must be able to explain the logic of automated decisions and the PI categories used, which requires maintaining decision audit trails and model input/output logs.
