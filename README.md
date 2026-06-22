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

See `package.json` `exports` for the full set: CSS primitives (tokens, base,
buttons, tags, code-block, cards, nav, stars, footer, docs-chrome), `code-theme`,
`copy-code`, and the `Footer` / `ExampleRepoCard` / `DocsLinkCard` Astro components.
