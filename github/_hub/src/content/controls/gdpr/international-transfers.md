---
domain: "International Data Transfers"
order: 7
description: "Ensure all transfers of personal data to third countries or international organizations comply with Chapter V safeguards under Art. 44–49."
requirements:
  - "Adequacy decision reliance documented with reference to specific Commission decisions (Art. 45)"
  - "Standard Contractual Clauses (SCCs) executed for transfers lacking an adequacy decision (Art. 46(2)(c))"
  - "Transfer impact assessments (TIAs) evaluating third-country legal frameworks"
  - "Supplementary measures implemented where TIAs identify inadequate protections"
  - "Binding Corporate Rules (BCRs) for intra-group transfers where applicable (Art. 47)"
evidence_examples:
  - artifact: "SCC register listing all executed clauses with counterparties, data categories, and transfer destinations"
    owner: "Privacy Counsel"
    frequency: "Quarterly"
  - artifact: "Transfer impact assessment documents analyzing third-country surveillance laws and data protection standards"
    owner: "Data Protection Officer"
    frequency: "Per transfer mechanism and upon legal landscape changes"
  - artifact: "Adequacy decision reference log mapping transfers to applicable Commission decisions"
    owner: "Privacy Operations Manager"
    frequency: "Semi-annually"
  - artifact: "Supplementary measures documentation (encryption, pseudonymization, contractual commitments)"
    owner: "Information Security Manager"
    frequency: "Annually"
criteria:
  - "Privacy"
---

Chapter V of the GDPR restricts transfers of personal data to countries outside the EEA unless adequate protections are in place. The simplest mechanism is an adequacy decision from the European Commission, which currently covers a limited number of countries including the UK, Japan, South Korea, and — following the EU-US Data Privacy Framework — the United States for certified organizations. For all other destinations, organizations must rely on appropriate safeguards such as Standard Contractual Clauses, Binding Corporate Rules, or approved codes of conduct and certification mechanisms.

The Schrems II judgment (C-311/18) fundamentally changed the transfer landscape by requiring organizations to assess whether the legal framework of the recipient country provides essentially equivalent protection to the GDPR. This assessment — the transfer impact assessment (TIA) — must evaluate surveillance laws, government access to data, and available legal remedies in the destination country. Where the TIA reveals gaps, organizations must implement supplementary technical, contractual, or organizational measures to bridge the protection gap, or suspend the transfer if no supplementary measures can provide adequate protection.

Organizations operating globally often face complex transfer chains involving multiple jurisdictions and sub-processors. Each link in the chain requires its own transfer mechanism and assessment. Binding Corporate Rules provide a streamlined approach for intra-group transfers but require supervisory authority approval and ongoing compliance monitoring. Regardless of the mechanism used, organizations must document each transfer, the safeguard relied upon, and the assessment supporting its adequacy — creating an auditable trail that demonstrates compliance with Art. 44's general principle that the level of GDPR protection is not undermined.
