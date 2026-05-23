---
module_name: "Prompt & Response Logging"
order: 4
why_credible: "Logging AI interactions with children may constitute PI collection requiring parental consent — persistent logs of children's prompts and system responses can contain identifiable information subject to COPPA."
additions:
  - "Minimal logging policies for children's AI interaction sessions"
  - "Parental consent requirements for any persistent logging of children's AI interactions"
  - "Automatic deletion schedules for children's session logs aligned with COPPA retention limits"
  - "PI detection and redaction in children's prompt and response logs"
---

AI systems typically log user prompts and model responses for debugging, quality improvement, and safety monitoring. When the user is a child under 13, these logs may capture personal information embedded in natural language — names, locations, school details, family information — creating a PI collection event that falls under COPPA's consent requirements. Organizations must evaluate whether their logging practices for child-directed AI features constitute collection of children's PI and, if so, ensure parental consent covers this use.

The safest approach is to implement minimal logging for children's sessions: log only what is necessary for immediate safety monitoring, automatically redact detected PI from any logs that are retained, and enforce aggressive deletion schedules. If persistent logging is necessary for compliance or safety reasons, it should be explicitly disclosed in the privacy notice and covered by the parental consent mechanism.
