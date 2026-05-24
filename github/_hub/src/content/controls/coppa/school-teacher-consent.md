---
domain: "School & Teacher Consent"
order: 8
description: "Framework for schools and teachers to provide consent on behalf of parents for educational technology use under COPPA's school authorization exception."
requirements:
  - "Allow schools or teachers to consent on behalf of parents when PI collection is solely for educational purposes (16 CFR § 312.5(c)(4))"
  - "Prohibit any commercial use of PI collected under the school consent exception"
  - "Limit retention of school-consented PI to the period reasonably necessary for the educational purpose"
  - "Define and enforce clear scope boundaries for what constitutes 'educational purpose' under the exception"
criteria:
  - "Privacy"
evidence_examples:
  - artifact: "School consent agreement template with educational-purpose-only restrictions"
    owner: "Legal"
    frequency: "Annually"
  - artifact: "Data use audit confirming school-consented PI is not used for commercial purposes"
    owner: "Compliance lead"
    frequency: "Semi-annually"
  - artifact: "Retention schedule specific to school-consented PI with deletion confirmations"
    owner: "Engineering lead"
    frequency: "Annually (end of school year)"
  - artifact: "Scope boundary documentation defining permitted vs. prohibited uses of school-consented data"
    owner: "Privacy lead"
    frequency: "Annually"
---

The school authorization exception at 16 CFR § 312.5(c)(4) allows schools and teachers to provide consent on behalf of parents when an operator collects children's PI exclusively for use in an educational context. This exception recognizes the practical reality that individual parental consent for every educational technology tool used in a classroom would be unworkable. However, the exception is narrowly drawn: it applies only when the PI is collected for the educational benefit of the children, not for commercial exploitation by the operator.

Operators relying on the school consent exception must ensure that PI collected under this authority is not used for any commercial purpose, including advertising, marketing, building user profiles for non-educational use, or selling data to third parties. The FTC and the Department of Education have jointly clarified that school consent does not authorize operators to repurpose student data beyond the educational context for which it was collected. This means operators need technical and contractual controls that segregate school-consented data from their general user data and prevent cross-contamination.

Retention is another critical boundary. PI collected under the school exception should be retained only for the duration of the educational relationship, typically the school year or the period of the student's enrollment. Organizations should implement automated deletion triggers tied to the end of the school term or the school's notification that the student is no longer enrolled. Annual audits at the close of each school year should verify that expired school-consented data has been purged from all systems, including backups and analytics platforms.
