---
domain: "Network Security Controls"
order: 1
description: "Firewalls, network segmentation, and traffic restrictions protecting the cardholder data environment."
requirements:
  - "Network security controls (firewalls/NSCs) installed between the CDE and all untrusted networks"
  - "NSC configurations documented, reviewed, and approved at least every six months"
  - "Inbound and outbound traffic restricted to only that which is necessary for cardholder data processing"
  - "Network segmentation validated through penetration testing at least annually and after significant changes"
evidence_examples:
  - artifact: "NSC rule sets with documented business justification for each permitted connection"
    owner: "Network admin"
    frequency: "Semi-annually"
  - artifact: "Current network diagrams showing all CDE connections and segmentation boundaries"
    owner: "Security team"
    frequency: "Annually and on change"
  - artifact: "Penetration test reports validating segmentation effectiveness"
    owner: "QSA"
    frequency: "Annually and after significant network changes"
criteria:
  - "Security"
---

Network security controls form the first line of defense for the cardholder data environment under PCI DSS v4.0.1 Requirement 1. Every connection between the CDE and untrusted networks must pass through a properly configured firewall or network security control, with each rule documented and justified by a legitimate business need. Organizations must maintain accurate network diagrams that reflect the current topology, including all data flows involving cardholder data.

Segmentation is not mandated by PCI DSS but dramatically reduces the scope of the assessment. When segmentation is used, it must be validated through penetration testing to confirm that out-of-scope systems truly cannot reach the CDE. The most common audit finding in this area is stale firewall rules — rules added for a temporary project that were never removed. Semi-annual reviews of all NSC configurations catch this drift before the QSA does.

PCI DSS v4.0.1 introduces a customized approach option for Requirement 1, allowing organizations to meet the control objective through alternative means if they can demonstrate equivalent or better security. Regardless of approach, the principle is the same: know every path into and out of the CDE, and block everything that is not explicitly required.
