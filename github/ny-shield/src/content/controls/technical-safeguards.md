---
domain: "Technical Safeguards"
order: 2
description: "Deploy technology-based protections to assess risks in systems and data flows, detect threats, and verify control effectiveness as required by N.Y. GBL § 899-bb(2)(b)(ii)."
requirements:
  - "Assess risks in network and software design (§ 899-bb(2)(b)(ii)(A))"
  - "Assess risks in information processing, transmission, and storage (§ 899-bb(2)(b)(ii)(B))"
  - "Detect, prevent, and respond to attacks or system failures (§ 899-bb(2)(b)(ii)(C))"
  - "Regularly test and monitor the effectiveness of key controls, systems, and procedures (§ 899-bb(2)(b)(ii)(D))"
evidence_examples:
  - artifact: "Network architecture diagrams with annotated security control placement and data flow paths"
    owner: "Network Security Engineer"
    frequency: "Annually and after significant changes"
  - artifact: "Vulnerability scan and penetration test reports with remediation tracking"
    owner: "Information Security Manager"
    frequency: "Quarterly scans, annual penetration tests"
  - artifact: "Intrusion detection/prevention system (IDS/IPS) alert logs and incident response records"
    owner: "Security Operations Center Lead"
    frequency: "Ongoing with monthly review"
  - artifact: "Encryption implementation records for data in transit and at rest"
    owner: "Systems Administrator"
    frequency: "Semi-annually reviewed"
criteria:
  - "Security"
---

The technical safeguards under § 899-bb(2)(b)(ii) address the technology layer of a reasonable security program. The statute requires organizations to evaluate risks inherent in their network architecture and software design — including how systems are interconnected, where private information resides, and what pathways exist for authorized and unauthorized access. This assessment extends to the full lifecycle of information: how it is processed by applications, transmitted across networks (including to third parties and cloud services), and stored in databases, file systems, and backups. Organizations must document these data flows and ensure that appropriate protections exist at each stage.

Detection and response capabilities form the active defense component of the technical safeguards. The statute requires organizations to detect, prevent, and respond to attacks or system failures — language that encompasses intrusion detection systems, security information and event management (SIEM) platforms, endpoint detection and response (EDR) tools, and incident response procedures. The emphasis on system failures alongside attacks recognizes that data exposure can result from technical malfunctions, misconfigurations, or software bugs, not just malicious actors.

Regular testing and monitoring of key controls is the verification mechanism that ensures technical safeguards remain effective over time. This includes vulnerability scanning, penetration testing, configuration audits, log reviews, and control effectiveness assessments. The statute's use of "regularly" implies an ongoing cadence rather than a one-time effort, and the scope — "key controls, systems, and procedures" — indicates that testing must cover the controls most critical to protecting private information, not just a representative sample.
