---
type: entity
title: qmd
tags: [tool, software, search, llm]
created: 2026-04-10
updated: 2026-04-10
sources: [llm-wiki-pattern.md]
---

# qmd

**Type:** software tool — local search engine for markdown

## Description

A local, on-device search engine for markdown files with hybrid BM25/vector search and LLM re-ranking. Provides both a CLI (the LLM can shell out to it) and an MCP server (the LLM can use it as a native tool). Recommended for LLM Wiki use when the index.md approach no longer scales.

## Key Facts

- Hybrid search: BM25 (keyword) + vector (semantic) + LLM re-ranking.
- All on-device — no cloud dependency.
- CLI mode: LLM shells out to search.
- MCP server mode: LLM uses it as a native tool via the Model Context Protocol.
- Optional — the `index.md` approach handles moderate scale (~100 sources, ~hundreds of pages).

## Appearances in Sources

- [[sources/llm-wiki-pattern|LLM Wiki Pattern]] — described as the recommended search tool once the index.md approach breaks down. "qmd is a good option: it's a local search engine for markdown files with hybrid BM25/vector search and LLM re-ranking, all on-device."

## Connections

- [[entities/obsidian|Obsidian]] — the wiki viewer qmd would complement
- [[concepts/personal-knowledge-base|Personal Knowledge Base]] — the system qmd helps search at scale

## Notes & Open Questions

- The source says you could also "vibe-code a naive search script" as a simpler alternative.
- At what wiki size does switching to qmd become worth the setup cost?
