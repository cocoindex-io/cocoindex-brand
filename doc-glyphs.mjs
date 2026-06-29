/**
 * doc-glyphs — the shared glyph set for DocCard / DocCardGrid.
 *
 * Each value is the inner markup of a `0 0 24 24` stroke icon: DocCard draws the
 * <svg> frame (fill none, stroke currentColor, width 2, round caps) and injects
 * this string via set:html. Glyphs are single-colour on purpose — they inherit
 * the card's accent (`color: var(--card-accent)`), so a multi-accent grid stays
 * coherent (the hum-07 "color-shift" model: the tile carries the colour, the
 * mark stays one ink). Solid bits use fill="currentColor" stroke="none".
 *
 * Hand-drawn marks, not a stock icon pack — keep the visual weight even and the
 * vocabulary abstract (a mark per concept, not a literal clip-art object).
 */
export const docGlyphs = {
  // ── Advanced topics ──────────────────────────────────────────
  // throttled parallel lanes + a limiter gate
  concurrency:
    '<rect x="3" y="5.5" width="11" height="2" rx="1"/><rect x="3" y="11" width="11" height="2" rx="1"/><rect x="3" y="16.5" width="11" height="2" rx="1"/><path d="M16.5 4h3M18 4v16M16.5 20h3"/>',
  // database cylinder
  storage:
    '<ellipse cx="12" cy="6.5" rx="6.5" ry="2.5"/><path d="M5.5 6.5v11a6.5 2.5 0 0 0 13 0v-11"/><path d="M5.5 11a6.5 2.5 0 0 0 13 0M5.5 14.5a6.5 2.5 0 0 0 13 0"/>',
  // shield + check
  shield:
    '<path d="M12 3l7 2.5v6C19 16 16 19 12 21 8 19 5 16 5 11.5v-6Z"/><path d="M9 12l2 2 4-4.5"/>',
  // upward trend line over a baseline
  progress:
    '<line x1="3.5" y1="20" x2="20.5" y2="20"/><polyline points="4.5,15 9,10.5 13,12.5 19.5,6"/><circle cx="19.5" cy="6" r="1.5" fill="currentColor" stroke="none"/>',
  // key
  key:
    '<circle cx="7.5" cy="12" r="3.75"/><line x1="11" y1="12" x2="20.5" y2="12"/><line x1="17.5" y1="12" x2="17.5" y2="15"/><line x1="20.5" y1="12" x2="20.5" y2="14.5"/><circle cx="7.5" cy="12" r="1.3" fill="currentColor" stroke="none"/>',
  // broadcast waves around a live dot
  live:
    '<circle cx="12" cy="12" r="1.75" fill="currentColor" stroke="none"/><path d="M8 8a5.5 5.5 0 0 0 0 8M5.5 6a8.5 8.5 0 0 0 0 12"/><path d="M16 8a5.5 5.5 0 0 1 0 8M18.5 6a8.5 8.5 0 0 1 0 12"/>',
  // plug + socket
  connector:
    '<rect x="3" y="8.5" width="6.5" height="7" rx="1.5"/><line x1="9.5" y1="10.5" x2="12.5" y2="10.5"/><line x1="9.5" y1="13.5" x2="12.5" y2="13.5"/><rect x="13.5" y="7" width="7.5" height="10" rx="1.5"/>',
  // stacked layers
  layers:
    '<rect x="3.5" y="4.5" width="11" height="8" rx="1.5"/><rect x="6" y="7.5" width="11" height="8" rx="1.5"/><rect x="8.5" y="10.5" width="11" height="8" rx="1.5" fill="currentColor" fill-opacity="0.12"/>',

  // ── Programming guide ────────────────────────────────────────
  // app tile + run triangle
  app:
    '<rect x="4.5" y="4.5" width="15" height="15" rx="3.5"/><path d="M10 9l5.5 3-5.5 3Z" fill="currentColor" stroke="none"/>',
  // bullseye target
  target:
    '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
  // paneled component box
  component:
    '<rect x="4" y="6" width="16" height="12" rx="2"/><line x1="4" y1="9.5" x2="20" y2="9.5"/><circle cx="6.5" cy="7.75" r="0.8" fill="currentColor" stroke="none"/><circle cx="9" cy="7.75" r="0.8" fill="currentColor" stroke="none"/><rect x="7" y="12" width="10" height="3.5" rx="1.75"/>',
  // transform box with in/out arrows
  function:
    '<path d="M2.5 12H7M5.5 10.5 7 12l-1.5 1.5"/><rect x="8.5" y="8" width="7" height="8" rx="1.5"/><path d="M17 12h4.5M20 10.5 21.5 12 20 13.5"/>',
  // share hub: one provider to many
  context:
    '<circle cx="12" cy="6" r="2" fill="currentColor" stroke="none"/><circle cx="5.5" cy="17.5" r="2"/><circle cx="12" cy="17.5" r="2"/><circle cx="18.5" cy="17.5" r="2"/><path d="M11 7.5 6.5 15.5M12 8v7.5M13 7.5 17.5 15.5"/>',
  // refresh cycle
  livemode:
    '<path d="M5.5 9.5A7 7 0 0 1 17.5 7.5"/><path d="M17.5 4.5 18 8l-3.5 0"/><path d="M18.5 14.5A7 7 0 0 1 6.5 16.5"/><path d="M6.5 19.5 6 16l3.5 0"/>',
  // serialization braces
  serialization:
    '<path d="M9.5 5.5C6.5 5.5 7.5 11 4.5 12 7.5 13 6.5 18.5 9.5 18.5"/><path d="M14.5 5.5c3 0 2 5.5 5 6.5-3 1-2 6.5-5 6.5"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/>',
  // code brackets
  sdk:
    '<path d="M8.5 7.5 4 12l4.5 4.5"/><path d="M15.5 7.5 20 12l-4.5 4.5"/><line x1="13.5" y1="6.5" x2="10.5" y2="17.5"/>',

  // ── Common resources ─────────────────────────────────────────
  // three distinct type tokens: circle, square, triangle
  types:
    '<circle cx="6" cy="12" r="2.6"/><rect x="9.6" y="9.4" width="5.2" height="5.2" rx="1.2"/><path d="M20.4 14.6 18 9.8 15.6 14.6Z"/>',
  // bracketed vector of values [ • • • ]
  vector:
    '<path d="M7 6.5H5.5v11H7"/><path d="M17 6.5h1.5v11H17"/><circle cx="9.6" cy="12" r="1.15" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/><circle cx="14.4" cy="12" r="1.15" fill="currentColor" stroke="none"/>',
  // hash mark in a rounded tile — a stable identifier
  id:
    '<rect x="4.5" y="4.5" width="15" height="15" rx="4"/><path d="M10.8 8.5 9.6 15.5M14.4 8.5 13.2 15.5M8.6 11.2h7M8 12.8h7"/>',
  // keyed map rows with a live pulse
  map:
    '<rect x="3.5" y="6" width="6" height="4.5" rx="1.3"/><rect x="14.5" y="6" width="6" height="4.5" rx="1.3"/><rect x="3.5" y="13.5" width="6" height="4.5" rx="1.3"/><rect x="14.5" y="13.5" width="6" height="4.5" rx="1.3"/><path d="M9.5 8.25h5M9.5 15.75h5"/><circle cx="12" cy="8.25" r="1.05" fill="currentColor" stroke="none"/>',
};
