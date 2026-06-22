// Shiki theme for fenced code, derived from the `code` token group in
// tokens.json so the syntax palette can never drift from the brand and is
// identical across blog + docs (GUIDELINE §5.5). The palette is the
// readability-tuned one: maroon-ink surface, peach keywords, salmon functions,
// soft-green strings, muted-amber numbers, lavender types — saturated brand
// accents softened so ten-line snippets stay legible. See
// design_guidelines/ui/color.html § 04 and GUIDELINE §5.5.
import tokens from './tokens.json' with { type: 'json' };

const c = tokens.code;

export const cocoindexCodeTheme = {
  name: 'cocoindex-dark',
  type: 'dark',
  colors: {
    'editor.background': c['code-bg'],
    'editor.foreground': c['code-fg'],
  },
  tokenColors: [
    { scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
      settings: { foreground: c['code-comment'], fontStyle: 'italic' } },
    { scope: ['keyword', 'keyword.control', 'keyword.operator.new',
              'storage', 'storage.type', 'storage.modifier'],
      settings: { foreground: c['code-keyword'] } },
    { scope: ['entity.name.function', 'meta.function-call', 'support.function',
              'variable.function'],
      settings: { foreground: c['code-function'] } },
    { scope: ['string', 'string.quoted', 'string.template',
              'punctuation.definition.string'],
      settings: { foreground: c['code-string'] } },
    { scope: ['constant.numeric', 'constant.language',
              'constant.language.boolean', 'constant.language.null'],
      settings: { foreground: c['code-number'] } },
    { scope: ['entity.name.type', 'entity.name.class', 'support.type',
              'support.class', 'meta.type.annotation'],
      settings: { foreground: c['code-type'] } },
    { scope: ['meta.decorator', 'variable.other.decorator', 'entity.name.decorator',
              'punctuation.definition.decorator'],
      settings: { foreground: c['code-decorator'] } },
    { scope: ['variable', 'variable.other', 'variable.parameter'],
      settings: { foreground: c['code-variable'] } },
    { scope: ['punctuation', 'meta.brace', 'meta.bracket'],
      settings: { foreground: c['code-punctuation'] } },
  ],
};

export default cocoindexCodeTheme;
