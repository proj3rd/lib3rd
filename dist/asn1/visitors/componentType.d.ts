/**
 * ANTLR4 grammar
 * ```
 * componentType  :
 *  namedType (OPTIONAL_LITERAL | DEFAULT_LITERAL value )?
 *  |  COMPONENTS_LITERAL OF_LITERAL  asnType
 * ```
 */
export declare class ComponentTypeVisitor {
    visitChildren(componentTypeCtx: any): any;
}
