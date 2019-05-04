/**
 * ANTLR4 grammar
 * ```
 * integerValue :  signedNumber | IDENTIFIER
 * ```
 */
export declare class IntegerValueVisitor {
    visitChildren(integerValueCtx: any): number | string;
}
