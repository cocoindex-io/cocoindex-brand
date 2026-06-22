// Generate tokens.css (:root custom properties) from tokens.json.
// Run once: `npm run build:tokens`. Live during dev: `npm run watch:tokens`.
import { readFileSync, writeFileSync, watchFile } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const src = fileURLToPath(new URL('tokens.json', root));
const out = fileURLToPath(new URL('tokens.css', root));

function generate() {
  const tokens = JSON.parse(readFileSync(src, 'utf8'));
  const lines = [];
  for (const [group, entries] of Object.entries(tokens)) {
    if (group.startsWith('$')) continue;
    lines.push(`  /* ${group} */`);
    for (const [name, value] of Object.entries(entries)) {
      lines.push(`  --${name}: ${value};`);
    }
  }
  const css = `/* GENERATED from tokens.json by scripts/build-tokens.mjs — do not edit. */\n:root {\n${lines.join('\n')}\n}\n`;
  writeFileSync(out, css);
  return Object.values(tokens).filter((v) => typeof v === 'object').reduce((n, e) => n + Object.keys(e).length, 0);
}

const count = generate();
console.log(`tokens.css ← ${count} tokens`);

if (process.argv.includes('--watch')) {
  console.log('watching tokens.json…');
  watchFile(src, { interval: 200 }, () => {
    try {
      const n = generate();
      console.log(`tokens.css ← ${n} tokens (rebuilt)`);
    } catch (err) {
      console.error('token build failed:', err.message);
    }
  });
}
