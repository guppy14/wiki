#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------
const WIKI_ROOT = path.resolve(__dirname);
const PAGES_DIR = path.join(WIKI_ROOT, 'pages');
const SITE_DIR  = path.join(WIKI_ROOT, 'site');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function getMarkdownFiles(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...getMarkdownFiles(full));
    else if (entry.name.endsWith('.md')) files.push(full);
  }
  return files;
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
          .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ---------------------------------------------------------------------------
// Wikilink resolution — [[target|display]] → <a href="...">display</a>
// ---------------------------------------------------------------------------
function resolveWikilinks(markdown, currentDir) {
  return markdown.replace(/\[\[([^\]]+?)\]\]/g, (_match, inner) => {
    // Obsidian escapes pipes inside table cells as \|
    inner = inner.replace(/\\\|/g, '|');

    let target, display;
    const pipe = inner.indexOf('|');
    if (pipe !== -1) {
      target  = inner.substring(0, pipe).trim();
      display = inner.substring(pipe + 1).trim();
    } else {
      target  = inner.trim();
      display = path.basename(target).replace(/-/g, ' ')
                    .replace(/\b\w/g, c => c.toUpperCase());
    }

    // Strip optional pages/ prefix (used in index.md)
    target = target.replace(/^pages\//, '');
    const targetHtml = target + '.html';

    let href;
    if (!currentDir || currentDir === '.' || currentDir === '') {
      href = targetHtml;
    } else {
      href = path.relative(currentDir, targetHtml).replace(/\\/g, '/');
    }

    return `<a href="${href}">${display}</a>`;
  });
}

// ---------------------------------------------------------------------------
// Infobox (Wikipedia-style right-aligned metadata table)
// ---------------------------------------------------------------------------
function buildInfobox(fm) {
  if (!fm || !fm.type) return '';
  const rows = [];
  if (fm.type)    rows.push(['Typ', `<em>${fm.type}</em>`]);
  if (fm.created) rows.push(['Erstellt', fm.created]);
  if (fm.updated) rows.push(['Aktualisiert', fm.updated]);
  if (fm.tags && fm.tags.length)
    rows.push(['Tags', fm.tags.map(t => `<span class="tag">${t}</span>`).join(' ')]);
  if (fm.sources && fm.sources.length)
    rows.push(['Quellen', fm.sources.map(s => `<code>${s}</code>`).join(', ')]);
  if (rows.length === 0) return '';

  return `<table class="infobox">
  <caption>${escapeHtml(fm.title || '')}</caption>
  ${rows.map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join('\n  ')}
</table>\n`;
}

// ---------------------------------------------------------------------------
// Sidebar navigation
// ---------------------------------------------------------------------------
function collectNav(pages) {
  const sections = { sources: [], entities: [], concepts: [], synthesis: [] };
  for (const p of pages) {
    if (p.isRoot) continue;
    const seg = p.relPath.split('/')[0];
    if (!(seg in sections)) continue;
    const { data } = matter(p.raw);
    sections[seg].push({
      title: data.title || path.basename(p.relPath, '.html'),
      href:  p.relPath,
    });
  }
  for (const k of Object.keys(sections))
    sections[k].sort((a, b) => a.title.localeCompare(b.title, 'de'));
  return sections;
}

function renderNav(nav, toRoot) {
  const labels = [
    ['sources',   'Quellen'],
    ['entities',  'Entitäten'],
    ['concepts',  'Konzepte'],
    ['synthesis', 'Synthesen'],
  ];
  let h = '<ul class="nav-list">';
  h += `<li><a href="${toRoot}index.html">Startseite</a></li>`;
  for (const [key, label] of labels) {
    if (!nav[key].length) continue;
    h += `<li class="nav-section"><span class="nav-heading">${label}</span><ul>`;
    for (const it of nav[key])
      h += `<li><a href="${toRoot}${it.href}">${it.title}</a></li>`;
    h += '</ul></li>';
  }
  h += `<li style="margin-top:.6em"><a href="${toRoot}log.html">Protokoll</a></li>`;
  h += '</ul>';
  return h;
}

