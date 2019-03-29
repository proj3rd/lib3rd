export function sanitize(text: string): string {
  // \uFFFD: Unicode REPLACEMENT CHARACTER
  return text.replace(/\uFFFD/g, '')
  // \u3000: Unicode IDEOGRAPHIC SPACE
              .replace(/\u3000/g, ' ');
}
