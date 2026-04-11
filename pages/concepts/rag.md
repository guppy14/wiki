---
type: concept
title: RAG (Retrieval-Augmented Generation)
tags: [concept, llm, methodology, information-retrieval]
created: 2026-04-10
updated: 2026-04-10
sources: [llm-wiki-pattern.md]
---

# RAG (Retrieval-Augmented Generation)

## Definition

A technique where an LLM answers questions by first retrieving relevant document chunks from a collection (using embedding similarity or keyword search), then generating a response conditioned on those retrieved chunks. The LLM does not store knowledge permanently — it re-derives answers from raw documents on every query.

## Key Ideas

- Documents are chunked and embedded at index time; retrieval happens at query time.
- No persistent synthesis: each query starts from scratch.
- Works well for factual lookup but struggles with questions requiring synthesis across many sources.
- Representative systems: [[entities/notebooklm|NotebookLM]], ChatGPT file uploads, most enterprise document Q&A systems.

## How It Appears in Sources

- [[sources/llm-wiki-pattern|LLM Wiki Pattern]] — used as the foil: the pattern this wiki approach is explicitly designed to move beyond. Core critique: "the LLM is rediscovering knowledge from scratch on every question. There's no accumulation."

## Related Concepts

- [[concepts/knowledge-compilation|Knowledge Compilation]] — the alternative proposed by the LLM Wiki pattern
- [[concepts/personal-knowledge-base|Personal Knowledge Base]] — the broader category RAG is often used for

## Related Entities

- [[entities/notebooklm|NotebookLM]] — example RAG system

## Evolution / Contradictions

- RAG is not inherently wrong — it's optimized for different tradeoffs (no ingest latency, always reads fresh source). The LLM Wiki pattern trades ingest cost for query quality and compounding.
- Hybrid approaches (RAG over wiki pages instead of raw sources) may be the right answer at scale.

## Open Questions

- At what document collection size does RAG become clearly inferior to a compiled wiki?
- Can the two approaches be combined: wiki for synthesis, RAG as fallback for raw detail retrieval?
