# @cocoindex/brand

CocoIndex's design primitives — the single source of truth shared across the
marketing site + homepage + blog (`cocoindex-io.github.io`) and the docs +
examples (`cocoindex/docs`). One source so the brand can't drift between surfaces.

## What's here

| File | What | Consumed by |
|---|---|---|
| `tokens.json` | design tokens as data (incl. the `code` syntax palette) — **edit this** | `code-theme.mjs`, Python diagram/cover generators |
| `tokens.css` | `:root { --token: … }` — **generated** (`npm run build:tokens`), do not edit | each site's `globals.css` (`@import`) |
| `base.css` | callouts / admonitions | `globals.css` (after tokens.css) |
| `buttons.css` | the `.btn` system (variants + sizes + icon/social) | `globals.css` |
| `tags.css` | `.t-pill` / `.t-category` / `.t-overlay` / `.t-status` | `globals.css` |
| `code-block.css` | inline code, Shiki fences, the `.code-figure` window-bar + copy button | `globals.css` |
| `cards.css` | `.example-repo-card` / `.docs-link-card` inline link cards | `globals.css` |
| `components.css` | barrel that `@import`s base + buttons + tags + code-block + cards | `globals.css` (one import) |
| `code-theme.mjs` | Shiki theme — the one shared syntax palette, from `tokens.json` | each `astro.config.mjs` |
| `copy-code.mjs` | client behavior for the `.code-figure` copy button (self-initializing) | one shared layout (`<script>import`) |

Every primitive is token-only and surface-agnostic (no `.blog-theme` /
`body.ex-listing` wrapper in the selectors), so it renders identically on home,
blog, and docs. Edit a primitive here once; every surface inherits it on the next
version bump.

## Consuming it (git dependency)

Each site pins a tag — no npm registry needed:

```jsonc
// package.json
"dependencies": {
  "@cocoindex/brand": "github:cocoindex-io/cocoindex-brand#v0.2.0"
}
```

```css
/* globals.css — tokens first, then the components barrel */
@import '@cocoindex/brand/tokens.css';
@import '@cocoindex/brand/components.css';
```

```js
// astro.config.mjs — one shared syntax theme for Shiki
import { cocoindexCodeTheme } from '@cocoindex/brand/code-theme';
// markdown: { shikiConfig: { theme: cocoindexCodeTheme } }
```

```astro
---
// one shared layout — wire the copy button once
---
<script>import '@cocoindex/brand/copy-code';</script>
```

Then drop the site's own `.btn` / `.t-*` / `.callout` / `.code-figure` /
`.example-repo-card` CSS and use the shared classes. Self-host the three fonts via
`@fontsource` (`inter`, `jetbrains-mono`, `source-serif-4`) — no Google CDN
(GUIDELINE §5.2).

The homepage and blog are the same site (`cocoindex-io.github.io`), so both move
together when that repo bumps the dep. Any future surface adopts the layer the
same way: bump to `#v0.2.0`, replace its token/component CSS with the two
`@import`s above, import `cocoindexCodeTheme` in `astro.config`, import
`copy-code` once, and rename bespoke button/tag classes onto `.btn-*` / `.t-*`.

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
