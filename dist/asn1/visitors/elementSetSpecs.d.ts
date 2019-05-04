/**
 * ANTLR4 grammar
 * ```
 * elementSetSpecs :
 *  rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
export declare class ElementSetSpecsVisitor {
    visitChildren(elementSetSpecsCtx: any): any;
}
