// Canonical top-nav links — ONE source of truth for every CocoIndex surface
// (home, blog, docs, examples). Absolute cocoindex.io URLs so the bar renders
// identically and points at the same destinations no matter which surface (or
// origin) draws it — the same cross-surface rationale as the Logo's absolute
// mark. Nav.astro defaults to these; pass `links` only to deliberately override.
export const NAV_LINKS = [
  { href: 'https://cocoindex.io/cocoindex-code/', label: 'CocoIndex Code', track: 'nav_click' },
  { href: 'https://cocoindex.io/docs/examples/',  label: 'Examples',       track: 'nav_click' },
  { href: 'https://cocoindex.io/docs/',           label: 'Documentation',  track: 'nav_click' },
  { href: 'https://cocoindex.io/enterprise/',     label: 'Enterprise',     track: 'nav_click' },
  { href: 'https://cocoindex.io/blogs/',          label: 'Blog',           track: 'nav_click' },
];

export default NAV_LINKS;
