---
domain: "Sensitive Personal Information"
order: 6
description: "Additional protections for sensitive PI categories including SSN, financial accounts, biometrics, precise geolocation, and other enumerated data types."
requirements:
  - "Implement the consumer's right to limit use and disclosure of sensitive personal information (§1798.121)"
  - "Provide separate notice identifying SPI categories collected and purposes of use"
  - "Restrict SPI use to purposes reasonably necessary for the service or transaction requested"
  - "Offer a clear 'Limit the Use of My Sensitive Personal Information' link (§1798.135(a))"
criteria:
  - "Privacy"
evidence_examples:
  - artifact: "SPI inventory identifying all sensitive categories collected and their storage locations"
    owner: "Privacy lead"
    frequency: "Quarterly"
  - artifact: "Homepage and intake-point screenshots showing 'Limit Use of SPI' link"
    owner: "Engineering lead"
    frequency: "Quarterly"
  - artifact: "SPI access control matrix with role restrictions and encryption status"
    owner: "IT or Security lead"
    frequency: "Annually"
  - artifact: "SPI limitation request log with processing dates and downstream propagation"
    owner: "Privacy lead"
    frequency: "Monthly"
---

Sensitive personal information is a CPRA-specific concept that layers additional obligations on top of the general PI framework. SPI categories defined in §1798.140(ae) include Social Security numbers, driver's license numbers, financial account credentials, precise geolocation, racial or ethnic origin, religious beliefs, union membership, contents of mail or text messages, genetic data, biometric data, health information, and sex life or sexual orientation data. When a business collects SPI, consumers have the right to limit its use to what is necessary to perform the services or provide the goods requested.

The "Limit the Use of My Sensitive Personal Information" link must appear alongside the "Do Not Sell or Share" link. When a consumer exercises this right, the business must stop using SPI for any secondary purpose — profiling, marketing, analytics beyond what is necessary for the transaction. Organizations that collect precise geolocation for delivery purposes, for example, must stop using that data for audience segmentation or location-based advertising once a consumer opts to limit.

Operationally, SPI requires tighter access controls, stronger encryption, and more granular audit logging than general PI. Organizations should maintain a separate SPI inventory that identifies every system where SPI resides, who has access, and what purpose that access serves. Common failures include treating SPI restrictions as a UI-only change (adding the link without actually suppressing downstream processing), failing to propagate limitation requests to service providers who also hold the consumer's SPI, and not distinguishing SPI from general PI in retention and disposal schedules.
