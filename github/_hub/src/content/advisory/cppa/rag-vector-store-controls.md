---
module_name: "RAG & Vector Store Controls"
order: 5
why_credible: "Vector stores that embed consumer PI must comply with CCPA deletion rights (§1798.105) and purpose limitations, yet vector embeddings resist conventional record-level deletion."
additions:
  - "PI classification for documents ingested into RAG pipelines"
  - "Deletion capability assessment for vector stores holding consumer PI embeddings"
  - "Purpose limitation controls restricting RAG queries to authorized use cases"
  - "Access controls on vector store query interfaces to prevent unauthorized PI retrieval"
---

Retrieval-augmented generation pipelines ingest documents, chunk them, generate vector embeddings, and store those embeddings for similarity search during inference. When the source documents contain consumer personal information, the embeddings themselves may encode PI in a form that is difficult to identify, isolate, or delete at the individual record level. This creates a direct tension with the CCPA/CPRA right to delete (§1798.105), which requires businesses to delete a consumer's PI from their systems and direct service providers to do the same.

Organizations operating RAG pipelines over consumer data should evaluate whether their vector store supports record-level deletion or requires full re-indexing. Source document metadata should track PI provenance so that deletion requests can identify which chunks and embeddings correspond to a given consumer. Purpose limitation controls should restrict who can query the vector store and for what purposes, preventing RAG pipelines built for customer support from being repurposed for marketing analytics without appropriate notice and authorization.
