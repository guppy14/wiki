---
type: concept
title: Knowledge Compilation
tags: [concept, llm, knowledge-management, methodology]
created: 2026-04-10
updated: 2026-04-10
sources: [llm-wiki-pattern.md]
---

# Knowledge Compilation

## Definition

The approach of processing source documents once — extracting key information, synthesizing across sources, flagging contradictions, and building a persistent structured knowledge artifact — rather than re-deriving answers from raw documents at every query. The compiled artifact (the wiki) gets richer with each new source and each question answered.

## Key Ideas

- **Compile once, query many times:** ingest cost is paid upfront; subsequent queries are faster and richer.
- **Compounding:** each new source is integrated into an existing synthesis, not treated in isolation. Connections accumulate.
- **Contradiction tracking:** unlike RAG, compiled knowledge explicitly surfaces where sources disagree.
- **The LLM as compiler:** the LLM performs the synthesis pass; humans supply the sources and direction.

## How It Appears in Sources

- [[sources/llm-wiki-pattern|LLM Wiki Pattern]] — the central concept of the entire document. Framed as the key difference from [[concepts/rag|RAG]]: "The knowledge is compiled once and then kept current, not re-derived on every query."

## Related Concepts

- [[concepts/rag|RAG]] — the contrasting approach
- [[concepts/knowledge-compounding|Knowledge Compounding]] — the compounding effect that makes compilation valuable over time
- [[concepts/personal-knowledge-base|Personal Knowledge Base]] — the product of compilation

## Related Entities

- [[entities/memex|Memex]] — Vannevar Bush's 1945 vision prefigures the compiled, associative knowledge store idea
- [[entities/obsidian|Obsidian]] — the recommended tool for browsing the compiled wiki

## Evolution / Contradictions

- The term "compilation" is borrowed from software (source → bytecode). Here: raw sources → structured wiki.
- Compilation introduces ingest latency and LLM cost. This is the main tradeoff vs. RAG.

## Open Questions

- How should the LLM handle sources that are too large to compile in a single pass?
- Should the compilation be incremental (touch only affected pages) or periodically full (re-read all sources)?
