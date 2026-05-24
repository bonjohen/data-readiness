---
module_name: "RAG & Vector Store Controls"
order: 5
why_credible: "Deletion rights across all state comprehensive privacy laws require technical capability to identify and remove personal data from vector stores, where traditional deletion mechanisms may not apply to embedded representations."
additions:
  - "Vector store personal data inventory identifying which embeddings contain or are derived from personal data subject to state privacy laws"
  - "Deletion capability for vector embeddings that contain personal data, including re-indexing or tombstoning strategies that satisfy state deletion requirements"
  - "Cross-state deletion standard alignment ensuring vector store deletion mechanisms meet the most protective applicable state requirement"
  - "Retrieval scope controls preventing RAG systems from surfacing personal data of consumers who have exercised opt-out or deletion rights"
---

Retrieval-augmented generation systems that embed personal data into vector stores create a technical challenge for multi-state privacy compliance. When a consumer exercises the right to deletion — available under every state comprehensive privacy law — the controller must delete the consumer's personal data from all systems, including vector stores where that data has been transformed into embedding representations. Standard vector database operations (insert, query, delete by ID) may not straightforwardly map to "delete all personal data of consumer X" when that data has been chunked, embedded, and potentially co-mingled with other consumers' data in the same embedding space.

Organizations operating RAG systems with personal data must implement deletion strategies that satisfy the most protective applicable state standard. This may involve maintaining a mapping between source documents (containing identifiable personal data) and their vector representations, enabling targeted deletion. Where deletion of individual embeddings is not technically feasible, organizations should consider re-indexing workflows that rebuild the vector store excluding the deleted consumer's data, or implement retrieval-time filtering that prevents deleted consumers' data from being surfaced even if the underlying embeddings persist temporarily during a scheduled rebuild cycle.
