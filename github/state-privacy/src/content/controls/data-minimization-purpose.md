---
domain: "Data Minimization & Purpose Limitation"
order: 6
description: "Ensure personal data collection is limited to what is adequate, relevant, and reasonably necessary for disclosed purposes, with secondary use restricted to compatible purposes across all applicable state jurisdictions."
requirements:
  - "Data collection limited to what is adequate, relevant, and reasonably necessary for the disclosed purpose (all comprehensive privacy states)"
  - "Purpose limitation restricting processing to purposes disclosed in the privacy notice or purposes compatible with disclosed purposes"
  - "Secondary use restrictions prohibiting repurposing personal data for materially different purposes without additional consumer notice and consent"
  - "State-specific variations in strictness documented and operationalized (Colorado and Oregon apply stricter necessity standards)"
  - "Data retention policies aligned with purpose limitation, requiring deletion or de-identification when purpose is fulfilled"
evidence_examples:
  - artifact: "Data collection justification register documenting the necessity rationale for each data element collected"
    owner: "Privacy Program Manager"
    frequency: "Semi-annually"
  - artifact: "Purpose documentation mapping each processing activity to its disclosed purpose and legal basis"
    owner: "Privacy Counsel"
    frequency: "Annually reviewed"
  - artifact: "Data audit report reviewing collection practices against minimization and purpose limitation standards"
    owner: "Privacy Operations Lead"
    frequency: "Annually"
criteria:
  - "Privacy"
---

Data minimization and purpose limitation are foundational principles in every U.S. state comprehensive privacy law, but the stringency of implementation varies. All states require that personal data collection be "adequate, relevant, and reasonably necessary" in relation to the purposes for which the data is processed, as disclosed to the consumer. Virginia (VCDPA s 59.1-574), Colorado (CPA s 6-1-1308), Connecticut (CTDPA s 42-517), Texas (TDPSA s 541.101), and Oregon (OCPA s 4) all include minimization provisions, though the language differs in ways that affect interpretation. Colorado and Oregon apply a comparatively stricter standard, requiring that processing be "relevant and limited to what is reasonably necessary" rather than the broader "adequate, relevant, and reasonably necessary" formulation used by Virginia and others.

| Principle | VA (VCDPA) | CO (CPA) | CT (CTDPA) | TX (TDPSA) | OR (OCPA) |
|-----------|------------|----------|------------|------------|-----------|
| Minimization standard | Adequate, relevant, reasonably necessary | Relevant, limited to reasonably necessary | Adequate, relevant, reasonably necessary | Adequate, relevant, reasonably necessary | Relevant, limited to reasonably necessary |
| Purpose limitation | Disclosed or compatible purposes | Specified, explicit, legitimate purposes | Disclosed or compatible purposes | Disclosed or compatible purposes | Specified, explicit purposes |
| Secondary use consent | Required for incompatible purposes | Required for incompatible purposes | Required for incompatible purposes | Required for incompatible purposes | Required for incompatible purposes |
| Retention limitation | Reasonably necessary | Not longer than reasonably necessary | Reasonably necessary | Reasonably necessary | Not longer than reasonably necessary |

Purpose limitation interacts directly with privacy notices: controllers can only process personal data for purposes they have disclosed to the consumer or for purposes reasonably compatible with those disclosed purposes. "Compatible purpose" analysis requires considering the relationship between the original and proposed purposes, the reasonable expectations of the consumer, the nature of the personal data, and the consequences of the additional processing. This is a facts-and-circumstances test, and organizations should document their compatibility analysis for any secondary use to demonstrate compliance if challenged by an attorney general.

The practical implementation of minimization and purpose limitation requires organizations to maintain a data collection justification register that documents, for each data element collected, the specific purpose it serves, why that data element is necessary for that purpose, and the retention period after which the data will be deleted or de-identified. This register should be reviewed when new features, products, or processing activities are introduced. Organizations that collect data speculatively — "because we might need it later" — will face challenges demonstrating compliance with minimization requirements across all applicable states.
