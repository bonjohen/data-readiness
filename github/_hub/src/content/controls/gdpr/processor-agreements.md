---
domain: "Processor Agreements"
order: 10
description: "Establish and maintain binding agreements with all processors that meet Art. 28(3) requirements, including due diligence, sub-processor controls, and audit rights."
requirements:
  - "Written contract with all mandatory Art. 28(3) provisions for every processor relationship"
  - "Processor due diligence assessing technical and organizational measures before engagement"
  - "Sub-processor authorization regime with prior specific or general written authorization and notification (Art. 28(2))"
  - "Contractual audit rights enabling controller verification of processor compliance"
  - "Data return or deletion obligations upon termination of processing services (Art. 28(3)(g))"
evidence_examples:
  - artifact: "Processor agreement register listing all processors with contract status, renewal dates, and Art. 28(3) clause coverage"
    owner: "Vendor Management Lead"
    frequency: "Quarterly"
  - artifact: "Due diligence assessment records including security questionnaires and certification reviews"
    owner: "Information Security Manager"
    frequency: "Per new processor and annually"
  - artifact: "Sub-processor notification log documenting approvals and objection handling"
    owner: "Privacy Operations Manager"
    frequency: "Ongoing"
  - artifact: "Processor audit reports or SOC 2 / ISO 27001 certification reviews"
    owner: "Internal Audit Manager"
    frequency: "Annually"
criteria:
  - "Privacy"
---

Article 28 requires controllers to use only processors that provide sufficient guarantees to implement appropriate technical and organizational measures to meet GDPR requirements and protect data subject rights. The processing must be governed by a binding contract that sets out the subject matter and duration of processing, the nature and purpose of processing, the type of personal data and categories of data subjects, and the controller's obligations and rights. The contract must include specific clauses covering processor obligations to process data only on documented instructions, ensure confidentiality, implement security measures, assist with DSR fulfillment, assist with breach notification, and return or delete data upon contract termination.

Sub-processor management is a critical dimension of the processor relationship. Under Art. 28(2), processors cannot engage sub-processors without the controller's prior specific or general written authorization. When general authorization is given, the processor must inform the controller of any intended changes to sub-processors, giving the controller the opportunity to object. Each sub-processor must be bound by the same data protection obligations as the primary processor, and the primary processor remains fully liable if a sub-processor fails to meet its obligations. Organizations should maintain a sub-processor register and establish a notification and objection workflow.

Due diligence does not end at contract signing. Controllers should verify processor compliance through periodic audits, certification reviews (SOC 2 Type II, ISO 27001, or equivalent), and monitoring of security incident reports. The audit right should be exercised proportionately — many organizations accept third-party audit reports as an alternative to conducting audits themselves, which is permitted under Art. 28(3)(h). Processor agreements should also address cross-border transfers, breach notification timelines, and the practical mechanics of data subject request assistance to avoid gaps between contractual commitments and operational reality.
