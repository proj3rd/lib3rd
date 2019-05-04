import { NamedType } from '../classes/namedType';
/**
 * ANTLR4 grammar
 * ```
 * alternativeTypeList : (namedType) (COMMA namedType)*
 * ```
 */
export declare class AlternativeTypeListVisitor {
    visitChildren(alternativeTypeListCtx: any): NamedType[];
}
