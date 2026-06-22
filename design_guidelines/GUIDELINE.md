# CocoIndex Design Guideline

The single source of truth for **home, blog, and docs**. This folder lives inside
the **`@cocoindex/brand`** package: the primitives ship as `tokens.json` →
`tokens.css` + the component CSS at the package root, and the HTML pages in this
folder are showcases that import them live (via `ui/_shared.css`) — so the guide
always reflects exactly what ships. This file is the law; when code and this file
disagree, fix the code.

> **Brand in one line:** warm maroon ink + coral accent on cream paper.
> Plus Jakarta Sans (display + everything) · JetBrains Mono (labels + code).
> Light-first, warm-first — no cool grays, no pure white, no pure black. No serif, no italic.

---

## 1. Tokens are the contract

Every surface (the marketing/blog site `cocoindex-io.github.io`, the docs site
`cocoindex/docs`) consumes the **same** token values from one place — they
`@import '@cocoindex/brand/tokens.css'` instead of hand-copying a `:root` block,
so they can no longer drift. The rule:

- **Never use a raw hex, rgba, or px in a component.** Reference a token.
- **Tokens are authored once** in `tokens.json` (package root) and generated into
  `tokens.css` by `npm run build:tokens`. The showcase pages here read that same
  `tokens.css` through `ui/_shared.css`; the live sites import it directly.
- When you add or change a token, edit `tokens.json` and rebuild — every surface
  and this guide pick it up. A surface that redeclares a token is a bug.

### Color (verified canonical values)

| Token | Value | Role |
|---|---|---|
| `--maroon` | `#532638` | brand ink, dark fills, primary button |
| `--maroon-deep` | `#401E2B` | maroon hover |
| `--maroon-ink` | `#2A121B` | body text, darkest bg, fenced-code bg |
| `--coral` | `#BE5133` | **the** accent — CTA, links, active, emphasis em (weight 600) |
| `--peach` | `#E59A63` | secondary accent, washes, chips |
| `--pink` | `#FB6A76` | warning/spot |
| `--berry` | `#6A1E23` | inline-code text |
| `--paper` | `#FBF6E8` | page bg |
| `--cream` | `#FCF3D8` | filled sections, cards, button text on dark |
| `--cream-soft` | `#F6F4E9` | muted cards |
| `--palm` / `--palm-ink` | `#27E62B` / `#16A534` | live signal (dark bg / light bg) |
| `--rule` | `rgba(42,18,27,0.14)` | hairline divider |
| `--rule-strong` | `rgba(42,18,27,0.35)` | strong divider, outlines |
| `--muted` | `rgba(42,18,27,0.58)` | secondary text |

**Wash rule:** tinted fills are `color-mix(in oklab, <accent> N%, <base>)` — never
hand-mixed rgba. Use `color-mix` everywhere (no bare `rgba(190,81,51,…)`).

### Spacing · radius · motion · z-index · layout · focus

These were undocumented and drifted the most. They are now tokens in
`_shared.css`; the canon:

- **Spacing — 8px base, 4px half-step:** `--s-1…--s-12` (2,4,6,8,12,16,24,32,48,64,80,96). No off-scale gaps.
- **Radius:** `--r-xs 3` (inline code) · `--r-sm 6`/`--r-md 8` (controls) · `--r-lg 12`/`--r-xl 16` (cards) · `--r-pill 999`.
- **Motion:** `--dur-fast 160ms` · `--dur-slow 280ms` · `--ease cubic-bezier(.2,.8,.2,1)`. Always wrap non-essential motion in `@media (prefers-reduced-motion: reduce)`.
- **Z-index:** `--z-sticky 30` · `--z-nav 50` · `--z-drawer 60` · `--z-modal 80` · `--z-toast 100`. No literal z-index.
- **Layout:** `--maxw 1320` (marketing/blog) · `--maxw-docs 1480` (docs) · `--gutter 40` · **`--measure 66ch`** for all prose.
- **Focus:** `--focus 2px solid coral`, `--focus-offset 2px`, applied via `:focus-visible` on every interactive element (buttons, links, inputs, cards) — not just buttons.
- **Breakpoints:** `1120` (docs drops TOC) · `900` (marketing → drawer) · `600` (phone). Standardize; don't invent per-component breakpoints.

