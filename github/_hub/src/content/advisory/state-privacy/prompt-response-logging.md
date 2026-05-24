---
module_name: "Prompt & Response Logging"
order: 4
why_credible: "State access rights and data inventory obligations require organizations to account for all processing activities involving personal data, including AI interactions where personal data appears in prompts or model responses."
additions:
  - "Logging scope assessment determining which AI prompts and responses contain personal data subject to state consumer rights"
  - "Retention policies for AI interaction logs aligned with data minimization requirements across applicable states"
  - "Consumer access and deletion right coverage for personal data captured in prompt-response logs"
  - "De-identification and redaction strategies for AI logs to reduce the compliance surface of retained interaction data"
  - "Data inventory integration ensuring AI interaction logs are captured in the organization's processing activity records"
---

When personal data appears in AI prompts or model responses — customer names in support queries, health information in clinical decision support, financial data in analysis requests — those interactions become processing activities subject to state privacy laws. Every state comprehensive privacy law requires controllers to maintain awareness of their processing activities and to fulfill consumer rights requests (access, deletion, portability) across all systems where personal data is stored. AI interaction logs that contain personal data must be discoverable and included in the scope of consumer rights fulfillment.

Organizations should assess their AI logging practices to determine the volume and sensitivity of personal data captured in prompt-response logs, then implement retention and minimization policies that align with the strictest applicable state requirements. Where feasible, personal data should be redacted or de-identified before logging, reducing the compliance surface. Where redaction is not feasible — because the personal data is integral to the AI interaction's purpose — the logs must be included in the data inventory, subject to consumer access and deletion requests, and protected with appropriate security controls.
