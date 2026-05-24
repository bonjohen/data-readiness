---
module_name: "Human Review and Agent Approval Gates"
order: 2
why_credible: "Automated decisions affecting customer information require oversight consistent with the qualified individual's responsibilities under § 314.4(a) and the monitoring obligations of § 314.4(c)."
additions:
  - "Human approval gates for AI agents accessing customer information systems"
  - "Escalation procedures for anomalous AI behavior involving customer data"
  - "Audit trail requirements for all AI agent actions on customer information"
  - "Authorization controls for AI-initiated data exports or modifications"
  - "Review gates for automated changes to access controls or security configurations"
---

AI agents operating within financial institution environments may interact with systems containing customer information — querying databases, processing transactions, or generating reports. The qualified individual's oversight responsibility under § 314.4(a) extends to these automated actors. Without explicit approval gates, an AI agent could access, modify, or export customer data in ways that bypass the institution's established security controls.

This module defines where human review is required before an AI agent can act on customer information. High-risk actions — data exports, bulk access, security configuration changes, and account modifications — must require explicit human authorization. The module also establishes audit trail requirements so that every AI agent action involving customer information is logged, attributable, and reviewable.
