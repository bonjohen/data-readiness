---
domain: "Digital Operational Resilience Testing"
order: 3
description: "Risk-based testing program including vulnerability assessments, scenario-based tests, and threat-led penetration testing (TLPT) for significant entities."
requirements:
  - "Basic testing program covering vulnerability assessments, network security assessments, gap analyses, software reviews, and source code analysis"
  - "Advanced threat-led penetration testing (TLPT) for significant financial entities"
  - "Basic testing performed at least annually for critical ICT systems"
  - "TLPT conducted at least every three years for in-scope entities"
  - "Use of qualified and independent testers with appropriate certifications"
evidence_examples:
  - artifact: "Digital operational resilience testing program with scope, methodology, and schedule"
    owner: "ICT Risk Manager"
    frequency: "Annually reviewed and updated"
  - artifact: "Vulnerability assessment and network security test results with remediation tracking"
    owner: "IT Security Team"
    frequency: "At least annually; critical systems more frequently"
  - artifact: "TLPT reports including threat intelligence, red team findings, and remediation plans"
    owner: "Chief Information Security Officer"
    frequency: "At least every three years"
  - artifact: "Tester qualification records and independence attestations"
    owner: "Compliance Officer"
    frequency: "Per engagement"
criteria:
  - "Governance"
---

DORA Chapter IV (Articles 24–27) establishes a two-tier digital operational resilience testing regime. All financial entities must maintain a basic testing program proportionate to their size and risk profile, covering vulnerability assessments, network security assessments, gap analyses, physical security reviews, software testing, and source code analysis where feasible. These tests must be conducted at least annually for ICT systems supporting critical or important functions.

Significant financial entities face an additional obligation: threat-led penetration testing (TLPT) conducted at least every three years. TLPT follows the TIBER-EU framework and involves genuine threat intelligence-driven scenarios executed by qualified external testers against live production systems. The scope must cover critical functions, and the results — including any identified vulnerabilities — must be reported to the competent authority. Critical ICT third-party service providers may be included in the TLPT scope through pooled testing arrangements.

Testing results feed directly back into the ICT risk management framework. Identified vulnerabilities must be prioritized, remediated, and tracked to closure. The management body must be informed of significant findings and approve remediation plans. This creates a measurable feedback loop: testing validates that protection, detection, and response measures actually work under realistic conditions, rather than relying solely on design-time assumptions about control effectiveness.
