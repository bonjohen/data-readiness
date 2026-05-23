---
module_name: "Human Review & Agent Gates"
order: 2
why_credible: "Automated systems accessing the CDE require oversight to prevent unauthorized data access; PCI DSS Req 7 (need-to-know access) and Req 10 (audit trails) mandate accountability that autonomous agents cannot self-provide."
additions:
  - "Human approval gates before any automated agent accesses cardholder data or modifies CDE configurations"
  - "Agent action logging with the same audit trail granularity required by Req 10 for human users"
  - "Privilege boundaries preventing agents from escalating their own access within the CDE"
  - "Kill-switch mechanisms for immediate termination of agent sessions accessing payment systems"
---

Autonomous AI agents that interact with payment systems or CDE infrastructure create an accountability gap that PCI DSS was not designed to address. Requirement 7 assumes that access decisions are made by identifiable individuals with documented need-to-know. When an agent autonomously queries a database containing PAN or modifies firewall rules protecting the CDE, the action must still be attributable to a responsible human and must still be justified by business need. Human review gates at critical decision points — before data access, before configuration changes, before any action that could expand CDE scope — maintain this accountability chain.

Agent audit trails must meet the same standards as human audit trails under Requirement 10: unique identification of the agent and its authorizing human, timestamp, action type, success/failure, and affected resource. Organizations should implement separate service accounts for each agent with the minimum privileges required, and ensure that agents cannot modify their own access controls. The combination of human gates and comprehensive logging transforms autonomous agents from an uncontrolled risk into a managed and auditable tool.
