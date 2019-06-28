/**
 * ANTLR4 grammar
 * ```
 * tag
 *   : TAG
 *   ;
 *
 * TAG
 *   | '--' ~('\n'|'\r')*
 *   ;
 * ```
 */
export declare class TagVisitor {
    visitChildren(tagCtx: any): any;
}
