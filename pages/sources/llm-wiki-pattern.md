---
type: source
title: LLM Wiki — A Pattern for Building Personal Knowledge Bases Using LLMs
tags: [source, knowledge-management, llm, methodology]
created: 2026-04-10
updated: 2026-04-10
sources: [llm-wiki-pattern.md]
---

# LLM Wiki — A Pattern for Building Personal Knowledge Bases Using LLMs

**Type:** idea file / methodology
**Date:** 2026
**Author(s):** unknown (shared as concept document)
**URL / File:** `raw/llm-wiki-pattern.md`

## Summary

This document describes a pattern for building a persistent, LLM-maintained personal knowledge base ("wiki") as an alternative to [[concepts/rag|RAG]]-style retrieval. Instead of re-deriving knowledge at query time, an LLM incrementally builds and maintains a structured, interlinked collection of markdown files — updating pages, flagging contradictions, and maintaining cross-references as new sources arrive. The [[concepts/knowledge-compilation|knowledge is compiled once and kept current]], rather than re-derived on every query.

## Key Points

- **RAG vs. Wiki:** [[concepts/rag|RAG]] re-discovers knowledge on every query. The LLM Wiki compiles it once and compounds it over time.
- **Three layers:** raw sources (immutable), the wiki (LLM-owned markdown files), and the schema (CLAUDE.md — the LLM's operating instructions).
- **Three operations:** Ingest (process a new source), Query (answer questions against the wiki), Lint (health-check the wiki for contradictions, orphans, gaps).
- **Index + Log:** `index.md` is a content catalog for navigation; `log.md` is an append-only chronological record of all activity.
- **Obsidian as the IDE:** The user browses the wiki in [[entities/obsidian|Obsidian]] while the LLM edits it in real time — "Obsidian is the IDE; the LLM is the programmer; the wiki is the codebase."
- **Why it works:** The maintenance burden (cross-referencing, updating, consistency) is what kills human-maintained wikis. LLMs handle this at near-zero cost.
- **Historical precedent:** The concept echoes [[entities/vannevar-bush|Vannevar Bush]]'s [[entities/memex|Memex]] (1945) — private, curated, associative trails. Bush couldn't solve the maintenance problem; LLMs can.

## Key Quotes

> "The wiki is a persistent, compounding artifact. The cross-references are already there. The contradictions have already been flagged."

> "Obsidian is the IDE; the LLM is the programmer; the wiki is the codebase."

> "The human's job is to curate sources, direct the analysis, ask good questions, and think about what it all means. The LLM's job is everything else."

## Entities Mentioned

- [[entities/vannevar-bush|Vannevar Bush]] — author of the 1945 Memex concept, intellectual ancestor of this pattern
- [[entities/memex|Memex]] — Bush's 1945 vision of a personal, associative knowledge store
- [[entities/obsidian|Obsidian]] — recommended as the wiki viewer/IDE (graph view, Web Clipper, Dataview, Marp)
- [[entities/qmd|qmd]] — optional local search engine for markdown (BM25/vector hybrid, MCP server)
- [[entities/notebooklm|NotebookLM]] — cited as an example of the RAG approach this pattern moves beyond
- [[entities/marp|Marp]] — markdown-based slide deck format, usable for generating presentations from wiki content
- [[entities/dataview|Dataview]] — Obsidian plugin for querying page frontmatter

## Concepts Mentioned

- [[concepts/rag|RAG (Retrieval-Augmented Generation)]] — the dominant paradigm this pattern contrasts with
- [[concepts/knowledge-compilation|Knowledge Compilation]] — the core idea: compile knowledge once, keep it current
- [[concepts/personal-knowledge-base|Personal Knowledge Base (PKB)]] — the category this pattern belongs to
- [[concepts/knowledge-compounding|Knowledge Compounding]] — each source and query makes the wiki richer

## Contradictions / Open Questions

- The pattern is intentionally abstract — concrete tradeoffs (e.g. ingest latency, LLM cost per ingest, quality of cross-referencing) are not addressed.
- At what scale does the index.md approach break down and require a proper search engine like [[entities/qmd|qmd]]?
- How should contradictions between sources be resolved vs. merely flagged?

## Related Pages

- [[concepts/rag|RAG]]
- [[concepts/knowledge-compilation|Knowledge Compilation]]
- [[entities/obsidian|Obsidian]]
- [[entities/vannevar-bush|Vannevar Bush]]
