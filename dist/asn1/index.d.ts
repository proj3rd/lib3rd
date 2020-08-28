export { diff, renderDiff } from './diff';
export { extract } from './extractor';
export { parse } from './parser';
/**
 * Normalize ASN.1 definition with the followings:
 * - Move a tag in a separate line to inline
 * - Remove an inline comment
 * - Remove a line comment
 * - Add a space after a comman (e.g. `,...` to `, ...`)
 * - Fix an idiographic space (U+3000)
 * - Trim whitespaces
 */
export declare function normalize(asn1: string): string;
//# sourceMappingURL=index.d.ts.map