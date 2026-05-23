---
domain: "Secure Configuration"
order: 2
description: "Hardening standards, default credential removal, and function isolation for all system components."
requirements:
  - "Vendor-supplied defaults changed before deploying any system component onto the network"
  - "Hardening standards developed and applied to all system components in the CDE"
  - "Primary functions isolated — one primary function per server where feasible"
  - "System inventory maintained with configuration standards mapped to each component"
evidence_examples:
  - artifact: "Hardening standards documents aligned to CIS benchmarks or equivalent"
    owner: "IT admin"
    frequency: "Annually and on change"
  - artifact: "Configuration audit reports showing compliance with hardening standards"
    owner: "Security team"
    frequency: "Quarterly"
  - artifact: "System component inventory with configuration baseline references"
    owner: "IT admin"
    frequency: "Annually and on change"
criteria:
  - "Security"
---

Requirement 2 of PCI DSS v4.0.1 addresses the risk that systems deployed with vendor defaults provide attackers with well-known credentials and unnecessary services. Before any system component enters the CDE, all default passwords, SNMP community strings, and unnecessary accounts must be changed or removed. Hardening standards — whether based on CIS benchmarks, vendor guidelines, or internal baselines — must be documented and consistently applied.

Function isolation reduces the attack surface by ensuring that a compromise of one service does not immediately grant access to another. Where virtualization or containerization makes single-function-per-server impractical, compensating controls such as granular access restrictions and enhanced monitoring must be in place. The system inventory is the foundation: you cannot harden what you do not know exists.

A frequent gap is configuration drift over time. Systems hardened at deployment gradually accumulate ad hoc changes — debug services enabled, temporary accounts left active, logging levels reduced. Periodic configuration audits against the documented baseline catch this drift and are a key piece of evidence for the QSA.
