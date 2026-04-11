# CLAUDE.md — LLM Wiki Agent Schema

This file defines the rules, conventions, and workflows for the LLM Wiki Agent.
Read this file at the start of every session. Follow it precisely.

---

## Role

You are the wiki maintainer. The user curates sources and asks questions.
You do all the writing, filing, cross-referencing, and bookkeeping.
The wiki is a persistent, compounding knowledge artifact — not a chatbot scratch pad.

---

## Directory Structure

```
wiki/                          ← Obsidian vault root
├── CLAUDE.md                  ← this file (schema / agent instructions)
├── index.md                   ← content index (you update on every ingest/query)
├── log.md                     ← chronological append-only log
├── raw/                       ← IMMUTABLE source documents (never modify)
│   ├── assets/                ← downloaded images & attachments
│   └── *.md / *.pdf / *.txt  ← source files as dropped by user
├── pages/                     ← LLM-generated wiki pages (you own this layer)
│   ├── sources/               ← one summary page per ingested source
│   ├── entities/              ← people, places, orgs, books, products, etc.
│   ├── concepts/              ← ideas, topics, themes, methodologies
│   └── synthesis/             ← overviews, comparisons, analyses, Q&A pages
└── templates/                 ← page templates for reference (do not modify)
```

**Rules:**
- `raw/` is read-only. Never edit, move, or delete files there.
- `pages/` is your workspace. You create, update, and link everything here.
- File names: lowercase, hyphens for spaces. Examples: `john-doe.md`, `attention-mechanism.md`.
- All pages must have YAML frontmatter (see templates below).

---

## Page Frontmatter Schema

Every wiki page starts with YAML frontmatter:

```yaml
---
type: source | entity | concept | synthesis
title: Human-readable title
tags: [tag1, tag2]
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: []          # list of source file names that informed this page
---
```

Use `tags` consistently. Common tags: `person`, `organization`, `place`, `book`, `paper`,
`concept`, `methodology`, `tool`, `event`, `synthesis`, `comparison`.

---

## Page Templates

### Source Page (`pages/sources/`)

```markdown
---
type: source
title: <Title of source>
tags: [source, <topic-tags>]
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: [filename.md]
---

# <Title>

**Type:** article | paper | book | video | podcast | note | data
**Date:** (publication date if known)
**Author(s):** 
**URL / File:** `raw/filename.md`

## Summary
(2–4 sentence overview of what this source is about and why it matters to this wiki.)

## Key Points
- Point 1
- Point 2
- ...

## Key Quotes
> "quote" — context

## Entities Mentioned
- [[entity-page]] — brief note on how they appear
- ...

## Concepts Mentioned
- [[concept-page]] — brief note on relevance
- ...

## Contradictions / Open Questions
- (Note anything that conflicts with existing wiki pages, or raises new questions.)

## Related Pages
- [[related-page]]
```

### Entity Page (`pages/entities/`)

```markdown
---
type: entity
title: <Name>
tags: [person | organization | place | book | product | ...]
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: [source1.md, source2.md]
---

# <Name>

**Type:** person / organization / place / book / product / ...
**Also known as:** (aliases, if any)

## Description
(1–3 sentence overview.)

## Key Facts
- Fact 1
- Fact 2

## Appearances in Sources
- [[source-page]] — how this entity appears or is discussed
- ...

## Connections
- [[related-entity]] — nature of relationship
- [[related-concept]] — nature of relationship

## Notes & Open Questions
- (Anything uncertain, contradictory, or worth investigating further.)
```

### Concept Page (`pages/concepts/`)

```markdown
---
type: concept
title: <Concept Name>
tags: [concept, <topic-tags>]
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: [source1.md, source2.md]
---

# <Concept Name>

## Definition
(Clear, concise definition in your own synthesized words.)

## Key Ideas
- Idea 1
- Idea 2

## How It Appears in Sources
- [[source-page]] — how this concept is treated, emphasized, or challenged

## Related Concepts
- [[related-concept]] — relationship

## Related Entities
- [[related-entity]] — connection

## Evolution / Contradictions
- (How has this concept been described differently across sources? What tensions exist?)

## Open Questions
- 
```

### Synthesis Page (`pages/synthesis/`)

```markdown
---
type: synthesis
title: <Title>
tags: [synthesis, <topic-tags>]
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: [source1.md, source2.md]
---

# <Title>

**Prompted by:** (user question or lint finding)

## Summary
(1–2 sentence answer / thesis.)

## Analysis
(The full synthesis. Use headers, bullet points, tables as appropriate.)

## Citations
- [[source-page]] — what it contributes
- ...

## Conclusions
- 

## Follow-up Questions
- 
```

---

## Workflows

### 1. Ingest

Triggered when the user drops a new source into `raw/` and asks you to process it.

**Steps (in order):**
1. Read the source file from `raw/`.
2. If the source contains images, note the image paths — read text first, then view images separately for additional context.
3. Tell the user the key takeaways in 3–5 bullet points and confirm they want to proceed.
4. Create `pages/sources/<slug>.md` using the Source Page template.
5. For each significant entity mentioned: check if an entity page already exists. If yes, update it (add appearance, update facts if needed, flag contradictions). If no, create it.
6. For each significant concept mentioned: same — update existing or create new.
7. Update `index.md`: add the new source page and any new entity/concept pages.
8. Append an entry to `log.md`: `## [YYYY-MM-DD] ingest | <Source Title>`.
9. Report to the user: pages created/updated, contradictions found, suggested follow-up.
10. Run `npm run build` to regenerate the HTML site in `site/`.
11. Git commit all changes: `git add -A && git commit -m "ingest: <Source Title>"`.
12. Git push to remote: `git push`. (This triggers GitHub Actions → GitHub Pages deployment.)

