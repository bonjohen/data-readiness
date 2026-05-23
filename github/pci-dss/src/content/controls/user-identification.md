---
domain: "User Identification & Authentication"
order: 8
description: "Unique user IDs, multi-factor authentication, password policies, and service account management for CDE access."
requirements:
  - "Unique identification assigned to each person with computer access to the CDE"
  - "Multi-factor authentication (MFA) required for all access into the CDE and for all remote network access"
  - "Strong authentication management including password complexity, expiration, and lockout controls"
  - "Shared, group, or generic accounts prohibited except where documented business necessity exists with enhanced monitoring"
  - "Service and system accounts managed with restricted privileges, documented owners, and periodic review"
evidence_examples:
  - artifact: "User ID policy requiring unique identification and prohibiting shared accounts"
    owner: "Security team"
    frequency: "Annually"
  - artifact: "MFA enrollment records and enforcement configuration for CDE access"
    owner: "IT admin"
    frequency: "Quarterly"
  - artifact: "Password policy configuration showing complexity, rotation, and lockout settings"
    owner: "IT admin"
    frequency: "Semi-annually"
  - artifact: "Service account inventory with owners, privilege levels, and review dates"
    owner: "Security team"
    frequency: "Semi-annually"
criteria:
  - "Security"
---

Requirement 8 ensures that every action in the cardholder data environment can be attributed to a specific individual. Unique user identification is the foundation of accountability — when every person has a distinct account, audit trails become meaningful and incident investigation becomes possible. PCI DSS v4.0.1 extends MFA requirements significantly: multi-factor authentication is now required for all access into the CDE, not just remote access, making this one of the most impactful changes in v4.0.1.

Password policies must enforce minimum complexity (at least 12 characters for v4.0.1, or 8 characters if the system does not support 12), prevent reuse of the last four passwords, and lock accounts after no more than 10 invalid attempts. Idle sessions must time out after 15 minutes. These are minimum thresholds — organizations should exceed them where feasible. Passwords for service and system accounts must be changed at least annually and upon suspicion of compromise.

Service accounts present a particular challenge. Unlike human accounts, service accounts often cannot support MFA and may require static credentials. PCI DSS v4.0.1 requires that service accounts be inventoried, assigned to a documented owner, granted the minimum privileges necessary, and reviewed periodically. Interactive login for service accounts should be prohibited unless there is a documented exception. Monitoring of service account activity should be heightened to compensate for the absence of MFA.
