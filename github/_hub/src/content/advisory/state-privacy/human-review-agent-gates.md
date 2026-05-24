---
module_name: "Human Review & Agent Gates"
order: 2
why_credible: "State profiling opt-out provisions under Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), and Texas (TDPSA) require human review capabilities for automated decisions that produce legal or similarly significant effects on consumers."
additions:
  - "Human review triggers aligned with state-specific profiling definitions — Virginia, Colorado, Connecticut, and Texas each define profiling slightly differently"
  - "Escalation workflows ensuring automated decisions with legal or similarly significant effects are reviewable by qualified personnel before finalization"
  - "Opt-out of profiling mechanism integrated with universal opt-out and consumer rights request workflows"
  - "Audit trail for agent-driven decisions recording the automated logic, data inputs, human review determination, and consumer notification"
  - "Cross-state profiling impact assessment documenting which automated decisions trigger profiling opt-out rights in which states"
---

State privacy laws grant consumers the right to opt out of profiling that produces legal or similarly significant effects, but the practical implementation of this right requires organizations to know which automated decisions qualify. Virginia (VCDPA s 59.1-575), Colorado (CPA s 6-1-1306), Connecticut (CTDPA s 42-520), and Texas (TDPSA s 541.101) all include profiling opt-out provisions, though they define the threshold for triggering the right somewhat differently. Any AI agent or automated system that makes decisions about consumers — credit determinations, insurance eligibility, employment screening, content personalization with material consequences — must be assessed against each state's profiling definition.

Organizations deploying AI agents should implement gating logic that identifies when an automated decision crosses the "legal or similarly significant effect" threshold and routes those decisions through human review before execution. The gate must be state-aware: a decision that falls below the threshold in one state may exceed it in another. Consumer-facing opt-out mechanisms for profiling should be integrated with the broader consumer rights management system so that a consumer who opts out of profiling has that preference enforced consistently across all automated systems, with the opt-out status propagated to any downstream agents or decision engines.