// ---------------------------------------------------------------------------
// CSS — Wikipedia-inspired
// ---------------------------------------------------------------------------
const CSS = `
*{margin:0;padding:0;box-sizing:border-box}
body{
  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
  font-size:14.5px;line-height:1.65;color:#202122;background:#f6f6f6;
}
a{color:#0645ad;text-decoration:none}
a:hover{text-decoration:underline}

/* --- header --- */
.header{background:#fff;border-bottom:3px solid #447ff5;padding:.55em 1.2em}
.header-inner{max-width:1200px;margin:0 auto;display:flex;align-items:baseline;gap:.8em}
.logo{font-size:1.55em;font-weight:700;color:#000;font-family:Georgia,'Linux Libertine',serif}
.logo:hover{text-decoration:none}
.header-sub{font-size:.85em;color:#54595d}

/* --- layout --- */
.wrap{max-width:1200px;margin:0 auto;display:flex;min-height:85vh}

/* --- sidebar --- */
.sidebar{
  width:210px;flex-shrink:0;background:#f8f9fa;
  padding:1em .9em;border-right:1px solid #dce1e6;font-size:.88em;
}
.sidebar-title{font-weight:700;margin-bottom:.5em;color:#202122}
.nav-list,.nav-list ul{list-style:none}
.nav-list>li{margin-bottom:.15em}
.nav-heading{
  display:block;margin-top:.75em;margin-bottom:.2em;
  font-weight:700;font-size:.8em;text-transform:uppercase;letter-spacing:.04em;color:#54595d;
}
.nav-list ul{padding-left:.85em}
.nav-list ul li{margin-bottom:.1em}

/* --- content --- */
.content{flex:1;background:#fff;padding:1.4em 2.2em 2em;overflow-x:auto}

.content h1{
  font-family:Georgia,'Linux Libertine',serif;
  font-size:1.85em;font-weight:400;
  border-bottom:1px solid #a2a9b1;padding-bottom:.2em;margin-bottom:.4em;
}
.content h2{
  font-size:1.4em;font-weight:400;
  border-bottom:1px solid #a2a9b1;padding-bottom:.15em;margin:1.2em 0 .45em;
}
.content h3{font-size:1.1em;margin:1em 0 .35em}
.content p{margin:.45em 0}
.content ul,.content ol{margin:.45em 0 .45em 1.6em}
.content li{margin-bottom:.2em}
.content strong{font-weight:600}
.content hr{border:none;border-top:1px solid #a2a9b1;margin:1.2em 0}

/* --- tables --- */
table{border-collapse:collapse;margin:.8em 0}
table:not(.infobox){width:100%}
th,td{border:1px solid #a2a9b1;padding:.35em .6em;text-align:left}
th{background:#eaecf0;font-weight:600}
tr:nth-child(even):not(:first-child){background:#f8f9fa}

/* --- infobox --- */
.infobox{
  float:right;width:270px;margin:0 0 1em 1.4em;
  background:#f8f9fa;border:1px solid #a2a9b1;font-size:.88em;
}
.infobox caption{
  background:#447ff5;color:#fff;padding:.45em .6em;
  font-weight:700;text-align:center;caption-side:top;
}
.infobox th{background:#eaecf0;width:35%;vertical-align:top}
.infobox td{background:#f8f9fa}

/* --- tags --- */
.tag{
  display:inline-block;background:#eaecf0;color:#333;
  padding:.05em .45em;border-radius:3px;font-size:.82em;margin:.05em .1em;
}

/* --- blockquote --- */
blockquote{
  border-left:3px solid #447ff5;margin:.8em 0;padding:.45em 1em;
  background:#f8f9fa;color:#444;
}

/* --- code --- */
code{background:#f4f4f4;padding:.1em .3em;border-radius:2px;font-size:.92em}
pre{background:#f4f4f4;padding:1em;border:1px solid #e0e0e0;overflow-x:auto;margin:.8em 0}
pre code{background:none;padding:0}

/* --- footer --- */
.footer{background:#f8f9fa;border-top:1px solid #dce1e6;padding:.8em 1.2em;font-size:.82em;color:#72777d;text-align:center}
.footer a{color:#447ff5}

/* --- responsive --- */
@media(max-width:768px){
  .wrap{flex-direction:column}
  .sidebar{width:100%;border-right:none;border-bottom:1px solid #dce1e6}
  .content{padding:1em}
  .infobox{float:none;width:100%;margin:1em 0}
}
`;

// ---------------------------------------------------------------------------
// HTML template
// ---------------------------------------------------------------------------
function renderPage(title, body, infobox, navHtml, toRoot) {
  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)} — Wiki</title>
<style>${CSS}</style>
</head>
<body>
<header class="header">
  <div class="header-inner">
    <a href="${toRoot}index.html" class="logo">Wiki</a>
    <span class="header-sub">Persönliche Wissensdatenbank</span>
  </div>
</header>
<div class="wrap">
  <nav class="sidebar">
    <div class="sidebar-title">Navigation</div>
    ${navHtml}
  </nav>
  <main class="content">
    ${infobox}${body}
  </main>
</div>
<footer class="footer">
  Generiert mit dem LLM Wiki Pattern &mdash; ${new Date().toISOString().split('T')[0]}
</footer>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Main build
// ---------------------------------------------------------------------------
function main() {
  console.log('Building wiki …');

  // 1. Clean output
  if (fs.existsSync(SITE_DIR)) fs.rmSync(SITE_DIR, { recursive: true });

  // 2. Collect pages
  const pages = [];

  for (const f of getMarkdownFiles(PAGES_DIR)) {
    const rel = path.relative(PAGES_DIR, f).replace(/\\/g, '/');
    pages.push({
      relPath: rel.replace(/\.md$/, '.html'),
      raw:     fs.readFileSync(f, 'utf-8'),
      isRoot:  false,
    });
  }

  // Root-level pages
  for (const name of ['index.md', 'log.md']) {
    const fp = path.join(WIKI_ROOT, name);
    if (!fs.existsSync(fp)) continue;
    pages.push({
      relPath: name.replace(/\.md$/, '.html'),
      raw:     fs.readFileSync(fp, 'utf-8'),
      isRoot:  true,
    });
  }

  // 3. Navigation
  const nav = collectNav(pages);

  // 4. Configure marked (GFM tables, etc.)
  marked.setOptions({ gfm: true, breaks: false });

  // 5. Render each page
  for (const page of pages) {
    const { data: fm, content: md } = matter(page.raw);
    const curDir = path.dirname(page.relPath);
    const resolved = resolveWikilinks(md, curDir === '.' ? '' : curDir);
    const body     = marked.parse(resolved);
    const infobox  = buildInfobox(fm);
    const depth    = page.relPath.split('/').length - 1;
    const toRoot   = depth > 0 ? '../'.repeat(depth) : './';
    const navHtml  = renderNav(nav, toRoot);
    const title    = fm.title || path.basename(page.relPath, '.html');
    const html     = renderPage(title, body, infobox, navHtml, toRoot);

    const out = path.join(SITE_DIR, page.relPath);
    ensureDir(path.dirname(out));
    fs.writeFileSync(out, html, 'utf-8');
  }

  console.log(`Done — ${pages.length} pages → site/`);
}

main();