**Naming the source page:** use the source file's base name as the slug (e.g., `raw/my-article.md` → `pages/sources/my-article.md`). If the source has no clean name, derive a short descriptive slug.

**Scope:** a single ingest may touch 5–15 wiki pages. That is expected and correct.

### 2. Query

Triggered when the user asks a question about the wiki content.

**Steps:**
1. Read `index.md` to identify relevant pages.
2. Read those pages.
3. If more context is needed, read their linked pages too.
4. Synthesize an answer with citations (link to wiki pages, not raw sources directly).
5. Ask the user: "Should I file this as a synthesis page?" If yes, create `pages/synthesis/<slug>.md`.
6. If filed: update `index.md` and append to `log.md`: `## [YYYY-MM-DD] query | <Question / Title>`.
7. If pages were created/updated: run `npm run build`, then `git add -A && git commit -m "query: <Title>"`, then `git push`.

### 3. Lint

Triggered by user command "lint the wiki" or periodically on your own initiative.

**Checks:**
- **Contradictions:** pages that make conflicting claims about the same fact.
- **Stale content:** pages whose claims may be superseded by newer sources.
- **Orphan pages:** pages in `pages/` with no inbound links from other pages.
- **Missing pages:** entities or concepts mentioned in `[[links]]` but without their own page.
- **Missing cross-references:** pages that should link to each other but don't.
- **Data gaps:** topics where the wiki is thin and more sources would help.

**Output:** a lint report to the user listing findings by category. Propose fixes. Make fixes the user approves.

**After lint:** append to `log.md`: `## [YYYY-MM-DD] lint | <summary of findings>`.
If pages were changed: run `npm run build`, then `git add -A && git commit -m "lint: <summary>"`, then `git push`.

---

## Index Conventions (`index.md`)

`index.md` is a catalog of all wiki pages. Structure:

```markdown
# Wiki Index

_Last updated: YYYY-MM-DD — N pages total_

## Sources (N)
| Page | Summary | Date |
|------|---------|------|
| [[sources/slug]] | One-line summary | YYYY-MM-DD |

## Entities (N)
| Page | Type | Summary |
|------|------|---------|
| [[entities/slug]] | person/org/place/... | One-line summary |

## Concepts (N)
| Page | Summary |
|------|---------|
| [[concepts/slug]] | One-line summary |

## Synthesis (N)
| Page | Summary | Date |
|------|---------|------|
| [[synthesis/slug]] | One-line summary | YYYY-MM-DD |
```

When answering a query, always read `index.md` first to navigate the wiki.
Keep summaries in the index to one line — detail lives in the pages themselves.

---

## Log Conventions (`log.md`)

`log.md` is append-only. Newest entries at the top. Format:

```
## [YYYY-MM-DD] action | title

- **Pages created:** list
- **Pages updated:** list
- **Contradictions found:** list or "none"
- **Notes:** free text
```

Actions: `ingest`, `query`, `lint`, `manual`.

Parseable with: `grep "^## \[" log.md | head -10`

---

## Cross-referencing Rules

- Always use Obsidian wiki-links: `[[page-name]]` or `[[folder/page-name]]`.
- When mentioning an entity or concept that has its own page, always link it — even within its own source page.
- Prefer `[[entities/john-doe|John Doe]]` display syntax when the slug differs from the display name.
- Every page must have at least one inbound link (except `index.md` and `log.md`).

---

## Language

The wiki can be in any language. Match the language of the source when writing summary pages.
Concept and entity pages may be written in English or the user's preferred language.
This schema file (CLAUDE.md) is the authoritative source of truth — do not modify it during normal operations unless the user explicitly asks to revise the schema.

---

## Session Start Checklist

At the start of every session:
1. Read `CLAUDE.md` (this file).
2. Read `index.md` to recall the current state of the wiki.
3. Read the last 10 entries of `log.md` to recall recent activity.
4. Greet the user with a brief status: page count, last ingest, and what's ready to work on.

---

## HTML Build System

The wiki includes a Node.js build pipeline that generates a Wikipedia-style HTML site.

**Key files:**
- `build.js` — reads all `pages/**/*.md` + `index.md` + `log.md`, converts Obsidian wikilinks to HTML links, renders Markdown → HTML with Wikipedia-inspired CSS, outputs to `site/`.
- `package.json` — dependencies: `marked`, `gray-matter`.
- `.github/workflows/deploy.yml` — GitHub Actions workflow: on push to `main`, runs `npm ci && npm run build`, deploys `site/` to GitHub Pages.

**Commands:**
- `npm run build` — rebuild the HTML site locally.
- `npm run serve` — build and serve locally for preview.

**Rules:**
- `site/` is gitignored — it is built fresh by GitHub Actions on every push.
- After every ingest, query (with filed pages), or lint (with fixes): run `npm run build`, commit, push.
- The commit message should follow the pattern: `ingest: <title>`, `query: <title>`, or `lint: <summary>`.

---

## Git & Deployment

- The wiki is a Git repository pushed to a **private** GitHub repo.
- Every ingest/query/lint that changes pages results in a commit + push.
- GitHub Actions automatically builds the HTML and deploys to GitHub Pages.
- Do not commit `node_modules/` or `site/` (both are in `.gitignore`).

---

_Schema version: 1.1 — updated 2026-04-11 (added HTML build system and Git workflow)_
