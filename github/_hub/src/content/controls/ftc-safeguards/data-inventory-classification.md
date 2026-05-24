---
domain: "Data Inventory & Classification"
order: 4
description: "Maintain a complete inventory of all systems and locations where customer information is stored, processed, or transmitted, with a classification scheme that drives proportionate safeguards."
requirements:
  - "Maintain an inventory of all systems, applications, and locations that store, process, or transmit customer information (§ 314.4(c)(2))"
  - "Implement a data classification scheme that categorizes customer information by sensitivity"
  - "Document data flows showing how customer information moves between systems, vendors, and storage"
  - "Identify all storage locations including cloud services, backups, and employee devices"
evidence_examples:
  - artifact: "Data inventory spreadsheet listing all systems, data types, storage locations, and responsible owners"
    owner: "IT Admin"
    frequency: "Quarterly"
  - artifact: "Data classification policy defining sensitivity tiers and corresponding handling requirements"
    owner: "Compliance Officer"
    frequency: "Annually"
  - artifact: "Data flow diagrams showing customer information movement across systems, networks, and third parties"
    owner: "Security Lead"
    frequency: "Annually"
criteria:
  - "Security"
---

You cannot protect what you do not know exists. Section 314.4(c)(2) requires financial institutions to know exactly where customer information lives — every database, file share, cloud service, backup system, employee laptop, and third-party processor that touches it. The data inventory must be comprehensive and current, covering not just production systems but also development and staging environments, disaster recovery sites, and any shadow IT systems that may have accumulated customer data without formal authorization.

A data classification scheme assigns sensitivity levels to different categories of customer information and prescribes handling requirements for each tier. Social Security numbers, account numbers, and financial records demand stronger protections than general contact information. The classification scheme should drive decisions about encryption, access controls, retention, and disposal — creating a proportionate relationship between the sensitivity of the data and the strength of the safeguards applied. Without classification, institutions tend to either over-protect low-sensitivity data (wasting resources) or under-protect high-sensitivity data (creating regulatory risk).

Data flow documentation closes the visibility gap between static inventory and dynamic operations. Customer information rarely stays in one place — it moves between front-end applications, backend databases, analytics platforms, vendor APIs, and reporting systems. Mapping these flows reveals exposure points that the static inventory alone would miss: unencrypted transit paths, unnecessary data copies, vendor integrations that lack contractual safeguards, and retention practices that keep customer information longer than needed.
