---
module_name: "RAG & Vector Store Controls"
order: 5
why_credible: "Vector stores containing private information are subject to all three safeguard categories under § 899-bb(2)(b) — administrative, technical, and physical — as they constitute systems that store and process NY resident data."
additions:
  - "Data classification review before ingesting documents into vector stores to identify private information subject to SHIELD Act protections"
  - "Access controls on vector store queries to prevent unauthorized retrieval of embedded private information"
  - "Encryption of vector embeddings derived from documents containing private information"
  - "Disposal procedures for vector store entries when source documents containing private information reach end of retention"
  - "Vendor assessment for hosted vector database providers under § 899-bb(2)(b)(i)(E) service provider requirements"
---

Retrieval-augmented generation systems that ingest documents containing NY resident private information bring vector stores within the scope of the SHIELD Act's safeguard requirements. When an organization embeds documents containing Social Security numbers, biometric data, financial account information, or email-password combinations into a vector database, that database becomes a system that stores private information — triggering the full range of administrative, technical, and physical safeguard obligations under § 899-bb(2)(b). The semantic nature of vector search means that private information may be retrievable through queries that do not explicitly reference the data, creating a non-obvious access path that must be addressed in the risk assessment.

Organizations should implement pre-ingestion classification to identify and flag documents containing private information, apply access controls that limit vector store queries to authorized users and use cases, and establish disposal procedures that remove embeddings when the source documents reach end of retention. When using hosted vector database services, the provider falls under the SHIELD Act's service provider requirements, necessitating security assessments and contractual safeguard provisions.
