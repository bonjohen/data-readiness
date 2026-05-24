---
module_name: "Human Review and Agent Approval Gates"
order: 4
why_credible: "NIST AI RMF emphasizes defined human roles; OWASP recommends human approval for high-risk actions and human-in-the-loop for privileged operations."
additions:
  - "Approval gates for destructive actions"
  - "Human review for system-prompt changes"
  - "Authorization for customer-data exports"
  - "Approval for external tool execution"
  - "Review gates for automated account changes"
---

As AI agents gain more autonomy, organizations need explicit approval gates for high-risk actions. This module defines where human review is required, ensuring that destructive operations, data exports, and privilege changes cannot be executed by AI systems without authorization.
