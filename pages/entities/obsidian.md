---
type: entity
title: Obsidian
tags: [tool, software, knowledge-management]
created: 2026-04-10
updated: 2026-04-10
sources: [llm-wiki-pattern.md]
---

# Obsidian

**Type:** software tool — personal knowledge management / markdown editor

## Description

A desktop markdown editor and personal knowledge base application with a graph view, bidirectional links, and a rich plugin ecosystem. In the LLM Wiki pattern, Obsidian serves as the "IDE" for the wiki — the human browses and reads there while the LLM writes and maintains the files.

## Key Facts

- Stores all notes as local markdown files (no vendor lock-in).
- Graph view visualizes connections between pages — useful for spotting orphans and hubs.
- Plugin ecosystem includes: Web Clipper, Dataview, Marp, and many others.
- **Web Clipper:** browser extension that converts web articles to markdown for quick source ingestion.
- **Attachment download hotkey:** Obsidian Settings → Hotkeys → "Download attachments for current file" — downloads all images from a page to `raw/assets/`.
- **Dataview plugin:** queries page frontmatter to generate dynamic tables and lists.

## Appearances in Sources

- [[sources/llm-wiki-pattern|LLM Wiki Pattern]] — recommended as the wiki viewer/IDE. "Obsidian is the IDE; the LLM is the programmer; the wiki is the codebase." Graph view cited as the best way to see wiki shape.

## Connections

- [[concepts/personal-knowledge-base|Personal Knowledge Base]] — the primary use case
- [[entities/dataview|Dataview]] — Obsidian plugin for frontmatter queries
- [[entities/marp|Marp]] — slide deck format with Obsidian plugin support
- [[entities/qmd|qmd]] — external search engine that complements Obsidian at scale

## Notes & Open Questions

- Obsidian is closed-source but files are open markdown — the wiki remains portable regardless.
- The LLM writes files via the terminal/editor; Obsidian hot-reloads them. No special integration needed.
