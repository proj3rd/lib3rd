export interface IDefinedType {
    moduleReference: string;
    typeReference: string;
}
/**
 * ANTLR4 grammar
 * ```
 * definedType :
 * IDENTIFIER (DOT IDENTIFIER)? actualParameterList?
 * ```
 */
export declare class DefinedTypeVisitor {
    visitChildren(definedTypeCtx: any): any;
}
