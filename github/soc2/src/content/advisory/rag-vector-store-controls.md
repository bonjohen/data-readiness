---
module_name: "RAG and Vector-Store Controls"
order: 2
why_credible: "OWASP 2025 highlights vector and embedding weaknesses, sensitive information disclosure, and prompt injection risks."
additions:
  - "Retrieval source allowlists"
  - "Embedding-store access controls"
  - "Chunk and source traceability"
  - "Redaction controls for sensitive content"
  - "Test prompts for injection resistance"
---

Retrieval-augmented generation (RAG) systems introduce a new attack surface where embeddings and retrieved content can leak sensitive information or be manipulated through prompt injection. Controls around source allowlists, access restrictions on vector stores, and injection testing reduce these risks.
