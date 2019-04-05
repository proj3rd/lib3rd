/**
 * Cleanup text
 * @param text Text which needs cleanup
 *
 * Following cleanup is supported
 * - Remove `\uFFFd` (Unicode REPLACEMENT CHARACTER)
 * - Convert `\u3000` (Unicode IDEOGRAPHIC SPACE) into normal space
 */
export declare function sanitize(text: string): string;
