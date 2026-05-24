---
module_name: "Prompt & Response Logging"
order: 4
why_credible: "PCI DSS Req 10 audit trail requirements extend to all system interactions involving cardholder data, including AI system prompts and responses that may contain or reference PAN or account data."
additions:
  - "Logging of all AI prompts and responses that interact with CDE systems or reference cardholder data"
  - "PAN masking in prompt/response logs to prevent audit trails from becoming a secondary data store"
  - "Retention of AI interaction logs for the same 12-month period required by Req 10 for other audit trails"
  - "Access controls on prompt/response logs equivalent to controls on cardholder data storage"
---

AI systems that process queries about cardholder data or operate within the CDE generate a new category of audit trail that PCI DSS Requirement 10 implicitly covers. If an AI assistant can answer questions about transaction records, display account data, or execute queries against payment databases, then the prompts users send and the responses the AI returns may contain cardholder data. These interactions must be logged with the same rigor as direct database access — user identification, timestamp, what was requested, and what was returned.

The logging itself creates a data protection challenge. If prompts and responses are logged verbatim, the log store becomes a secondary repository of cardholder data subject to Requirement 3's storage protection. Organizations must implement PAN masking or tokenization within the logging pipeline so that audit trails capture enough detail for forensic reconstruction without creating a new target for data theft. Log access must be restricted to authorized personnel with documented need-to-know, and retention must align with the 12-month minimum required by Requirement 10.7.
