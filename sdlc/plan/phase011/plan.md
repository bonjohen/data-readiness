---
phase: "011"
title: "Topic Site Content Development — All 11 Regulations"
depends_on: "Phase 010"
goal: "Every placeholder topic site has regulation-accurate content collections (controls, advisory, services, tools) as markdown files, matching the SOC 2 content model. Each site is buildable and ready for scaffold integration."
source_pdr_sections: ["2.3", "6.1"]
source_user_stories: ["US-003", "US-006", "US-008"]
status: "completed"
---

# Phase 011: Topic Site Content Development — All 11 Regulations

## Overview

Phase 010 established the SOC 2 site as the reference implementation. Each topic site follows the same content model — four Astro content collections with Zod-validated frontmatter:

| Collection | Schema Fields | SOC 2 Count | Purpose |
|------------|--------------|-------------|---------|
| **controls** | domain, order, description, requirements[], evidence_examples[{artifact, owner, frequency}], criteria[] | 12 | Regulation-specific control domains with evidence guidance |
| **advisory** | module_name, order, why_credible, additions[] | 7 | AI/data governance enhancement modules |
| **services** | name, order, duration, price_range, deliverables[] | 4 | Advisory service packages |
| **tools** | name, category (compliance\|operational), good_fit, cautions | 15 | Platform and tool evaluations |

**What this plan covers:** The markdown content files only — the frontmatter data and body text for each collection. Site scaffolding (package.json, astro config, components, pages, styles) is a separate concern and will be handled in a follow-on phase that clones the SOC 2 site structure.

**Content accuracy standard:** Each control domain must reflect the actual regulatory text, using correct section numbers, defined terms, and enforcement thresholds. Advisory, services, and tools content is adapted from the SOC 2 baseline with regulation-specific language.

## Shared Content Patterns

### Services (4 per site — structurally identical, regulation-adapted)

Every topic site offers the same four service packages with regulation-specific language:

| Service | Duration | Price Range | Adaptation |
|---------|----------|-------------|------------|
| Readiness Sprint | 2–4 weeks | $8,000–$25,000 | Scope to regulation's control domains |
| Remediation Program | 4–12 weeks | $15,000–$60,000 | Gap closure mapped to regulation's requirements |
| Audit Support | During audit/assessment | $5,000–$20,000 | Regulation-specific audit or assessment coordination |
| Continuous Compliance | Ongoing (monthly) | $3,000–$10,000/mo | Monitoring cadence matched to regulation's review cycles |

### Advisory (7 per site — AI/data governance modules, regulation-contextualized)

The advisory collection covers the same 7 AI/data themes across all sites, but the `why_credible` rationale and `additions` list are regulation-specific:

| Module | Universal Theme | Per-Regulation Adaptation |
|--------|----------------|--------------------------|
| AI-Assisted SDLC Controls | Secure AI-assisted development | Map to regulation's secure development requirements |
| Human Review & Agent Gates | Human oversight of AI decisions | Map to regulation's accountability/oversight provisions |
| Model Provider Vendor Risk | Third-party AI model risk | Map to regulation's vendor/third-party management |
| Prompt & Response Logging | AI interaction audit trails | Map to regulation's logging/monitoring requirements |
| RAG & Vector Store Controls | Data governance for retrieval systems | Map to regulation's data handling/classification rules |
| Training & Inference Data Governance | ML data lifecycle | Map to regulation's data protection provisions |
| Warehouse & Analytics Governance | Data platform controls | Map to regulation's data processing requirements |

### Tools (15 per site — largely shared, regulation-specific fit descriptions)

The same 15 tools appear across all sites. The `good_fit` and `cautions` fields are rewritten for each regulation's context:

**Compliance platforms (5):** Drata, Vanta, Secureframe, Sprinto, Thoropass
**Operational tools (10):** AWS/Azure/GCP, GitHub/GitLab, Google/Microsoft 365, Jira/Confluence, Linear, Notion, Okta/Auth0/Entra, OneTrust, Slack, Strike Graph

---

## Per-Regulation Phases

