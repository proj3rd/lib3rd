export { extract } from './extractor';
export { parse } from './parser';

/**
 * Normalize ASN.1 definition with the followings:
 * - Move a tag in a separate line to inline
 * - Remove an inline comment
 * - Remove a line comment
 * - Trim whitespaces
 */
export function normalize(asn1: string): string {
  return asn1
    .replace(/\n\s*?(--\s*?(Need|Cond)\s+?.+?)$/gm, '$1')
    .replace(/--.*?--/gm, '')
    .replace(/^\s*?--.*?$/gm, '')
    .trim();
}
