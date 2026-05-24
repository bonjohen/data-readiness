---
domain: "Data Subject Rights"
order: 2
description: "Implement and operate processes to fulfill data subject rights under Art. 15–22, including access, rectification, erasure, restriction, portability, and objection."
requirements:
  - "Verified identity before responding to any data subject request"
  - "30-day response timeline with documented extensions up to 90 days for complex requests"
  - "Automated or semi-automated process for access and portability requests"
  - "Erasure cascade to all processors and sub-processors"
  - "Restriction and objection handling with processing suspension capability"
evidence_examples:
  - artifact: "DSR request log with timestamps, request type, response dates, and outcomes"
    owner: "Privacy Operations Manager"
    frequency: "Ongoing"
  - artifact: "Standardized response templates for each right (access, erasure, portability, etc.)"
    owner: "Privacy Counsel"
    frequency: "Annually reviewed"
  - artifact: "Processor erasure confirmation receipts showing cascade completion"
    owner: "Vendor Management Lead"
    frequency: "Per erasure request"
  - artifact: "Identity verification procedure documentation and audit trail"
    owner: "Privacy Operations Manager"
    frequency: "Quarterly"
criteria:
  - "Privacy"
---

The GDPR grants data subjects a suite of rights that organizations must be prepared to fulfill within strict timelines. Articles 15 through 22 cover the right of access, rectification, erasure ("right to be forgotten"), restriction of processing, data portability, objection, and rights related to automated decision-making. Each right has distinct procedural requirements, and organizations need dedicated workflows — not ad hoc responses — to handle them consistently.

The 30-day response window is mandatory, and extensions to 90 days are permitted only when requests are complex or numerous, with the data subject informed of the extension within the original 30 days. Identity verification must be robust enough to prevent unauthorized disclosure but not so burdensome that it discourages legitimate requests. Supervisory authorities have penalized organizations for both over-verification (demanding unnecessary identity documents) and under-verification (releasing data to the wrong person).

Erasure requests present particular operational complexity because Art. 17(2) requires the controller to inform all processors to whom the data was disclosed. This creates a cascade obligation that demands a current, accurate register of all data recipients. Organizations that cannot trace where personal data has been sent will struggle to demonstrate compliance with erasure obligations — making processor mapping and data flow inventories prerequisites for effective DSR handling.
