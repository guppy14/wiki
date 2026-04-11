---
type: concept
title: Personal Knowledge Base (PKB)
tags: [concept, knowledge-management, productivity]
created: 2026-04-10
updated: 2026-04-10
sources: [llm-wiki-pattern.md]
---

# Personal Knowledge Base (PKB)

## Definition

A privately curated, structured store of knowledge built by an individual over time — accumulating notes, summaries, cross-references, and syntheses across domains of interest. Distinct from a search engine (which retrieves from the public web) and from raw note-taking (which lacks structure and cross-referencing).

## Key Ideas

- The value is in the *connections*, not just the raw notes.
- Maintenance burden is the primary reason PKBs are abandoned by humans.
- LLMs can take over the maintenance layer, making PKBs sustainable at scale.
- Tools like [[entities/obsidian|Obsidian]] provide the browsing and graph-view interface; LLMs provide the filing and maintenance.

## How It Appears in Sources

- [[sources/llm-wiki-pattern|LLM Wiki Pattern]] — the pattern is explicitly a new approach to PKBs, offloading maintenance to LLMs. Use cases given: personal self-tracking, research, book reading, business/team wikis.

## Related Concepts

- [[concepts/knowledge-compilation|Knowledge Compilation]] — the mechanism by which this wiki approach builds a PKB
- [[concepts/rag|RAG]] — an alternative, less structured approach to personal document collections
- [[concepts/knowledge-compounding|Knowledge Compounding]] — the compounding value that makes a PKB worth maintaining

## Related Entities

- [[entities/memex|Memex]] — Vannevar Bush's 1945 proto-PKB vision
- [[entities/obsidian|Obsidian]] — the recommended PKB browser/IDE in this pattern

## Evolution / Contradictions

- Historical PKB tools (Roam, Obsidian, Notion, Zettelkasten) all rely on human maintenance. The LLM Wiki pattern shifts the maintenance role to the LLM.
- "Second brain" is a common metaphor (Tiago Forte's *Building a Second Brain*) — the LLM Wiki pattern makes the LLM the "first brain" that organizes the second.

## Open Questions

- How does a team PKB differ from a personal one in terms of schema, governance, and conflict resolution?
- What is the right level of human review on LLM-generated wiki updates?
