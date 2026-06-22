/* ──────────────────────────────────────────────────────────
   Shared design-system page bootstrap.

   Right now the only thing this script does is hydrate the
   GitHub-stars pill in the sidebar foot. Mirrors the homepage
   IconThemeStars React component (src/components/IconThemeStars.tsx)
   and the docs Topbar inline counter — same sessionStorage cache
   key (`gh-stars:<repo>`), same 1h TTL, same `48k`/`1.2k` formatter.
   Single fetch per tab even when several pages are visited.
   ──────────────────────────────────────────────────────── */
(() => {
  const TTL = 60 * 60 * 1000;
  const fmt = (n) =>
    n < 1000 ? n.toLocaleString() :
    n < 10000 ? `${(Math.round(n / 100) / 10).toFixed(1)}k` :
    `${Math.round(n / 1000)}k`;

  document.querySelectorAll('a.stars[data-repo]').forEach((a) => {
    const repo = a.getAttribute('data-repo');
    const el = a.querySelector('.count');
    if (!repo || !el) return;

    const key = `gh-stars:${repo}`;
    try {
      const raw = sessionStorage.getItem(key);
      if (raw) {
        const { count, ts } = JSON.parse(raw);
        if (Date.now() - ts < TTL && typeof count === 'number') {
          el.textContent = fmt(count);
          return;
        }
      }
    } catch { /* ignore quota / JSON errors */ }

    fetch(`https://api.github.com/repos/${repo}`)
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.stargazers_count !== 'number') return;
        el.textContent = fmt(d.stargazers_count);
        try { sessionStorage.setItem(key, JSON.stringify({ count: d.stargazers_count, ts: Date.now() })); } catch { /* ignore */ }
      })
      .catch(() => { /* offline / rate-limited — leave the em-dash */ });
  });
})();
