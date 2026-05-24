---
module_name: "RAG & Vector Store Controls"
order: 5
why_credible: "Vector embeddings of personal data remain personal data under the GDPR when they can be linked back to individuals; erasure rights under Art. 17 must be technically feasible for embedded data."
additions:
  - "Erasure capability for personal data embedded in vector stores, including re-indexing workflows"
  - "Purpose limitation controls ensuring embeddings are used only for their documented purpose"
  - "Re-embedding procedures after individual data deletion to prevent residual data leakage"
---

Retrieval-augmented generation (RAG) systems that embed personal data into vector stores create a distinct compliance challenge. The EDPB and multiple supervisory authorities have confirmed that data derived from personal data — including vector embeddings — can constitute personal data when the original individual can be identified, directly or indirectly. This means that embedding personal data into a vector store is a processing activity requiring a lawful basis, ROPA entry, and the ability to fulfill data subject rights including erasure and access.

The technical challenge is that vector stores are not designed for granular deletion. Removing a single individual's data from an embedding index may require re-computing embeddings for the entire corpus, which can be computationally expensive. Organizations must design their RAG architectures with GDPR compliance in mind from the outset — maintaining metadata links between embeddings and source documents, implementing deletion workflows that remove both the source data and its vector representations, and validating that deleted data cannot be reconstructed from remaining embeddings. Purpose limitation also applies: embeddings generated for one purpose (such as customer support search) should not be repurposed for another (such as behavioral profiling) without a compatible purpose assessment.
