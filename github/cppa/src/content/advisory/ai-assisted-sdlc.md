---
module_name: "AI-Assisted SDLC Controls"
order: 1
why_credible: "CCPA's data minimization and purpose limitation principles (§1798.100(c)) apply directly to AI systems that generate, infer, or collect personal information during the software development lifecycle."
additions:
  - "Rules governing AI-generated personal information and inferred PI categories"
  - "Privacy review gates for automated PI collection introduced via AI features"
  - "Data minimization assessment for AI training data derived from consumer PI"
  - "Purpose limitation documentation for PI used in development, testing, and staging environments"
---

AI-assisted development introduces new vectors for personal information collection that traditional SDLC processes do not anticipate. When AI tools generate code that collects user inputs, infers consumer attributes, or creates derived data, the resulting PI may not appear in the original requirements or data inventory. Under CCPA/CPRA, inferences drawn from consumer information to create a profile are themselves personal information (§1798.140(v)(16)), meaning AI-generated inferences are subject to the full suite of consumer rights including access, deletion, and opt-out.

Organizations should embed privacy review gates at the design and code review stages specifically for AI-assisted features. These gates should evaluate whether the AI feature introduces new PI categories, whether the training data includes consumer PI that requires disclosure, and whether the AI output could create inferences that constitute PI under the statute. Development and staging environments that use real consumer PI for testing must also comply with purpose limitation — the PI was collected for production use, not for training or testing AI models, and repurposing it requires either a compatible purpose assessment or fresh notice and consent.
