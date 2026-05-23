---
module_name: "RAG & Vector Store Controls"
order: 5
why_credible: "DORA ICT asset management (Art. 8) and data protection requirements apply to vector stores and retrieval-augmented generation systems in financial AI deployments."
additions:
  - "Vector stores registered in ICT asset inventory with dependency mapping"
  - "Data residency controls for financial data embeddings aligned with DORA data location requirements"
  - "Resilience testing for RAG systems supporting critical financial functions"
---

Vector stores and RAG architectures deployed within financial entities constitute ICT assets under DORA and must be included in the entity's ICT asset register. This includes documenting dependencies — the embedding models, data sources, and downstream applications that rely on the vector store — and classifying the asset by criticality based on the business functions it supports.

When RAG systems support critical or important functions, they fall within scope for digital operational resilience testing. Financial entities should include RAG system failure scenarios in their BCP/DR testing, validate recovery procedures for vector store corruption or loss, and assess whether data residency requirements under DORA's third-party risk provisions are met when embeddings are processed or stored by external providers.
