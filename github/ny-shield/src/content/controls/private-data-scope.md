---
domain: "Private Data Definition & Scope"
order: 5
description: "Identify and inventory all categories of private information held, determine organizational applicability, and document data flows involving New York resident data under N.Y. GBL § 899-aa(1)."
requirements:
  - "Inventory all private information categories held, including the SHIELD Act's expanded definition covering biometric data, email addresses combined with passwords or security questions, and account numbers combined with security or access codes (§ 899-aa(1)(b))"
  - "Determine applicability: the law covers any person or business that owns or licenses computerized data including the private information of a New York resident (§ 899-aa(1)(a))"
  - "Document data flows that cross New York resident private information, including collection points, processing locations, storage systems, and third-party transfers"
  - "Maintain current data inventory reflecting changes to information holdings, systems, and business processes"
evidence_examples:
  - artifact: "Private information inventory mapping all data categories to the statutory definition with system locations"
    owner: "Data Governance Lead"
    frequency: "Semi-annually"
  - artifact: "Data flow diagrams showing collection, processing, storage, and transfer of NY resident private information"
    owner: "Enterprise Architect"
    frequency: "Annually and after significant system changes"
  - artifact: "Applicability assessment documenting organizational scope and jurisdictional analysis"
    owner: "Privacy Counsel"
    frequency: "Annually"
criteria:
  - "Security"
---

The SHIELD Act significantly expanded New York's definition of private information beyond the original 2005 breach notification law. Under § 899-aa(1)(b), private information now includes not only the traditional combination of a name plus Social Security number, driver's license number, or financial account number, but also biometric information used to authenticate identity, email addresses combined with passwords or security questions, and account numbers or credit/debit card numbers combined with any security code, access code, or password that would permit access to a financial account. This expanded definition reflects the modern reality of how personal data is compromised and misused.

Understanding the scope of applicability is essential for compliance. The SHIELD Act applies to any person or business that owns or licenses computerized data that includes the private information of a New York resident — regardless of where the entity is located. This extraterritorial reach means that a company headquartered in another state or country must comply with both the breach notification and reasonable security requirements if it holds data of New York residents. Organizations must conduct a thorough jurisdictional analysis to determine whether they fall within scope, examining their customer base, employee population, and business partner relationships for New York connections.

Data flow documentation translates the statutory definitions into operational knowledge. Organizations need to map where private information enters their systems, how it moves between applications and services, where it is stored, who has access, and when and how it is shared with third parties. This mapping exercise is foundational — without it, the safeguard requirements under § 899-bb cannot be effectively implemented because the organization does not know what it is protecting or where the protection boundaries lie. The inventory should be treated as a living document, updated as business processes, technology infrastructure, and data relationships change.
