---
module_name: "AI-Assisted SDLC Controls"
order: 1
why_credible: "§ 314.4(c)(4) secure development practices extend to AI-assisted coding tools used in financial service application development, where AI-generated code may handle customer information."
additions:
  - "AI code review requirements for customer data handling logic"
  - "Automated security scanning of AI-generated output before merge"
  - "Secure coding standards for AI-assisted features touching customer information"
  - "Provenance tracking for AI-generated code artifacts"
---

As financial institutions adopt AI coding assistants, the secure development requirements of § 314.4(c)(4) must extend to cover AI-generated code that handles customer information. AI-generated code is not exempt from security review — it can introduce vulnerabilities such as insecure data handling, hardcoded credentials, or improper access patterns that a human reviewer would catch. Institutions should treat AI-generated code with the same (or greater) scrutiny as human-written code, particularly when it touches customer data paths.

This module defines review gates specific to AI-assisted development: mandatory security-focused review of any AI-generated code that processes, stores, or transmits customer information; automated scanning tools configured to flag common AI coding patterns that introduce risk; and provenance tracking so that auditors can identify which code was AI-generated and confirm it passed security review.