---

## 2. Typography

Two families, never a third. **Hum-theme typography — rounded humanist sans, no serif, no italic.**

- **Plus Jakarta Sans — display.** Heroes and `H1` (homepage display hero, `/blogs`
  header, blog-post `H1`, post titles, docs/examples page hero) use **weight 600**
  with tight tracking (`-0.025em`). This is the `--serif` token (kept by name for
  consumer compatibility; it is now the display role, not a serif).
- **Emphasis = one coral word, weight 600** inside the display hero (`<em>`). Coral
  colour + weight — **never italic**, never underline, never two words.
- **Plus Jakarta Sans — everything below the hero.** This is the `--sans` token.
  Weights 400/500/600 (700 only if truly needed). H2 600, H3 600, body 400.
- **JetBrains Mono — caps labels + code.** Any uppercase-at-0.14em-tracking text
  is mono; never letter-spaced sans. Code is mono.

**Type scale** (use `clamp()` for hero + H2):

| Role | Marketing/blog | Docs (narrow column) |
|---|---|---|
| Display hero | `clamp(56px,7.4vw,112px)` display 600 / 0.98 | — |
| Page hero (H1) | `clamp(40px,4.6vw,60px)` display 600 | same |
| H2 | `clamp(28px,3.2vw,44px)` sans 600 | `28px` sans 600 |
| H3 | `22px` sans 600 | `18px` sans 600 |
| Lede | `clamp(17px,1.4vw,20px)` 400 | same |
| Body | `17px` / 1.55 | `15.5px` / 1.65 |
| Caps label / eyebrow | `11px` mono / 0.14em / UPPERCASE | same |
| Code block | `13px` mono / 1.7 | same |

The docs body is intentionally smaller (narrower measure). Everything else matches.

---

## 3. Components

- **Buttons.** One **coral** CTA per view (the thing to click). Pair with
  `outline` for the secondary action — **do not** put a filled `--maroon`
  (`btn-primary`) next to a filled coral; two solid fills read as two primaries.
  Mono chips for utility actions, 1–3 words. Social buttons: 32px square,
  `--r-sm`, hairline, maroon→coral on hover. Sizes sm/md/lg per `buttons.html`.
- **Tags.** Pick by role, not look: `t-pill` (taxonomy), `t-category` (one filled
  coral kicker per post), `t-overlay` (dark media only), `t-status` (pulse = live).
- **Admonitions — exactly four: Note · Info · Tip · Warning.** Warning only for
  things that break or lose data; lead with the consequence. No code blocks
  inside. **`caution` and `danger` are aliases of Warning, not new variants** —
  do not theme them separately.
- **Code blocks.** Always on `--maroon-ink`. Ship a copy button; titled blocks get
  a window bar. The syntax palette is **one theme shared by blog + docs** (§5).

---

## 4. Accessibility floor (non-negotiable)

- Contrast: body ≥ 4.5:1, large text & UI/graphics ≥ 3:1 (WCAG 2.2 AA). `--muted`
  on `--paper` and any coral-on-cream pairing must be checked at usage size.
- `:focus-visible` ring on **everything** interactive (`--focus`).
- Honor `prefers-reduced-motion` and `prefers-color-scheme`.
- Use `--palm-ink` (not `--palm`) for green on light backgrounds.

---

## 5. Cross-surface laws (home = blog = docs)

The biggest risk: docs live in a **different repo** from marketing, so chrome and
brand silently diverge at the `/docs` boundary. Enforce:

