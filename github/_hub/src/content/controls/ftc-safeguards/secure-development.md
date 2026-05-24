---
domain: "Secure Development"
order: 6
description: "Implement secure development practices for in-house applications that handle customer information, including security testing, code review, and vulnerability remediation before deployment."
requirements:
  - "Establish secure development practices for all in-house applications handling customer information (§ 314.4(c)(4))"
  - "Conduct security testing — including vulnerability scanning and penetration testing — before deployment"
  - "Implement code review processes that include security-focused review criteria"
  - "Remediate identified vulnerabilities in custom software within defined timelines"
evidence_examples:
  - artifact: "Secure development lifecycle (SDLC) policy defining security gates, review requirements, and testing mandates"
    owner: "Development Lead"
    frequency: "Annually"
  - artifact: "Security test results including vulnerability scan and penetration test reports for customer-facing applications"
    owner: "Security Lead"
    frequency: "Per release"
  - artifact: "Code review records showing security-focused review completion and findings remediation"
    owner: "Development Lead"
    frequency: "Per release"
criteria:
  - "Security"
---

Section 314.4(c)(4) requires financial institutions to implement secure development practices for any in-house application that stores, processes, or transmits customer information. This is not limited to customer-facing web applications — internal tools, batch processing scripts, data migration utilities, and API integrations all fall within scope if they touch customer data. The secure development lifecycle should define security requirements at the design phase, enforce security-focused code reviews during development, and mandate testing before any release reaches production.

Security testing must go beyond functional QA. The rule expects vulnerability scanning to identify known weaknesses (outdated libraries, SQL injection, cross-site scripting) and penetration testing to validate that controls work under adversarial conditions. Testing should occur before initial deployment and again whenever significant changes are made. Automated scanning tools can catch common issues efficiently, but manual penetration testing remains essential for business logic vulnerabilities and complex attack chains that automated tools miss.

Vulnerability remediation in custom software must follow defined timelines tied to severity. Critical vulnerabilities — those that could expose customer information directly — should have remediation SLAs measured in days, not weeks. The institution must track identified vulnerabilities from discovery through remediation and verify that fixes are effective. Development teams should also maintain awareness of emerging threats and update their secure coding standards accordingly, particularly as new attack techniques and framework vulnerabilities emerge.