Each phase produces the content files for one regulation. Phases are ordered by `site.json` order value to match the hub's display sequence.

---

### Phase 011-A: CCPA / CPRA (cppa)

**Regulation:** California Consumer Privacy Act + California Privacy Rights Act
**Category:** privacy | **Order:** 1
**Key regulatory text:** Cal. Civ. Code §§ 1798.100–1798.199.100

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| A.1 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create `github/cppa/src/content/config.ts` — identical schema to SOC 2 (controlSchema, advisorySchema, serviceSchema, toolSchema) |
| A.2 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create controls collection (`github/cppa/src/content/controls/`) — 10 files |
| A.3 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create advisory collection (`github/cppa/src/content/advisory/`) — 7 files |
| A.4 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create services collection (`github/cppa/src/content/services/`) — 4 files |
| A.5 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create tools collection (`github/cppa/src/content/tools/`) — 15 files |

<details>
<summary>Phase 011-A Context — CCPA/CPRA Control Domains</summary>

**Controls (10 files):**

| File | Domain | Description | Key Requirements |
|------|--------|-------------|------------------|
| `data-inventory-mapping.md` | Data Inventory & Mapping | Map personal information categories, sources, purposes, and sharing. | PI category inventory; data flow diagrams; purpose-of-use documentation; third-party sharing records |
| `privacy-notice-disclosure.md` | Privacy Notice & Disclosure | At-or-before-collection notice and comprehensive privacy policy. | Notice at collection (§1798.100(b)); privacy policy with 12 required disclosures; "Do Not Sell/Share" link |
| `consumer-rights-access-deletion.md` | Consumer Rights — Access & Deletion | Respond to verified consumer requests to know, access, and delete. | 45-day response window; identity verification; two-step deletion confirmation; 12-month lookback |
| `opt-out-do-not-sell.md` | Opt-Out & Do Not Sell/Share | Honor opt-out of sale, sharing, and cross-context behavioral advertising. | "Do Not Sell or Share" link; Global Privacy Control (GPC) recognition; opt-out preference signals |
| `data-minimization-retention.md` | Data Minimization & Retention | Collect and retain only PI reasonably necessary for disclosed purposes. | Purpose limitation; retention schedules; disposal procedures; proportionality review |
| `sensitive-personal-information.md` | Sensitive Personal Information | Additional protections for SPI categories (SSN, financial, biometric, precise geolocation, etc.). | Right to limit use/disclosure of SPI; separate notice for SPI collection; purpose restrictions |
| `vendor-service-provider.md` | Vendor & Service Provider Agreements | Contractual restrictions on service providers, contractors, and third parties. | Written contracts with PI use limitations; due diligence assessments; subcontractor flow-down |
| `data-security-safeguards.md` | Data Security Safeguards | Reasonable security procedures to protect PI (referenced via private right of action). | Risk-appropriate security measures; breach notification (§1798.82); encryption for covered data |
| `children-minor-data.md` | Children & Minor Data | Additional consent requirements for consumers under 16. | Opt-in consent for sale/sharing of minors' data; parental consent under 13; age verification |
| `employee-applicant-data.md` | Employee & Applicant Data | CPRA extension of rights to employee, job applicant, and B2B contact PI. | Workforce PI notice; employee rights (access, delete, correct); HR data retention schedules |

**Criteria values:** All controls use `criteria: ["Privacy"]`

**Evidence examples pattern:**
Each control should have 2–4 evidence examples with realistic artifacts, owners (Privacy/Legal, Engineering, HR, IT), and frequencies (Annually, Quarterly, On request, On change).

</details>

---

### Phase 011-B: GDPR (gdpr)

**Regulation:** General Data Protection Regulation (EU) 2016/679
**Category:** privacy | **Order:** 2
**Key regulatory text:** GDPR Articles 1–99 + Recitals

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| B.1 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create `github/gdpr/src/content/config.ts` |
| B.2 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create controls collection (`github/gdpr/src/content/controls/`) — 12 files |
| B.3 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create advisory collection (`github/gdpr/src/content/advisory/`) — 7 files |
| B.4 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create services collection (`github/gdpr/src/content/services/`) — 4 files |
| B.5 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create tools collection (`github/gdpr/src/content/tools/`) — 15 files |

