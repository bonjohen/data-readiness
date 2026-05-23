---
domain: "Physical Safeguards"
order: 7
description: "Facility access controls, workstation use and security, and device and media handling procedures."
requirements:
  - "(A) Contingency operations — procedures for facility access during emergency operations"
  - "(A) Facility security plan documenting physical safeguards"
  - "(R) Access control and validation procedures for facilities containing ePHI"
  - "(A) Maintenance records for physical security modifications"
  - "(R) Workstation use policies specifying proper functions and physical environment"
  - "(R) Workstation security — physical safeguards restricting access to authorized users"
  - "(R) Device and media disposal procedures for ePHI-containing hardware"
  - "(A) Media re-use procedures ensuring ePHI removal before re-use"
  - "(R) Accountability — maintain records of hardware and media movements"
  - "(A) Data backup and storage before moving equipment containing ePHI"
evidence_examples:
  - artifact: "Facility access logs and badge reader reports"
    owner: "Facilities / Physical Security"
    frequency: "Monthly reviewed"
  - artifact: "Workstation use and security policy documents"
    owner: "IT Security"
    frequency: "Annually reviewed"
  - artifact: "Media disposal and sanitization certificates"
    owner: "IT Operations"
    frequency: "Event-driven"
  - artifact: "Hardware and media movement tracking log"
    owner: "IT Asset Management"
    frequency: "Event-driven"
criteria:
  - "Security"
---

Physical safeguards under 45 CFR § 164.310(a-d) address the tangible protections for facilities, workstations, and devices that store or access ePHI. While much attention focuses on technical controls, OCR enforcement actions frequently cite physical security failures — unsecured server rooms, stolen unencrypted laptops, and improper disposal of ePHI-containing media are recurring themes in breach notifications.

The regulation covers four categories: facility access controls, workstation use, workstation security, and device and media controls. Facility access controls include contingency operations procedures, a facility security plan, validation procedures, and maintenance records. Workstation provisions require both policies governing proper use and physical safeguards that restrict access to authorized users only — this means screen privacy filters, locked offices, and positioning monitors away from public view.

Device and media controls are particularly important given the volume of portable devices in healthcare settings. Organizations must have procedures for the disposal and re-use of ePHI-containing media, maintain accountability records for device movements, and back up data before moving equipment. A certificate of destruction or sanitization from a qualified vendor provides strong evidence of compliance and is the standard OCR expects to see during investigations.
