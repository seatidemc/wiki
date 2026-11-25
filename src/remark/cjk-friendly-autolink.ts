/**
 * A remark plugin that cuts GFM autolink literals (bare URLs) off at the first
 * CJK character.
 *
 * remark-gfm only strips trailing ASCII punctuation (`?!.,:*_~`) from an
 * autolink, so in Chinese prose `访问 https://example.com，后面还有中文` becomes a
 * single link whose `href` is `https://example.com，后面还有中文`. Cutting at the
 * first CJK character restores the intended link and leaves the rest as text.
 *
 * Only autolink literals are rewritten: `remark-gfm` labels them with their own
 * URL as the link text. Explicit links such as
 * `[中文](https://example.com/中文)` keep their `href` untouched.
 *
 * Must run after `remark-gfm` (Docusaurus always applies GFM before user
 * remark plugins).
 */
import type { Link, Parent, Root, Text } from 'mdast';

/** First CJK punctuation mark, ideograph, kana or hangul in a string. */
const CJK_CHARACTER =
  /[⺀-⿟　-〿぀-ヿ㄀-ㄯㆠ-ㆿ㈀-㏿㐀-䶿一-鿿豈-﫿︰-﹏＀-￯]|[\u{20000}-\u{2FA1F}]/u;

/**
 * If `link` is an autolink literal with CJK text glued to it, shorten the link
 * and return the trailing text that must be re-inserted after it.
 */
function splitCjkSuffix(link: Link): Text | null {
  const [child] = link.children;
  if (link.children.length !== 1 || child?.type !== 'text') {
    return null;
  }

  const text = child.value;
  // Autolink literals use the URL itself as their label; `www.` links get an
  // `http://` prefix on the URL only.
  if (
    link.url !== text &&
    link.url !== `http://${text}` &&
    link.url !== `mailto:${text}`
  ) {
    return null;
  }

  const match = CJK_CHARACTER.exec(link.url);
  if (!match) {
    return null;
  }

  // Translate the match offset in the URL to an offset in the label.
  const offset = link.url.length - text.length;
  const cut = match.index - offset;
  if (cut <= 0 || cut >= text.length) {
    return null;
  }

  link.url = link.url.slice(0, match.index);
  child.value = text.slice(0, cut);
  return { type: 'text', value: text.slice(cut) };
}

function processChildren(parent: Parent): void {
  for (let index = 0; index < parent.children.length; index += 1) {
    const child = parent.children[index];

    if (child.type === 'link') {
      const trailing = splitCjkSuffix(child);
      if (trailing) {
        parent.children.splice(index + 1, 0, trailing);
        index += 1;
      }
    } else if ('children' in child) {
      processChildren(child as Parent);
    }
  }
}

export default function remarkCjkFriendlyAutolink(): (tree: Root) => void {
  return (tree) => {
    processChildren(tree);
  };
}