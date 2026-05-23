---
module_name: "Prompt and Response Logging"
order: 4
why_credible: "§ 314.4(c) monitoring requirements for information systems extend to AI interaction logs, which serve as audit evidence for detecting unauthorized access to or exfiltration of customer information."
additions:
  - "Customer information detection and redaction in prompts before transmission to AI providers"
  - "Response filtering to prevent customer data leakage through AI-generated output"
  - "Log retention policies aligned with risk assessment and regulatory retention requirements"
  - "Audit trail for all AI interactions involving customer information systems"
---

When AI systems interact with customer information — whether through direct database queries, document analysis, or conversational interfaces — the prompts and responses become part of the institution's information security perimeter. § 314.4(c) requires monitoring of information systems, and AI interaction logs are a critical source of audit evidence for detecting unauthorized data access, exfiltration attempts, or anomalous query patterns that may indicate a security incident.

This module defines logging requirements for AI interactions: what to capture, how long to retain it, how to detect customer information in prompts before they leave the institution's control, and how to filter responses to prevent unintended disclosure. Log retention must align with both the institution's risk assessment and any applicable regulatory retention obligations.
