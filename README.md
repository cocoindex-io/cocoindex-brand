# @cocoindex/brand

CocoIndex's design primitives

## Using it

```jsonc
// package.json
"dependencies": { "@cocoindex/brand": "github:cocoindex-io/cocoindex-brand#v0.2.1" }
```

```css
/* globals.css */
@import '@cocoindex/brand/tokens.css';
@import '@cocoindex/brand/components.css';
:root { --chrome-maxw: var(--maxw-docs); }  /* docs only — widens nav + footer */
```

```js
// astro.config.mjs — one shared Shiki theme
import { cocoindexCodeTheme } from '@cocoindex/brand/code-theme';
```

See `package.json` `exports` for the full set: CSS primitives (tokens, motion,
logo, base, buttons, tags, code-block, cards, prose, nav, stars, footer,
docs-chrome), `code-theme`, `copy-code`, `remark-mermaid` (the build-time
mermaid-fence transform), and the `Logo` / `Nav` / `Footer` / `Stars` /
`MobileSheet` / `ExampleRepoCard` / `DocsLinkCard` / `MermaidRenderer` Astro
components.

Mermaid diagrams: wire `remark-mermaid` into `markdown.remarkPlugins` (and the
`mdx()` plugins) so ` ```mermaid ` fences become `.mermaid-figure` markup, drop
`<MermaidRenderer />` into the page layout to hydrate them, and add `mermaid` to
the consuming app's own dependencies (the renderer imports it lazily). Styling
ships in `prose.css` (`.mermaid-figure`).

`<Logo>` is the one brand lockup (mark + "CocoIndex" wordmark) — `size="sm|md|lg"`,
`href` (omit/null → static), `markOnly`. Used by `Nav` and `Footer`; reach for it
anywhere the brand appears. Buttons come in four sizes (`btn-sm`/md/`btn-lg`/`btn-xl`)
and chips take the same `.t-sm`/`.t-lg` lever. `motion.css` holds the shared
`coco-pulse` keyframe and `.u-press`/`.u-lift` utilities; the system runs on three
duration tokens (`--dur-press`/`--dur-fast`/`--dur-slow`) and one `--ease`.

## Design guide

`design_guidelines/` is the living style guide — open `design_guidelines/index.html`.
Every showcase page imports the real primitives above (through `ui/_shared.css`),
so it can't drift from what ships. `design_guidelines/GUIDELINE.md` is the written
law (tokens, color, type, component rules).
