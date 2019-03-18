export function sanitize(text: string): string {
  // \uFFFD: Unicode REPLACEMENT CHARACTER
  return text.replace(/\uFFFD/g, '');
}
