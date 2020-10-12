import { Definitions } from './classes/definitions';
/**
 * Regular expression for section number. Following expressions are supported
 * - 9.1.2.3
 * - 9.1.2.3a
 * - A.1.2.3
 * - A.1.2.3a
 */
export declare const reSectionNumber: RegExp;
export declare function parse(html: string): Definitions;
//# sourceMappingURL=parse.d.ts.map