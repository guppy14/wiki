---
type: entity
title: Dataview
tags: [tool, plugin, obsidian, knowledge-management]
created: 2026-04-10
updated: 2026-04-10
sources: [llm-wiki-pattern.md]
---

# Dataview

**Type:** software tool — Obsidian plugin for frontmatter queries

## Description

An [[entities/obsidian|Obsidian]] plugin that treats your markdown vault as a queryable database. Reads YAML frontmatter fields from pages and generates dynamic tables, lists, and task views within the vault. Useful when the LLM adds structured frontmatter to wiki pages.

## Appearances in Sources

- [[sources/llm-wiki-pattern|LLM Wiki Pattern]] — "Dataview is an Obsidian plugin that runs queries over page frontmatter. If your LLM adds YAML frontmatter to wiki pages (tags, dates, source counts), Dataview can generate dynamic tables and lists."

## Connections

- [[entities/obsidian|Obsidian]] — the platform it runs on

## Notes & Open Questions

- Only useful if the LLM consistently adds YAML frontmatter — which this schema requires, so Dataview is immediately applicable.
