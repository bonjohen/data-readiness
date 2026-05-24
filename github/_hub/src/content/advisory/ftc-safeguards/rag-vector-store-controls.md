---
module_name: "RAG and Vector-Store Controls"
order: 5
why_credible: "Vector stores containing customer financial information are information systems under the Safeguards Rule and must meet § 314.4(c)(3) encryption and § 314.4(c)(1) access control requirements."
additions:
  - "Access controls on vector stores containing customer information embeddings"
  - "Encryption requirements for vector databases at rest and in transit"
  - "Retrieval source allowlists preventing unauthorized data from entering the embedding pipeline"
  - "Chunk-level traceability linking retrieved content back to source documents and access permissions"
  - "Injection resistance testing for RAG pipelines processing customer information"
---

Retrieval-augmented generation systems that embed and retrieve customer financial information create a new type of information system subject to the Safeguards Rule. The vector store itself — containing embeddings derived from customer records, account data, or financial documents — must meet the same encryption (§ 314.4(c)(3)) and access control (§ 314.4(c)(1)) requirements as any other system storing customer information. The fact that the data is in embedding form rather than plaintext does not exempt it from safeguard requirements.

This module defines controls specific to RAG architectures: access restrictions on who can query the vector store, encryption of embedding data, source allowlists that control what information enters the embedding pipeline, and traceability mechanisms that link retrieved chunks back to their source documents and original access permissions. Injection resistance testing must verify that adversarial prompts cannot extract customer information that the querying user is not authorized to access.