1. **One token block** — both sites import `@cocoindex/brand/tokens.css` (no
   more hand-copied `:root`); the package is the single source (§1).
2. **Fonts: self-host, identically.** ✅ Resolved — both marketing and docs now
   self-host the same WOFF2 via `@cocoindex/brand/fonts.css` (`@fontsource`),
   no CDN dependency, identical rendering. (Plus Jakarta Sans + JetBrains Mono.)
3. **Shared chrome.** Logo (28px mark + 18px/600/-0.02em wordmark), nav link set,
   stars pill, and footer must match pixel-for-pixel across surfaces. The version
   dropdown either exists on both or neither.
4. **One CTA vocabulary.** Same verbs everywhere. Decide the homepage primary
   action — for a dev tool that's **Get Started / install**, with **GitHub stars
   as social proof beside it**, not as the sole primary CTA.
5. **Shared syntax theme.** The blog Shiki theme, the docs Shiki theme, and the
   `--gold/--lavender/--taupe/--stone` tokens in `_shared.css` must be the same
   palette. They have drifted (see punch-list) — reconcile to one.
6. **No stale cross-links.** Marketing → docs links point at the live docs base
   (`/docs`), never `/docs-v1`.

---

## 6. Do / Don't

**Do** — reference tokens · one coral CTA per view · display weight 600 for the
hero · coral weight-600 for the one emphasized word · `color-mix` for tints ·
`:focus-visible` everywhere · cap prose at `--measure` (66ch) · honor reduced-motion.

**Don't** — raw hex/px in components · a third font family · serif or italic
anywhere · two solid-filled buttons side by side · a fifth admonition variant ·
ad-hoc z-index/breakpoints/durations · Google-CDN fonts on one surface and
self-hosted on another · `/docs-v1` links.

---

## 7. Drift punch-list (verified, to fix)

| # | Where | Issue | Fix |
|---|---|---|---|
| 1 | docs `globals.css` | misc opacity washes ad-hoc (6/7/8/10/14/16…%) and some bare `rgba()` | route through `color-mix` + the wash rule |
| 2 | marketing `globals.css` | `--rule-strong` defined **twice** (`0.32` and `0.35`) | keep `0.35`, delete the `0.32` |
| 3 | both | container max-width varies (1320 / 1380 / 1480) | `--maxw 1320` marketing, `--maxw-docs 1480`; kill the stray 1380 |
| 4 | docs | ~~fonts loaded from Google CDN~~ | ✅ done — docs self-hosts via `@cocoindex/brand/fonts.css` |
| 5 | docs Shiki vs `_shared.css` | syntax palette drifted: numbers `#D4B86A`≠`--gold`, types `#C9A0FF`≠`--lavender`; live theme adds salmon/peach/green roles the tokens don't document | reconcile to one theme; document every role token |
| 6 | docs | admonitions implement 6 variants (adds `caution`,`danger`) vs the four-variant rule | make `caution`/`danger` alias Warning, or amend this guideline (pick one) |
| 7 | marketing home | only hero CTA is "Star on GitHub"; a `btn-primary` (maroon fill) sits beside a `btn-coral` elsewhere | establish Get-Started primary + GitHub social proof; secondary = outline, not solid maroon |
| 8 | marketing content | blog posts link to `cocoindex.io/docs-v1/...` | repoint to `/docs` |
| 9 | both | focus ring only specced for buttons | apply `--focus` to links/inputs/cards |
| 10 | all | no dark mode | optional, but if added, drive both schemes from the same semantic tokens |

---

*Sources behind the best-practice calls (66ch measure, 8px spacing, two-tier
tokens, one primary CTA, self-hosted fonts, WCAG 2.2 AA): Radix Colors, Vercel
Geist, GitHub Primer, Atlassian spacing, Algolia DocSearch, WCAG 2.2, Bringhurst
line-length. Captured 2026-06-03.*
