---
domain: "Verifiable Parental Consent"
order: 1
description: "Mechanisms and procedures ensuring verifiable parental consent before collecting, using, or disclosing personal information from children under 13."
requirements:
  - "Obtain verifiable parental consent before collecting PI from children under 13 (16 CFR § 312.5)"
  - "Implement acceptable consent methods: credit card transaction, signed consent form, free-call/video-call verification, knowledge-based Q&A, government ID check (§ 312.5(b))"
  - "Obtain new consent before any material change in PI collection, use, or disclosure practices (§ 312.5(a)(2))"
  - "Allow schools or teachers to provide consent for educational use under the school authorization exception (§ 312.5(c)(4))"
criteria:
  - "Privacy"
evidence_examples:
  - artifact: "Parental consent flow documentation with screenshots of each consent method offered"
    owner: "Product lead"
    frequency: "Annually and on design change"
  - artifact: "Consent transaction log showing method used, timestamp, and parent identifier"
    owner: "Engineering lead"
    frequency: "Continuous (system-generated)"
  - artifact: "Consent method validation test results (e.g., credit card micro-charge, video call recordings)"
    owner: "Compliance lead"
    frequency: "Quarterly"
  - artifact: "Material change notification records sent to previously consenting parents"
    owner: "Legal"
    frequency: "Event-driven"
---

Verifiable parental consent is the cornerstone of COPPA compliance. Before an operator of a child-directed website or online service may collect, use, or disclose personal information from a child under 13, the operator must obtain consent from the child's parent using a method that is reasonably calculated to ensure the person providing consent is actually the child's parent. The FTC Rule at 16 CFR § 312.5(b) enumerates several acceptable methods, including requiring a credit card or other online payment transaction, having the parent mail or fax a signed consent form, using a toll-free number or video conference staffed by trained personnel, verifying identity through knowledge-based authentication, or checking a government-issued ID against a database. The choice of method should match the sensitivity of the information being collected and the risk profile of the service.

Consent is not a one-time gate. When an operator materially changes its collection, use, or disclosure practices, it must send a new direct notice to parents and obtain fresh consent before proceeding under the changed practices. This means organizations need robust change-management processes that flag privacy-impacting product changes and route them through the consent renewal workflow before deployment. Operators should also maintain an auditable log of every consent transaction, including the method used, the timestamp, and sufficient information to link the consent to the specific child account.

The FTC has increasingly scrutinized consent mechanisms that are easily circumvented. Age-gate designs that encourage children to enter a false birthdate, consent flows that allow a child to type in any email address and approve on behalf of a parent, and "consent" checkboxes with no identity verification have all been cited in enforcement actions. Operators should conduct periodic testing of their consent mechanisms to ensure they function as intended and cannot be trivially bypassed.
