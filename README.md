# @cocoindex/brand

Canonical source of CocoIndex's design layer — shared across the homepage, blog
(`cocoindex-io.github.io`) and docs (`cocoindex/docs`). One source so the brand
can't drift between surfaces.

## What's here

| File | What | Consumed by |
|---|---|---|
| `tokens.json` | design tokens as data — **edit this** | `code-theme.mjs`, Python diagram/cover generators |
| `tokens.css` | `:root { --token: … }` — **generated** (`npm run build:tokens`), do not edit | each site's `globals.css` (`@import`) |
| `base.css` | surface-agnostic primitives (callouts/admonitions) consuming the tokens | each site's `globals.css` (`@import`, after tokens.css) |
| `code-theme.mjs` | Shiki theme derived from `tokens.json` | each `astro.config.mjs` |

Buttons, tags, and inline-code are intentionally not here yet — in the consuming
sites they're bespoke and surface-scoped, so unifying them is a deliberate step,
not a silent port.

## Consuming it (git dependency)

Each site pins a tag — no npm registry needed:

```jsonc
// package.json
"dependencies": {
  "@cocoindex/brand": "github:cocoindex-io/cocoindex-brand#v0.1.0"
}
```

```css
/* globals.css */
@import '@cocoindex/brand/tokens.css';
@import '@cocoindex/brand/base.css';
```

```js
// astro.config.mjs
import { cocoindexCodeTheme } from '@cocoindex/brand/code-theme';
```

On install, npm runs `prepare` (regenerates `tokens.css` from `tokens.json`), so
consumers always get fresh tokens.

## Developing

```bash
npm run build:tokens     # regenerate tokens.css from tokens.json
npm run watch:tokens     # regenerate on every save (during local dev)
```

## Releasing

Bump `version`, commit, then tag:

```bash
git tag v0.1.1 && git push --tags
```

Consumers bump the `#v0.1.1` ref in their `package.json` to pick it up.