<details>
<summary>Phase 011-B Context — GDPR Control Domains</summary>

**Controls (12 files):**

| File | Domain | Key GDPR Articles |
|------|--------|-------------------|
| `lawful-basis.md` | Lawful Basis for Processing | Art. 6 (lawful basis), Art. 9 (special categories) |
| `data-subject-rights.md` | Data Subject Rights | Art. 15–22 (access, rectification, erasure, portability, restriction, objection) |
| `consent-management.md` | Consent Management | Art. 7 (conditions for consent), Art. 8 (children's consent) |
| `records-of-processing.md` | Records of Processing Activities (ROPA) | Art. 30 |
| `data-protection-impact.md` | Data Protection Impact Assessment (DPIA) | Art. 35–36 |
| `data-protection-officer.md` | Data Protection Officer (DPO) | Art. 37–39 |
| `international-transfers.md` | International Data Transfers | Art. 44–49 (SCCs, adequacy, BCRs) |
| `breach-notification.md` | Data Breach Notification | Art. 33 (authority, 72 hrs), Art. 34 (data subject) |
| `privacy-by-design.md` | Privacy by Design & Default | Art. 25 |
| `processor-agreements.md` | Processor Agreements (Art. 28) | Art. 28 (processor contracts), Art. 29 |
| `data-minimization-storage.md` | Data Minimization & Storage Limitation | Art. 5(1)(c) minimization, Art. 5(1)(e) storage limitation |
| `accountability-governance.md` | Accountability & Governance | Art. 5(2) (accountability), Art. 24 (controller responsibility) |

**Criteria values:** All controls use `criteria: ["Privacy"]`

</details>

---

### Phase 011-C: COPPA (coppa)

**Regulation:** Children's Online Privacy Protection Act (15 U.S.C. §§ 6501–6506) + FTC COPPA Rule (16 CFR Part 312)
**Category:** privacy | **Order:** 3
**Key regulatory text:** 16 CFR § 312.1–312.13

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| C.1 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create `github/coppa/src/content/config.ts` |
| C.2 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create controls collection (`github/coppa/src/content/controls/`) — 8 files |
| C.3 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create advisory collection (`github/coppa/src/content/advisory/`) — 7 files |
| C.4 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create services collection (`github/coppa/src/content/services/`) — 4 files |
| C.5 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create tools collection (`github/coppa/src/content/tools/`) — 15 files |

<details>
<summary>Phase 011-C Context — COPPA Control Domains</summary>

**Controls (8 files):**

| File | Domain | Key Rule Sections |
|------|--------|-------------------|
| `verifiable-parental-consent.md` | Verifiable Parental Consent | § 312.5 (consent mechanisms, exceptions) |
| `privacy-notice.md` | Privacy Notice Requirements | § 312.4 (content, placement, direct notice to parents) |
| `data-collection-limits.md` | Data Collection Limitations | § 312.7 (prohibition on conditioning participation) |
| `third-party-vendor.md` | Third-Party & Vendor Controls | § 312.8 (operator liability for third-party collection) |
| `data-retention-deletion.md` | Data Retention & Deletion | § 312.10 (retention limits, parental deletion rights) |
| `safe-harbor.md` | Safe Harbor Programs | § 312.11 (FTC-approved self-regulatory programs) |
| `age-screening.md` | Age Screening & Gating | § 312.2 (actual knowledge, directed-to-children determination) |
| `school-teacher-consent.md` | School & Teacher Consent | § 312.5(c)(4) (school-authorized educational context) |

**Criteria values:** All controls use `criteria: ["Privacy"]`

</details>

---

### Phase 011-D: FTC Safeguards Rule (ftc-safeguards)

**Regulation:** Standards for Safeguarding Customer Information (16 CFR Part 314)
**Category:** security | **Order:** 4
**Key regulatory text:** 16 CFR § 314.1–314.6 (amended 2023)

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| D.1 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create `github/ftc-safeguards/src/content/config.ts` |
| D.2 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create controls collection (`github/ftc-safeguards/src/content/controls/`) — 11 files |
| D.3 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create advisory collection (`github/ftc-safeguards/src/content/advisory/`) — 7 files |
| D.4 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create services collection (`github/ftc-safeguards/src/content/services/`) — 4 files |
| D.5 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create tools collection (`github/ftc-safeguards/src/content/tools/`) — 15 files |

<details>
<summary>Phase 011-D Context — FTC Safeguards Control Domains</summary>

**Controls (11 files):**

| File | Domain | Key Rule Sections |
|------|--------|-------------------|
| `qualified-individual.md` | Qualified Individual | § 314.4(a) — designated responsible person |
| `risk-assessment.md` | Risk Assessment | § 314.4(b) — written risk assessment with criteria |
| `access-controls.md` | Access Controls | § 314.4(c)(1) — technical and administrative access limits |
| `data-inventory-classification.md` | Data Inventory & Classification | § 314.4(c)(2) — identify and classify customer information |
| `encryption.md` | Encryption | § 314.4(c)(3) — in transit and at rest |
| `secure-development.md` | Secure Development | § 314.4(c)(4) — application security practices |
| `multi-factor-authentication.md` | Multi-Factor Authentication | § 314.4(c)(5) — MFA for system access |
| `disposal-procedures.md` | Disposal Procedures | § 314.4(c)(6) — secure destruction of customer information |
| `change-management.md` | Change Management | § 314.4(c)(7) — evaluate security impact of changes |
| `incident-response.md` | Incident Response | § 314.4(h) — written incident response plan |
| `vendor-oversight.md` | Vendor & Service Provider Oversight | § 314.4(f) — vendor selection and contract requirements |

**Criteria values:** All controls use `criteria: ["Security"]`

</details>

---

### Phase 011-E: HIPAA Security Rule (hipaa)

**Regulation:** Health Insurance Portability and Accountability Act Security Rule (45 CFR Part 160, Subparts A & C of Part 164)
**Category:** security | **Order:** 5
**Key regulatory text:** 45 CFR §§ 164.302–164.318

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| E.1 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create `github/hipaa/src/content/config.ts` |
| E.2 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create controls collection (`github/hipaa/src/content/controls/`) — 10 files |
| E.3 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create advisory collection (`github/hipaa/src/content/advisory/`) — 7 files |
| E.4 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create services collection (`github/hipaa/src/content/services/`) — 4 files |
| E.5 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create tools collection (`github/hipaa/src/content/tools/`) — 15 files |

<details>
<summary>Phase 011-E Context — HIPAA Security Rule Control Domains</summary>

**Controls (10 files):**

| File | Domain | Key CFR Sections |
|------|--------|------------------|
| `risk-analysis-management.md` | Risk Analysis & Management | § 164.308(a)(1) — required risk analysis and risk management |
| `workforce-security.md` | Workforce Security & Training | § 164.308(a)(3–4) — authorization, clearance, training |
| `access-management.md` | Access Management | § 164.312(a) — unique user ID, emergency access, auto-logoff |
| `audit-controls.md` | Audit Controls & Logging | § 164.312(b) — hardware/software/procedural audit mechanisms |
| `integrity-controls.md` | Integrity Controls | § 164.312(c–d) — ePHI integrity, authentication mechanisms |
| `transmission-security.md` | Transmission Security | § 164.312(e) — encryption and integrity for data in transit |
| `physical-safeguards.md` | Physical Safeguards | § 164.310(a–d) — facility access, workstation, device/media controls |
| `contingency-planning.md` | Contingency Planning | § 164.308(a)(7) — backup, disaster recovery, emergency mode |
| `business-associate.md` | Business Associate Agreements | § 164.308(b) — BA contracts and satisfactory assurances |
| `security-incident.md` | Security Incident Procedures | § 164.308(a)(6) — incident identification, response, reporting |

**Criteria values:** All controls use `criteria: ["Security"]`

**HIPAA-specific note:** Controls distinguish between Required (R) and Addressable (A) implementation specifications. The `requirements` array should indicate (R) or (A) for each requirement per the regulatory text.

</details>

---

### Phase 011-F: PCI DSS v4.0.1 (pci-dss)

**Regulation:** Payment Card Industry Data Security Standard v4.0.1
**Category:** security | **Order:** 6
**Key regulatory text:** PCI DSS v4.0.1 Requirements 1–12

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| F.1 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create `github/pci-dss/src/content/config.ts` |
| F.2 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create controls collection (`github/pci-dss/src/content/controls/`) — 12 files |
| F.3 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create advisory collection (`github/pci-dss/src/content/advisory/`) — 7 files |
| F.4 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create services collection (`github/pci-dss/src/content/services/`) — 4 files |
| F.5 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create tools collection (`github/pci-dss/src/content/tools/`) — 15 files |

<details>
<summary>Phase 011-F Context — PCI DSS Control Domains</summary>

**Controls (12 files):**

PCI DSS has 12 principal requirements. Each maps directly to one control file:

| File | Domain | PCI DSS Requirement |
|------|--------|---------------------|
| `network-security.md` | Network Security Controls | Req 1 — Install and maintain network security controls |
| `secure-configuration.md` | Secure Configuration | Req 2 — Apply secure configurations to all system components |
| `account-data-protection.md` | Account Data Protection | Req 3 — Protect stored account data |
| `strong-cryptography.md` | Strong Cryptography for Transmission | Req 4 — Protect cardholder data with strong cryptography during transmission |
| `malware-protection.md` | Malware Protection | Req 5 — Protect all systems and networks from malicious software |
| `secure-development.md` | Secure Systems & Software Development | Req 6 — Develop and maintain secure systems and software |
| `access-restriction.md` | Access Restriction (Need-to-Know) | Req 7 — Restrict access to system components and cardholder data by business need-to-know |
| `user-identification.md` | User Identification & Authentication | Req 8 — Identify users and authenticate access to system components |
| `physical-access.md` | Physical Access Restriction | Req 9 — Restrict physical access to cardholder data |
| `logging-monitoring.md` | Logging & Monitoring | Req 10 — Log and monitor all access to system components and cardholder data |
| `vulnerability-testing.md` | Vulnerability Testing | Req 11 — Test security of systems and networks regularly |
| `security-policy.md` | Information Security Policy | Req 12 — Support information security with organizational policies and programs |

**Criteria values:** All controls use `criteria: ["Security"]`

</details>

---

### Phase 011-G: NY SHIELD Act (ny-shield)

**Regulation:** New York Stop Hacks and Improve Electronic Data Security Act (N.Y. Gen. Bus. Law § 899-aa, -bb)
**Category:** security | **Order:** 7
**Key regulatory text:** N.Y. GBL §§ 899-aa, 899-bb

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| G.1 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create `github/ny-shield/src/content/config.ts` |
| G.2 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create controls collection (`github/ny-shield/src/content/controls/`) — 8 files |
| G.3 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create advisory collection (`github/ny-shield/src/content/advisory/`) — 7 files |
| G.4 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create services collection (`github/ny-shield/src/content/services/`) — 4 files |
| G.5 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create tools collection (`github/ny-shield/src/content/tools/`) — 15 files |

<details>
<summary>Phase 011-G Context — NY SHIELD Control Domains</summary>

**Controls (8 files):**

| File | Domain | Description |
|------|--------|-------------|
| `administrative-safeguards.md` | Administrative Safeguards | Designate coordinator, risk assessment, employee training, vendor selection |
| `technical-safeguards.md` | Technical Safeguards | Network monitoring, system vulnerability assessment, intrusion prevention |
| `physical-safeguards.md` | Physical Safeguards | Detect/prevent/respond to intrusions, protect against unauthorized access to/use of private information during/after collection, transport, destruction |
| `breach-notification.md` | Data Breach Notification | Expanded breach notification (§ 899-aa) — timing, content, AG/DFS notification |
| `private-data-scope.md` | Private Data Definition & Scope | Expanded definition of "private information" including biometrics, email+password, account+security question |
| `risk-assessment.md` | Risk Assessment | Identify reasonably foreseeable internal and external risks |
| `employee-training.md` | Employee Training & Awareness | Security awareness training for all employees handling private information |
| `disposal-practices.md` | Disposal Practices | Reasonable steps to dispose of private information within a reasonable time |

**Criteria values:** All controls use `criteria: ["Security"]`

</details>

---

### Phase 011-H: State Privacy Law Patchwork (state-privacy)

**Regulation:** Multi-state privacy laws (Virginia VCDPA, Colorado CPA, Connecticut CTDPA, Texas TDPSA, Oregon OCPA, etc.)
**Category:** privacy | **Order:** 8
**Key regulatory text:** Multiple state statutes — see per-control references

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| H.1 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create `github/state-privacy/src/content/config.ts` |
| H.2 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create controls collection (`github/state-privacy/src/content/controls/`) — 9 files |
| H.3 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create advisory collection (`github/state-privacy/src/content/advisory/`) — 7 files |
| H.4 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create services collection (`github/state-privacy/src/content/services/`) — 4 files |
| H.5 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create tools collection (`github/state-privacy/src/content/tools/`) — 15 files |

<details>
<summary>Phase 011-H Context — State Privacy Control Domains</summary>

**Controls (9 files):**

| File | Domain | Description |
|------|--------|-------------|
| `consumer-rights-mapping.md` | Consumer Rights Mapping | Cross-state comparison of access, deletion, correction, portability, opt-out rights by state |
| `data-processing-agreements.md` | Data Processing Agreements | Controller-processor contracts with required provisions per state |
| `privacy-impact-assessments.md` | Privacy Impact Assessments | States requiring DPIAs (Virginia, Colorado, Connecticut, etc.) — triggers and content requirements |
| `universal-opt-out.md` | Universal Opt-Out Mechanisms | Global Privacy Control, browser signals, and state-specific opt-out signal requirements |
| `sensitive-data-categories.md` | Sensitive Data Categories | Cross-state comparison of sensitive data definitions and heightened consent requirements |
| `data-minimization-purpose.md` | Data Minimization & Purpose Limitation | Purpose limitation provisions across states — variations in strictness |
| `children-teen-protections.md` | Children & Teen Protections | State-specific age thresholds (13, 16, 18) and consent requirements beyond COPPA |
| `cure-period-enforcement.md` | Cure Period & Enforcement | Attorney general enforcement, cure period lengths (30–60 days), and private right of action status by state |
| `state-ag-notification.md` | State AG Notification & Registration | States requiring data broker registration or AG notification for processors |

**Criteria values:** All controls use `criteria: ["Privacy"]`

**Note:** This site is uniquely structured as a cross-state comparison rather than a single-statute analysis. Control body text should include comparison tables where applicable.

</details>

---

### Phase 011-I: SEC Cybersecurity Disclosure (sec-cyber)

**Regulation:** SEC Final Rule on Cybersecurity Risk Management, Strategy, Governance, and Incident Disclosure
**Category:** governance | **Order:** 9
**Key regulatory text:** 17 CFR §§ 229.106, 249.220f (Form 8-K Item 1.05, 10-K Item 1C)

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| I.1 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create `github/sec-cyber/src/content/config.ts` |
| I.2 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create controls collection (`github/sec-cyber/src/content/controls/`) — 8 files |
| I.3 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create advisory collection (`github/sec-cyber/src/content/advisory/`) — 7 files |
| I.4 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create services collection (`github/sec-cyber/src/content/services/`) — 4 files |
| I.5 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create tools collection (`github/sec-cyber/src/content/tools/`) — 15 files |

<details>
<summary>Phase 011-I Context — SEC Cybersecurity Control Domains</summary>

**Controls (8 files):**

| File | Domain | Key Rule Provision |
|------|--------|-------------------|
| `material-incident-determination.md` | Material Incident Determination | Item 1.05 — materiality analysis framework for cyber incidents |
| `8k-incident-disclosure.md` | 8-K Incident Disclosure (4 Business Days) | Form 8-K Item 1.05 — nature, scope, timing, and material impact |
| `annual-10k-disclosure.md` | Annual 10-K Cybersecurity Disclosure | Item 1C — risk management, strategy, governance description |
| `board-oversight.md` | Board Oversight & Governance | Item 106(c) — board's role in overseeing cybersecurity risk |
| `risk-management-strategy.md` | Risk Management & Strategy | Item 106(b) — processes for assessing, identifying, and managing material risks |
| `third-party-risk.md` | Third-Party Risk Assessment | Item 106(b)(2) — oversight of third-party service providers |
| `incident-response-program.md` | Incident Response Program | Operational readiness to support 4-day materiality determination |
| `cybersecurity-expertise.md` | Cybersecurity Expertise | Item 106(c)(2) — management's role and relevant expertise |

**Criteria values:** All controls use `criteria: ["Governance"]`

</details>

---

### Phase 011-J: AI Governance / NIST AI RMF (ai-governance)

**Regulation:** NIST AI Risk Management Framework (AI RMF 1.0) + emerging AI regulations
**Category:** governance | **Order:** 10
**Key regulatory text:** NIST AI 100-1 (AI RMF 1.0), NIST AI 600-1 (Generative AI profile)

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| J.1 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create `github/ai-governance/src/content/config.ts` |
| J.2 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create controls collection (`github/ai-governance/src/content/controls/`) — 10 files |
| J.3 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create advisory collection (`github/ai-governance/src/content/advisory/`) — 7 files |
| J.4 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create services collection (`github/ai-governance/src/content/services/`) — 4 files |
| J.5 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create tools collection (`github/ai-governance/src/content/tools/`) — 15 files |

<details>
<summary>Phase 011-J Context — AI Governance Control Domains</summary>

**Controls (10 files):**

| File | Domain | AI RMF Function |
|------|--------|-----------------|
| `ai-system-inventory.md` | AI System Inventory | GOVERN — catalog all AI systems with risk tiers |
| `risk-categorization.md` | Risk Categorization & Tiering | GOVERN — classify AI systems by risk level and impact |
| `impact-assessment.md` | Impact Assessment & Context Analysis | MAP — understand context, stakeholders, and potential impacts |
| `bias-fairness-testing.md` | Bias & Fairness Testing | MEASURE — measure bias across demographic groups, document test results |
| `performance-monitoring.md` | Performance & Reliability Monitoring | MEASURE — accuracy, robustness, drift detection in production |
| `transparency-explainability.md` | Transparency & Explainability | MANAGE — model cards, explanation methods, disclosure practices |
| `human-oversight.md` | Human Oversight & Accountability | GOVERN — escalation paths, override mechanisms, decision authority |
| `data-governance-ai.md` | Data Governance for AI | MAP — training data quality, provenance, representativeness, consent |
| `model-lifecycle.md` | Model Lifecycle Management | MANAGE — version control, validation, deployment, retirement |
| `third-party-ai-risk.md` | Third-Party AI Risk | GOVERN — vendor AI model assessment, supply chain risk |

**Criteria values:** All controls use `criteria: ["Governance"]`

**AI-specific note:** The advisory modules for this site have the strongest overlap with their source material since the advisory collection *is* AI governance. The body text should differentiate: controls are the RMF-mapped operational requirements; advisory modules are the "add-on" consulting perspective.

</details>

---

### Phase 011-K: EU DORA (eu-dora)

**Regulation:** Digital Operational Resilience Act (EU) 2022/2554
**Category:** governance | **Order:** 11
**Key regulatory text:** DORA Articles 1–64, RTS/ITS delegated acts

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| K.1 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create `github/eu-dora/src/content/config.ts` |
| K.2 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create controls collection (`github/eu-dora/src/content/controls/`) — 9 files |
| K.3 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create advisory collection (`github/eu-dora/src/content/advisory/`) — 7 files |
| K.4 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create services collection (`github/eu-dora/src/content/services/`) — 4 files |
| K.5 | Completed | 2026-05-23 08:15 PM | 2026-05-23 09:00 PM | Create tools collection (`github/eu-dora/src/content/tools/`) — 15 files |

<details>
<summary>Phase 011-K Context — EU DORA Control Domains</summary>

**Controls (9 files):**

| File | Domain | DORA Chapter/Articles |
|------|--------|----------------------|
| `ict-risk-management.md` | ICT Risk Management Framework | Ch. II, Art. 5–16 — governance, identification, protection, detection, response, recovery |
| `ict-incident-reporting.md` | ICT Incident Classification & Reporting | Ch. III, Art. 17–23 — classification, notification to authorities, major incident criteria |
| `resilience-testing.md` | Digital Operational Resilience Testing | Ch. IV, Art. 24–27 — basic testing, TLPT (threat-led penetration testing) |
| `third-party-ict-risk.md` | Third-Party ICT Risk Management | Ch. V, Art. 28–44 — oversight framework, contractual provisions, concentration risk |
| `information-sharing.md` | Information Sharing Arrangements | Ch. VI, Art. 45 — threat intelligence sharing agreements |
| `ict-business-continuity.md` | ICT Business Continuity | Art. 11–12 — BCP, response and recovery plans, crisis communication |
| `ict-change-management.md` | ICT Change Management | Art. 9(4)(e) — change and patch management policies |
| `ict-asset-management.md` | ICT Asset Management | Art. 8(4) — inventory of ICT assets and information assets |
| `governance-organization.md` | Governance & Organization | Art. 5 — management body responsibility, ICT risk management function |

**Criteria values:** All controls use `criteria: ["Governance"]`

**DORA-specific note:** DORA applies to "financial entities" broadly (banks, insurers, investment firms, payment providers, crypto-asset service providers) AND to their "critical ICT third-party service providers." Content should address both audiences.

</details>

---

## File Count Summary

| Phase | Regulation | Controls | Advisory | Services | Tools | config.ts | Total |
|-------|-----------|----------|----------|----------|-------|-----------|-------|
| 011-A | CCPA/CPRA | 10 | 7 | 4 | 15 | 1 | 37 |
| 011-B | GDPR | 12 | 7 | 4 | 15 | 1 | 39 |
| 011-C | COPPA | 8 | 7 | 4 | 15 | 1 | 35 |
| 011-D | FTC Safeguards | 11 | 7 | 4 | 15 | 1 | 38 |
| 011-E | HIPAA | 10 | 7 | 4 | 15 | 1 | 37 |
| 011-F | PCI DSS | 12 | 7 | 4 | 15 | 1 | 39 |
| 011-G | NY SHIELD | 8 | 7 | 4 | 15 | 1 | 35 |
| 011-H | State Privacy | 9 | 7 | 4 | 15 | 1 | 36 |
| 011-I | SEC Cyber | 8 | 7 | 4 | 15 | 1 | 35 |
| 011-J | AI Governance | 10 | 7 | 4 | 15 | 1 | 37 |
| 011-K | EU DORA | 9 | 7 | 4 | 15 | 1 | 36 |
| | **Totals** | **107** | **77** | **44** | **165** | **11** | **404** |

## Execution Notes

1. **Content accuracy:** Control domains, requirements, and evidence examples must reflect the actual regulatory text. Use correct section numbers, defined terms, and enforcement thresholds. Do not fabricate regulatory provisions.

2. **Parallelization opportunity:** All 11 phases are independent — they can execute in any order or in parallel. No phase depends on another.

3. **Tools reuse:** The 15 tool files share structure across all sites. The `name` and `category` are identical; only `good_fit` and `cautions` change per regulation. A template-then-adapt approach is efficient.

4. **Advisory reuse:** The 7 advisory files share the same `module_name` values across all sites. The `why_credible` rationale and `additions` list are regulation-specific but the structure is consistent.

5. **Services reuse:** The 4 service files are structurally identical across all sites with regulation-specific language in deliverables and body text.

6. **This plan covers content only.** Site scaffolding (package.json, astro.config.mjs, tsconfig.json, components, pages, styles, deploy workflows) will be handled in a follow-on phase that clones the SOC 2 site structure and swaps in the content.

7. **Commit cadence:** One commit per regulation (per phase). Each commit should be independently valid — all files for that regulation's content collections in a single commit.
