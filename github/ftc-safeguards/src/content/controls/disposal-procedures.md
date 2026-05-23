---
domain: "Disposal Procedures"
order: 8
description: "Implement secure disposal procedures for customer information that is no longer needed, using methods appropriate to the media type with documented verification and vendor oversight."
requirements:
  - "Securely dispose of customer information no longer necessary for business purposes or legal retention (§ 314.4(c)(6))"
  - "Use disposal methods appropriate to the media type — shredding, degaussing, cryptographic erasure, or secure wiping"
  - "Maintain disposal logs and certificates documenting what was destroyed, when, and by whom"
  - "Verify disposal practices of vendors and service providers handling customer information"
evidence_examples:
  - artifact: "Disposal policy defining retention periods, approved destruction methods, and authorization requirements"
    owner: "Compliance Officer"
    frequency: "Annually"
  - artifact: "Destruction certificates and disposal logs with dates, media descriptions, and method used"
    owner: "IT Admin"
    frequency: "Per event"
  - artifact: "Vendor disposal verification records confirming third-party destruction practices meet requirements"
    owner: "Compliance Officer"
    frequency: "Annually"
criteria:
  - "Security"
---

Customer information that is no longer needed for its original business purpose or legal retention obligation must be securely disposed of under § 314.4(c)(6). Keeping data beyond its useful life increases the institution's attack surface without any corresponding business benefit. The disposal requirement applies to all forms of customer information — electronic records in databases and file systems, physical documents, backup media, portable storage devices, and decommissioned hardware.

The disposal method must match the media type and the sensitivity of the information. Paper documents containing customer information should be cross-cut shredded, not simply recycled. Hard drives and solid-state drives require secure wiping using NIST 800-88 compliant methods, physical destruction, or degaussing (for magnetic media). Cloud-hosted data requires cryptographic erasure — destroying the encryption keys renders the data unrecoverable even if the physical storage cannot be accessed. Simply deleting files or reformatting drives is not sufficient, as data remains recoverable through forensic techniques.

Every disposal event must be documented. Disposal logs should record what was destroyed, the method used, the date, and who performed or authorized the destruction. For outsourced disposal — which is common for hardware destruction — the institution must obtain certificates of destruction from the vendor and periodically verify the vendor's disposal practices through audits or assessments. The disposal program should be integrated with the data inventory so that when systems are decommissioned or data reaches the end of its retention period, the disposal process is triggered systematically rather than left to ad hoc decisions.
