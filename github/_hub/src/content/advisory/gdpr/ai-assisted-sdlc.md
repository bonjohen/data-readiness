---
module_name: "AI-Assisted SDLC"
order: 1
why_credible: "GDPR Art. 25 (privacy by design and by default) requires data protection to be integrated into development processes, including those augmented by AI code generation and automated development tools."
additions:
  - "Privacy review of AI-generated code for unintended personal data collection or processing"
  - "Automated data collection review to detect new data flows introduced by AI-suggested features"
  - "DPIA trigger assessment for AI-assisted features that process personal data"
---

AI-assisted development introduces a novel compliance surface under the GDPR. When AI tools generate code that collects, processes, or stores personal data, the developer and the organization remain fully accountable under Art. 24 for ensuring that processing complies with all GDPR principles. AI-generated code may introduce data collection patterns, logging behaviors, or third-party integrations that were not part of the original design specification, creating unintended processing activities that need to be captured in the ROPA and assessed for lawful basis.

Organizations should integrate privacy review checkpoints into their AI-assisted development workflows, treating AI-generated code with the same scrutiny applied to third-party libraries. This includes verifying that AI-suggested features do not expand data collection beyond what is necessary (Art. 5(1)(c)), do not introduce new processing purposes without documented lawful basis (Art. 6), and do not create data flows to third countries without appropriate safeguards (Art. 44). Automated scanning tools can assist, but human review remains essential for assessing purpose limitation and proportionality — areas where automated tools cannot substitute for legal judgment.
