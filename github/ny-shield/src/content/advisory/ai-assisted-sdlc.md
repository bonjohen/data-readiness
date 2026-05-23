---
module_name: "AI-Assisted SDLC"
order: 1
why_credible: "NY SHIELD Act technical safeguards require assessing risks in software design (§ 899-bb(2)(b)(ii)(A)), which extends to development workflows augmented by AI code generation and automated development tools."
additions:
  - "Security review of AI-generated code for unintended collection or processing of private information as defined under § 899-aa(1)(b)"
  - "Automated scanning of AI-suggested features for new data flows involving NY resident private information"
  - "Risk assessment of AI coding tool access to development environments containing private information"
  - "Documentation of AI tool usage in security-critical code paths to support safeguard sufficiency evaluations"
---

AI-assisted development creates a compliance surface under the NY SHIELD Act's technical safeguards. When AI tools generate code that collects, stores, or transmits private information — including the SHIELD Act's expanded categories such as biometrics, email-password combinations, and account-security code pairs — the organization remains responsible for ensuring that all three safeguard categories are addressed. AI-generated code may introduce logging behaviors, API integrations, or data persistence patterns that were not part of the original design, creating new data flows involving NY resident information that must be assessed under § 899-bb(2)(b)(ii)(B).

Organizations should treat AI-generated code with the same scrutiny applied to third-party libraries when assessing risks in software design. This includes verifying that AI-suggested features do not expand the scope of private information collected, do not create unprotected transmission paths for private information, and do not weaken existing technical controls such as encryption or access restrictions. Incorporating security review checkpoints into AI-assisted development workflows supports the SHIELD Act's requirement to regularly test and monitor the effectiveness of key controls.
