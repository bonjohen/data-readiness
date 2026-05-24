---
domain: "Secure Systems & Software Development"
order: 6
description: "Patch management, secure coding practices, WAF deployment, and change control for all custom and third-party software."
requirements:
  - "Security patches for all software components applied within defined risk-based timeframes"
  - "Custom software developed securely following industry standards (OWASP Top 10, SANS CWE Top 25)"
  - "Public-facing web applications protected by WAF or regular vulnerability assessments"
  - "Change control processes enforced for all changes to system components in the CDE"
evidence_examples:
  - artifact: "Patch management records showing installation dates relative to release dates"
    owner: "IT admin"
    frequency: "Monthly"
  - artifact: "Secure coding training completion records for development staff"
    owner: "Security team"
    frequency: "Annually"
  - artifact: "WAF configuration and rule set documentation"
    owner: "Security team"
    frequency: "Semi-annually"
  - artifact: "Change control logs with security impact assessment and approval records"
    owner: "IT admin"
    frequency: "Per change"
criteria:
  - "Security"
---

Requirement 6 covers the entire lifecycle of systems and software in the CDE, from initial development through ongoing patching and change management. PCI DSS v4.0.1 requires a risk-based approach to patch management: critical and high-severity patches must be applied within a defined timeframe (typically 30 days for critical vulnerabilities), with documented exceptions for cases where immediate patching is not feasible.

Secure development practices must be embedded in the software development lifecycle. Developers working on payment applications must receive annual training on secure coding techniques covering at least the OWASP Top 10 vulnerability categories. Code reviews — whether manual or automated through SAST/DAST tools — must verify that common vulnerabilities such as injection flaws, broken authentication, and cross-site scripting are not present before code reaches production.

Public-facing web applications present the highest-risk attack surface and require additional protection. PCI DSS v4.0.1 offers two options: deploy a web application firewall (WAF) that inspects all traffic, or conduct application vulnerability assessments using manual or automated tools at least annually and after significant changes. Most organizations choose the WAF approach for continuous protection. Change control processes ensure that no modification to CDE systems bypasses security review — every change must be documented, tested, and approved before implementation.
