# @cocoindex/brand

CocoIndex's design primitives


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
