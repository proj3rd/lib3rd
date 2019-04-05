/**
 * Cleanup text
 * @param text Text which needs cleanup
 *
 * Following cleanup is supported
 * - Remove `\uFFFd` (Unicode REPLACEMENT CHARACTER)
 * - Convert `\u3000` (Unicode IDEOGRAPHIC SPACE) into normal space
 */
export function sanitize(text: string): string {
  // \uFFFD: Unicode REPLACEMENT CHARACTER
  return text.replace(/\uFFFD/g, '')
  // \u3000: Unicode IDEOGRAPHIC SPACE
              .replace(/\u3000/g, ' ');
}
