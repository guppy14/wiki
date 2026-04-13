# GEMINI.md — LLM Wiki Project Context

This file provides instructional context for Gemini when interacting with this project. It complements `CLAUDE.md` by focusing on technical execution and project-specific knowledge.

---

## Project Overview

**Name:** LLM Wiki (Industrial Automation & AI)
**Concept:** An LLM-maintained personal knowledge base (PKB) following the "LLM Wiki Pattern". It acts as a persistent, structured alternative to ephemeral RAG systems by "compiling" knowledge from raw sources into interconnected markdown pages.
**Architecture:**
- `raw/`: Immutable source storage.
- `pages/`: Structured knowledge layer (Sources, Entities, Concepts, Synthesis).
- `build.js`: A custom Node.js static site generator that converts Obsidian-style wikilinks (`[[link]]`) into a Wikipedia-inspired HTML site in `site/`.
- `index.md` & `log.md`: Core bookkeeping files for navigation and activity tracking.

---

## Technical Stack & Commands

### Prerequisites
- Node.js (tested with current LTS)
- npm

### Development Commands
- **Build the wiki:** `npm run build` (runs `node build.js`)
- **Preview local site:** `npm run serve` (builds and serves `site/` on `localhost:3000`)
- **Search (Ripgrep):** `grep_search` is highly effective here due to the markdown-heavy nature.

### Deployment
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages on every push to `main`.
- **Git Protocol:** Always commit changes with prefixes like `ingest:`, `query:`, or `lint:` as per `CLAUDE.md`.

---

## Core Conventions (from CLAUDE.md)

1. **File Naming:** Lowercase with hyphens (e.g., `digital-twin.md`).
2. **Frontmatter:** Every page MUST have YAML frontmatter including `type`, `title`, `tags`, `created`, `updated`, and `sources`.
3. **Wikilinks:** Use `[[page-slug]]` or `[[folder/page-slug|Display Name]]`. The build system automatically resolves these to relative HTML links.
4. **Directory Structure:**
   - `pages/sources/`: One summary per source file in `raw/`.
   - `pages/entities/`: Organizations, People, Tools, Events.
   - `pages/concepts/`: Technical terms, Methodologies.
   - `pages/synthesis/`: Multi-source analysis and Q&A results.

---

## Agent Workflows

### 1. Ingestion Workflow
- Read `raw/` file → Summarize (3-5 points) → Ask for confirmation.
- Create Source page → Update/Create Entity & Concept pages.
- Update `index.md` and `log.md`.
- Run `npm run build` → Git commit & push.

### 2. Query Workflow
- Consult `index.md` first to locate relevant pages.
- Synthesize answer based on `pages/`, not `raw/`.
- Propose a Synthesis page if the answer is complex or reusable.

### 3. Lint Workflow
- Check for broken `[[links]]` (missing files in `pages/`).
- Identify contradictions between pages (e.g., conflicting dates or definitions).
- Highlight "data gaps" where concepts are mentioned but not defined.

---

## Domain Context (Current Wiki State)

The wiki currently focuses on:
- **Industrial AI:** Siemens/NVIDIA partnerships, Industrial Metaverse.
- **Digital Twins:** Physics-based simulation vs. real-time data.
- **Automation Engineering:** PLC/SPS, TIA Portal, Actemium's Process Device Library.
- **PKM Methods:** Knowledge Compilation, RAG trade-offs, Memex lineage.

---

## Important Files
- `CLAUDE.md`: The authoritative "Rules of Engagement".
- `index.md`: The central catalog of all pages.
- `log.md`: The chronological record of all agent actions.
- `build.js`: The build logic and link resolution engine.
- `templates/`: Blueprints for every page type.
