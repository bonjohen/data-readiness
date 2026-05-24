---
module_name: "Prompt/Response/Model-Operation Logging"
order: 3
why_credible: "Inferred from NIST/OWASP risk guidance for investigation, oversight, and abuse detection. Not an explicit SOC 2 requirement."
additions:
  - "Prompt/response telemetry policy"
  - "Redaction rules for logged content"
  - "Retention rules for model operation logs"
  - "Abuse-event review workflow"
  - "Log access restrictions"
---

Logging model operations, prompts, and responses enables investigation of abuse, oversight of model behavior, and detection of anomalous patterns. This module defines what to log, how to redact sensitive content before storage, and who can access the telemetry data.
