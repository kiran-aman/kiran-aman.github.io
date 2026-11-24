// Shared Markdown settings: used by astro.config.mjs for .md files, and by
// inlineMarkdown() for text that lives in YAML (specs, notes, ...).
import katex from 'katex';
import { markdownToHtml } from 'satteri';

// $inline$ and $$display$$ math, rendered to HTML with KaTeX at build time.
const renderMath = (tex, displayMode) => ({
  raw: katex.renderToString(tex, { displayMode, throwOnError: false }),
  mdxExpressions: false,
});
export const katexPlugin = {
  name: 'katex',
  math: (node) => renderMath(node.value, true),
  inlineMath: (node) => renderMath(node.value, false),
};

// math: $...$, attributes: {#id .class} after links/images.
// smartPunctuation off: inch marks (0.5"), quotes and -- stay exactly as typed.
export const features = { math: true, attributes: true, smartPunctuation: false };

/**
 * Render a short piece of Markdown (bold, italics, links, {.zoom}, $math$) to inline HTML.
 * Text starting like a list item or heading (e.g. "* Measured at ...") is kept literal.
 */
export function inlineMarkdown(text) {
  if (!text) return '';
  const source = text
    .replace(/^([*+-]|#+)(\s)/, '\\$1$2') // "* note" stays literal, not a list
    .replace(/^(\d+)([.)])(\s)/, '$1\\$2$3'); // "1. note" stays literal
  const { html } = markdownToHtml(source, {
    features,
    mdastPlugins: [katexPlugin],
  });
  const out = html.trim();
  // Unwrap a single paragraph so it can sit inline; keep several paragraphs as they are.
  const single = out.match(/^<p>([\s\S]*)<\/p>$/);
  return single && !single[1].includes('<p>') ? single[1] : out;
}
