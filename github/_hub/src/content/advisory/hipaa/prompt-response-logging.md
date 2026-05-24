---
module_name: "Prompt & Response Logging"
order: 4
why_credible: "AI interactions involving ePHI must comply with § 164.312(b) audit controls and § 164.530(j) six-year documentation retention requirements."
additions:
  - "ePHI detection and redaction in prompt and response logs"
  - "Minimum necessary standard applied to AI interaction logging"
  - "Six-year retention alignment for AI audit trails"
  - "Access controls on prompt/response log repositories"
---

When AI systems process ePHI — whether through clinical queries, administrative automation, or analytics — the prompts and responses constitute system activity that § 164.312(b) requires organizations to record and examine. However, logging itself creates a secondary ePHI repository that must be protected with the same access controls, encryption, and retention policies as the source data.

Organizations should implement ePHI detection in prompt/response logs, applying the minimum necessary standard to determine what must be logged for audit purposes versus what should be redacted. Log retention should align with the six-year documentation requirement under § 164.530(j), and access to log repositories must be restricted to authorized personnel with a legitimate need. Automated scanning for inadvertent ePHI in logs reduces the risk of creating uncontrolled data copies.
