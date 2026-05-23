---
domain: "Data Handling"
order: 11
description: "Data classification, customer data disposal, test-data restrictions, and confidentiality agreements."
requirements:
  - "Data classification policy with defined levels"
  - "Documented customer data disposal process"
  - "Restrictions on production data in test environments"
  - "Confidentiality agreements for employees and contractors"
evidence_examples:
  - artifact: "Data classification policy document"
    owner: "Security lead"
    frequency: "Annually reviewed"
  - artifact: "Data disposal request and confirmation record"
    owner: "Ops / Engineering"
    frequency: "Event-driven"
  - artifact: "Signed confidentiality agreements"
    owner: "HR"
    frequency: "Per hire/engagement"
criteria:
  - "Security"
  - "Confidentiality"
---

Data handling controls show auditors how you classify, protect, and dispose of sensitive information throughout its lifecycle. This domain is especially relevant for companies handling customer business data or operating under confidentiality commitments.

A frequent gap is using production customer data in staging or test environments. Auditors expect either synthetic test data or documented controls around any production data used outside production.
