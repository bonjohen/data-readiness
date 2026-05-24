---
domain: "Asset Inventory"
order: 8
description: "Accurate inventory of systems, data stores, endpoints, and privileged contexts."
requirements:
  - "Maintained inventory of all in-scope systems and applications"
  - "Data store inventory with classification and ownership"
  - "Endpoint inventory for company-managed devices"
  - "Identification of privileged and administrative contexts"
evidence_examples:
  - artifact: "System and application inventory with owners"
    owner: "IT / SRE"
    frequency: "Quarterly or on change"
  - artifact: "Data store inventory with classification"
    owner: "Security lead"
    frequency: "Annually"
  - artifact: "Endpoint management dashboard or export"
    owner: "IT admin"
    frequency: "Quarterly"
criteria:
  - "Security"
---

You cannot protect what you do not know about. Asset inventory provides the foundation for scoping, access management, and vulnerability management. Auditors use your inventory to verify that all in-scope systems are covered by your other controls.

A common gap is maintaining separate, inconsistent lists of systems across different teams. A single authoritative inventory with clear ownership eliminates this problem.
