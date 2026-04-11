---
type: entity
title: NotebookLM
tags: [tool, software, llm, knowledge-management]
created: 2026-04-10
updated: 2026-04-10
sources: [llm-wiki-pattern.md]
---

# NotebookLM

**Type:** software tool — LLM-powered document Q&A (Google)

## Description

Google's LLM-powered notebook tool that allows users to upload documents and ask questions about them. Uses a [[concepts/rag|RAG]]-style approach — retrieving relevant chunks at query time. Cited in the LLM Wiki pattern as an example of the paradigm the LLM Wiki is designed to go beyond.

## Key Facts

- Made by Google.
- RAG-based: retrieves from raw documents at query time.
- No persistent synthesis — re-derives answers on every query.

## Appearances in Sources

- [[sources/llm-wiki-pattern|LLM Wiki Pattern]] — cited as a representative RAG system: "NotebookLM, ChatGPT file uploads, and most RAG systems work this way."

## Connections

- [[concepts/rag|RAG]] — the approach NotebookLM uses
- [[concepts/knowledge-compilation|Knowledge Compilation]] — the alternative approach

## Notes & Open Questions

- Fair to note that NotebookLM is optimized for different goals (no ingest cost, always fresh). The comparison in the source is purposely one-sided.
