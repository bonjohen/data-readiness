---
domain: "Data Minimization & Storage Limitation"
order: 11
description: "Ensure personal data is adequate, relevant, and limited to what is necessary, with defined retention periods and systematic deletion or anonymization."
requirements:
  - "Purpose limitation documentation linking each data element to a specific, explicit, and legitimate purpose (Art. 5(1)(b))"
  - "Adequacy and relevance review verifying that collected data does not exceed what is necessary (Art. 5(1)(c))"
  - "Retention schedules defined per data category with legal basis for each retention period"
  - "Automated deletion or anonymization processes executing retention schedules (Art. 5(1)(e))"
evidence_examples:
  - artifact: "Data retention schedule mapping data categories to retention periods and legal justifications"
    owner: "Data Protection Officer"
    frequency: "Annually"
  - artifact: "Deletion execution logs confirming automated purge of expired data"
    owner: "Database Administrator"
    frequency: "Monthly"
  - artifact: "Data minimization review reports assessing collected fields against stated purposes"
    owner: "Privacy Engineer"
    frequency: "Semi-annually"
  - artifact: "Anonymization validation records confirming irreversibility of anonymized datasets"
    owner: "Data Scientist"
    frequency: "Per anonymization batch"
criteria:
  - "Privacy"
---

The data minimization principle under Art. 5(1)(c) requires that personal data be adequate, relevant, and limited to what is necessary in relation to the purposes for which it is processed. This is not a subjective standard — organizations must be able to justify each data element they collect by reference to a documented purpose. Fields collected "just in case" or "for future use" without a current processing purpose violate this principle. Regular reviews should assess whether each data element remains necessary and whether collection can be reduced without impairing the stated purpose.

Storage limitation under Art. 5(1)(e) complements data minimization by requiring that personal data be kept in identifiable form no longer than necessary. Organizations must define retention periods for each category of personal data, justify those periods by reference to the processing purpose or legal obligations, and implement mechanisms to enforce them. Retention periods should not default to the longest legally permissible period — they should reflect the actual operational need. Where data is kept for archiving in the public interest, scientific or historical research, or statistical purposes, appropriate safeguards (such as pseudonymization) must be applied.

Operationalizing these principles requires both policy and technology. Retention schedules must be translated into automated deletion or anonymization rules applied at the database, file system, and backup levels. Anonymization — rendering data irreversibly non-identifiable — is preferable to deletion in cases where the data has analytical value, but the anonymization must be genuine and validated against re-identification risk. Organizations should document their anonymization methodology and periodically reassess whether advances in re-identification techniques have undermined the effectiveness of their approach.
