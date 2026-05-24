---
module_name: "AI-Assisted SDLC Controls"
order: 1
why_credible: "PCI DSS Req 6 requires secure development practices; AI-assisted coding introduces risks of exposing cardholder data patterns in generated code and bypassing established change control processes."
additions:
  - "Code review gates for AI-generated code that interacts with cardholder data or CDE components"
  - "Prohibition on using production PAN or SAD in AI coding prompts or training data"
  - "Secure coding standard addendum covering AI-specific risks (injection via prompt, data leakage in suggestions)"
  - "Change control documentation requirements for AI-assisted modifications to CDE applications"
  - "SAST/DAST scan requirements specifically targeting AI-generated code before deployment"
---

AI-assisted development tools present unique risks in a PCI DSS context because the cardholder data environment has zero tolerance for accidental data exposure. When developers use AI coding assistants on payment applications, the prompts may contain code snippets that reveal PAN handling logic, encryption key references, or CDE network topology. The generated code itself may introduce OWASP Top 10 vulnerabilities that a human developer would avoid — SQL injection in payment queries, hardcoded credentials, or insecure direct object references to cardholder data fields. Requirement 6's secure development mandate must extend explicitly to AI-generated code.

Organizations should treat AI coding assistants as a new category of development tool subject to the same change control and security review processes required by Requirement 6.5. AI-generated code must pass through the same SAST/DAST pipeline as human-written code, and code reviewers must be trained to recognize AI-specific risk patterns. Additionally, any AI tool with access to CDE source repositories should be evaluated as an in-scope system component, since it has access to code that processes cardholder data.
