---
module_name: "RAG & Vector Store Controls"
order: 5
why_credible: "Vector stores must not embed children's PI without consent, and the right to delete must be technically feasible for embedded data — standard vector deletion is non-trivial and requires purpose-built processes."
additions:
  - "Children's PI exclusion from vector store embeddings and retrieval corpora"
  - "Parental deletion cascade to vector stores containing children's embedded data"
  - "Age-tagged data isolation preventing children's data from entering general-purpose RAG pipelines"
  - "Periodic audits of vector store contents for unauthorized children's PI"
---

Retrieval-augmented generation systems that index user-generated content into vector stores create a persistent, searchable representation of that content. When children's PI is embedded into a vector store — whether from chat transcripts, uploaded content, or user profiles — it becomes technically difficult to delete individual records because vector embeddings are not straightforward key-value pairs. Organizations using RAG architectures on child-directed platforms must ensure that children's PI is either excluded from vectorization entirely or that the system supports granular deletion of individual embeddings to satisfy parental deletion requests under § 312.6.

Age-tagged data isolation is the most reliable approach: children's data should be routed to separate, purpose-limited vector stores (or excluded entirely) so that deletion requests can be honored without reconstructing the entire index. Periodic audits should verify that no children's PI has leaked into general-purpose corpora through pipeline errors or misconfigured ingestion rules.
