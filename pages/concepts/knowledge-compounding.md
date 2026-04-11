---
type: concept
title: Knowledge Compounding
tags: [concept, knowledge-management, llm]
created: 2026-04-10
updated: 2026-04-10
sources: [llm-wiki-pattern.md]
---

# Knowledge Compounding

## Definition

The property of a knowledge base where each new addition (source, question, lint pass) makes the entire base more valuable — not just by adding new facts, but by strengthening existing connections, resolving contradictions, and deepening synthesis. Value grows super-linearly with the number of sources because each new source can relate to all prior ones.

## Key Ideas

- New sources don't sit in isolation — they're integrated into existing pages.
- Good answers to queries, when filed as synthesis pages, compound in the wiki just like ingested sources.
- Contradictions, once flagged, become a permanent part of the knowledge structure — the wiki "knows" where sources disagree.

## How It Appears in Sources

- [[sources/llm-wiki-pattern|LLM Wiki Pattern]] — "The wiki keeps getting richer with every source you add and every question you ask." Also: "good answers can be filed back into the wiki as new pages... your explorations compound in the knowledge base just like ingested sources do."

## Related Concepts

- [[concepts/knowledge-compilation|Knowledge Compilation]] — the mechanism that enables compounding
- [[concepts/personal-knowledge-base|Personal Knowledge Base]] — the artifact that compounds

## Related Entities

- [[entities/memex|Memex]] — Bush's associative trails are an early vision of knowledge compounding

## Evolution / Contradictions

- Compounding only works if the LLM maintains cross-references consistently — a quality/reliability assumption worth tracking as the wiki scales.

## Open Questions

- Is there a point of diminishing returns where the wiki becomes too large to navigate effectively without a search engine?
