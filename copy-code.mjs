// Copy-to-clipboard for every `.code-figure .copy` button — one delegated
// listener per document, shared by blog + docs (button markup is emitted by
// each site's scripts/remark-code-titles.mjs; styling lives in code-block.css).
// Self-initializing on import: `<script>import '@cocoindex/brand/copy-code'</script>`
// once in a shared layout. Idempotent — a repeat import is a no-op.
//
// Analytics are optional: if the host page defines `window.cocoTrack`, a
// successful copy emits a `code_copy` event (a strong dev-intent signal); if
// not, copying still works silently.

if (typeof document !== 'undefined' && !window.__cocoCopyInit) {
  window.__cocoCopyInit = true;

  document.addEventListener('click', (ev) => {
    const target = ev.target;
    if (!(target instanceof Element)) return;
    const btn = target.closest('.code-figure .copy');
    if (!btn) return;

    const fig = btn.closest('.code-figure');
    const code = fig && (fig.querySelector('pre code') || fig.querySelector('pre'));
    if (!code) return;

    const text = code.innerText.replace(/\n$/, '');
    const label = btn.querySelector('.copy-lbl');

    const done = () => {
      btn.classList.add('copied');
      if (label) label.textContent = 'Copied';
      try {
        const file = fig.querySelector('.bar .file');
        window.cocoTrack && window.cocoTrack('code_copy', {
          file: file ? file.textContent.trim().slice(0, 80) : null,
          chars: text.length,
          path: location.pathname,
        });
      } catch (e) { /* ignore */ }
      window.setTimeout(() => {
        btn.classList.remove('copied');
        if (label) label.textContent = 'Copy';
      }, 1500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => { /* ignore */ });
    } else {
      const ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', '');
      ta.style.position = 'fixed'; ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { /* ignore */ }
      ta.remove();
    }
  });
}
