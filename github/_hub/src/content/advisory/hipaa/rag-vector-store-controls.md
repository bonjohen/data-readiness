---
module_name: "RAG & Vector Store Controls"
order: 5
why_credible: "Vector stores containing ePHI embeddings must meet § 164.312(a) access controls and § 164.312(e) encryption requirements as ePHI repositories."
additions:
  - "ePHI isolation and segmentation in vector store indexes"
  - "De-identification verification before embedding health data"
  - "Access audit trails for vector store queries"
  - "Encryption at rest and in transit for vector databases containing ePHI"
---

Retrieval-augmented generation systems that embed ePHI into vector stores create a new category of ePHI repository under HIPAA. Even though embeddings are mathematical representations rather than plaintext, they can reconstruct or reveal protected health information through similarity searches. Organizations must treat vector stores containing ePHI embeddings with the same access control, encryption, and audit requirements as any other ePHI system.

Key controls include de-identification of health data before embedding where feasible, logical isolation of ePHI vectors from non-sensitive data, role-based access controls on vector store queries, and encryption of the vector database at rest and in transit. Organizations should also consider whether the embedding process itself constitutes a use or disclosure of ePHI requiring patient authorization or a Privacy Rule exception.
