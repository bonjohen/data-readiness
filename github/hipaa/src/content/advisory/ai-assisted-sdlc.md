---
module_name: "AI-Assisted SDLC Controls"
order: 1
why_credible: "HIPAA § 164.312(a) access controls and § 164.308(a)(1) risk analysis must extend to AI-assisted development touching ePHI systems."
additions:
  - "ePHI detection scanning in AI-generated code and outputs"
  - "Secure development standards for health IT applications"
  - "HIPAA-compliant CI/CD pipelines with ePHI isolation"
  - "Risk analysis coverage for AI coding tools with ePHI system access"
---

AI coding assistants introduce new vectors for ePHI exposure in healthcare software development. When developers use AI tools to write, review, or debug code that interacts with ePHI systems, the AI tool itself may process data that falls under HIPAA protections. Organizations must extend their § 164.308(a)(1) risk analysis to cover these tools and ensure that § 164.312(a) access controls govern which developers and AI systems can reach ePHI environments.

Practical controls include scanning AI-generated code for hardcoded ePHI or credentials, enforcing secure development standards specific to health IT, and building CI/CD pipelines that isolate ePHI test data from AI-accessible development environments. Organizations should also evaluate whether their AI coding tool vendors qualify as business associates requiring BAAs.
