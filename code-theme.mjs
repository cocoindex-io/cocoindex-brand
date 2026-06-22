// Shiki theme for fenced code, derived from tokens.json so the syntax palette
// can never drift from the brand colors. Maroon-ink surface, brand-warm first
// (peach, pink, palm, cream, taupe) with lavender types and gold numbers for
// readability. Shared by blog + docs. See design_guidelines/ui/color.html § 04.
import tokens from './tokens.json' with { type: 'json' };

const c = tokens.color;

export const cocoindexCodeTheme = {
  name: 'cocoindex-dark',
  type: 'dark',
  colors: {
    'editor.background': c['maroon-ink'],
    'editor.foreground': c.cream,
  },
  tokenColors: [
    { scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
      settings: { foreground: c.taupe, fontStyle: 'italic' } },
    { scope: ['keyword', 'keyword.control', 'keyword.operator.new',
              'storage', 'storage.type', 'storage.modifier'],
      settings: { foreground: c.peach } },
    { scope: ['entity.name.function', 'meta.function-call', 'support.function',
              'variable.function'],
      settings: { foreground: c.pink } },
    { scope: ['string', 'string.quoted', 'string.template',
              'punctuation.definition.string'],
      settings: { foreground: c.palm } },
    { scope: ['constant.numeric', 'constant.language',
              'constant.language.boolean', 'constant.language.null'],
      settings: { foreground: c.gold } },
    { scope: ['entity.name.type', 'entity.name.class', 'support.type',
              'support.class', 'meta.type.annotation'],
      settings: { foreground: c.lavender } },
    { scope: ['meta.decorator', 'variable.other.decorator', 'entity.name.decorator',
              'punctuation.definition.decorator'],
      settings: { foreground: c.peach } },
    { scope: ['variable', 'variable.other', 'variable.parameter'],
      settings: { foreground: c.cream } },
    { scope: ['punctuation', 'meta.brace', 'meta.bracket'],
      settings: { foreground: c.stone } },
  ],
};

export default cocoindexCodeTheme;
