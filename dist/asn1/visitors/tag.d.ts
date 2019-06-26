/**
 * ANTLR4 grammar
 * ```
 * tag
 *   : needTag
 *   | condTag
 *   | INVALID_TAG
 *   ;
 * needTag
 *  : NEED_LITERAL IDENTIFIER
 *  ;
 * condTag
 *   : COND_LITERAL IDENTIFIER
 *   ;
 * ```
 */
export declare class TagVisitor {
    visitChildren(tagCtx: any): any;
}
