---
domain: "Access Restriction (Need-to-Know)"
order: 7
description: "Role-based access control, least privilege enforcement, and deny-all-by-default configuration for CDE access."
requirements:
  - "Access to system components and cardholder data limited to only those individuals whose job requires such access"
  - "Access control system configured to deny all access by default and grant only explicitly authorized permissions"
  - "Roles and access privileges documented with business justification for each role"
evidence_examples:
  - artifact: "Access control matrices mapping roles to permitted resources and data types"
    owner: "Compliance"
    frequency: "Semi-annually"
  - artifact: "Role definitions with documented business justification for CDE access"
    owner: "Security team"
    frequency: "Annually"
  - artifact: "Periodic access review records confirming continued need-to-know"
    owner: "Compliance"
    frequency: "Semi-annually"
criteria:
  - "Security"
---

Requirement 7 enforces the principle of least privilege for access to cardholder data and CDE system components. The access control model must start from a deny-all posture — no user, application, or process should have access to anything unless that access has been explicitly granted based on documented business need. This principle applies to both logical access (database queries, API calls, file system reads) and application-level access (transaction screens, reporting dashboards, administrative functions).

Role-based access control (RBAC) is the standard implementation pattern. Each role maps to a specific set of permissions required for the associated job function, and each user is assigned only the role(s) necessary. The role definitions must include a business justification explaining why that level of access is required. Generic roles like "admin" or "power user" with broad CDE access are a common audit finding.

Access reviews are the ongoing enforcement mechanism. At least semi-annually, managers must review the access privileges assigned to their team members and confirm that each assignment remains necessary. Users who have changed roles, left the organization, or no longer require CDE access must have their permissions revoked promptly. The access review records — who reviewed, what was confirmed, what was revoked — are primary evidence for QSA assessments.
