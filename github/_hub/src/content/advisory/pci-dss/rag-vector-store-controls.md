---
module_name: "RAG & Vector Store Controls"
order: 5
why_credible: "Vector stores containing PAN, cardholder data, or data derived from cardholder data must meet Req 3 storage protection requirements and Req 7 access restrictions as in-scope CDE components."
additions:
  - "Classification of vector stores as CDE components when they contain embeddings derived from cardholder data"
  - "Encryption-at-rest requirements for vector databases equivalent to Req 3 PAN protection standards"
  - "Access controls on vector store queries preventing unauthorized retrieval of cardholder data fragments"
  - "Data minimization review before ingesting any cardholder data into RAG pipelines"
  - "Retention policies for vector stores aligned with Req 3 data retention and disposal requirements"
---

Retrieval-augmented generation (RAG) systems that index documents or records containing cardholder data create a subtle but significant PCI DSS compliance risk. When PAN, cardholder names, or transaction details are embedded into vector representations, the resulting vectors are derived data that may allow reconstruction of original cardholder data through similarity searches. Under Requirement 3, any storage location containing cardholder data — including derived or encoded forms — must implement protection mechanisms. If a vector store can return document chunks containing full or partial PAN in response to semantic queries, it is a cardholder data repository.

Organizations deploying RAG systems must evaluate the data ingestion pipeline before any cardholder data enters the vector store. The preferred approach is to exclude cardholder data entirely from RAG ingestion, using tokenized or redacted versions of documents instead. When cardholder data must be included for legitimate business purposes, the vector store inherits all CDE protections: encryption at rest, network segmentation, access controls, audit logging, and inclusion in the annual scope assessment. The vector store also falls under Requirement 3's retention and disposal requirements — embeddings of cardholder data that are no longer needed must be purged.
