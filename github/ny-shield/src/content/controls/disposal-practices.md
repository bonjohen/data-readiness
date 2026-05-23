---
domain: "Disposal Practices"
order: 8
description: "Ensure timely and secure disposal of private information when it is no longer needed for business purposes as required by N.Y. GBL § 899-bb(2)(b)(iii)(D)."
requirements:
  - "Dispose of private information within a reasonable time after it is no longer needed for business purposes (§ 899-bb(2)(b)(iii)(D))"
  - "Use secure destruction methods appropriate to the media type, including shredding for paper records, degaussing for magnetic media, and cryptographic wiping or physical destruction for digital storage"
  - "Verify vendor disposal practices when third parties are engaged for destruction services"
  - "Maintain disposal logs documenting what was destroyed, the method used, the date of destruction, and responsible personnel"
evidence_examples:
  - artifact: "Data retention and disposal policy specifying retention periods and authorized destruction methods by data type"
    owner: "Records Management Lead"
    frequency: "Annually reviewed"
  - artifact: "Disposal event logs with date, method, media description, and attestation of destruction"
    owner: "Records Management Lead"
    frequency: "Per disposal event"
  - artifact: "Third-party disposal vendor certificates of destruction"
    owner: "Vendor Management Lead"
    frequency: "Per disposal event"
  - artifact: "Retention schedule mapping private information categories to retention periods and triggering events"
    owner: "Privacy Counsel"
    frequency: "Annually reviewed"
criteria:
  - "Security"
---

The NY SHIELD Act's disposal requirement under § 899-bb(2)(b)(iii)(D) addresses a frequently overlooked phase of the data lifecycle. Private information that is retained beyond its useful business life represents pure risk — it can be breached, subpoenaed, or misused without providing any corresponding business value. The statute requires organizations to dispose of private information "within a reasonable time after it is no longer needed for business purposes," which implies that organizations must first define what those business purposes are and establish retention periods that are defensible in the context of their industry, legal obligations, and operational needs.

Secure destruction methods must match the sensitivity and media type of the information being disposed. Paper records containing private information should be cross-cut shredded rather than simply discarded. Digital media requires methods that render data unrecoverable: cryptographic erasure for encrypted storage, secure overwriting that meets recognized standards (such as NIST SP 800-88), degaussing for magnetic media, or physical destruction for drives and devices that cannot be reliably wiped. The choice of method should be documented in the organization's disposal policy and applied consistently across all disposal events.

Vendor disposal introduces additional accountability requirements. When organizations engage third-party destruction services — as many do for high-volume paper shredding or certified electronic media destruction — they must verify that the vendor's practices meet the same security standards the organization would apply internally. This includes reviewing the vendor's destruction procedures, requiring certificates of destruction for each disposal event, and periodically auditing the vendor's compliance. Disposal logs that record what was destroyed, how, when, and by whom create an audit trail that demonstrates systematic compliance with the statute's disposal mandate.
