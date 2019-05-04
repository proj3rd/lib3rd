import { NamedType } from '../classes/namedType';
/**
 * ANTLR4
 * ```
 * namedType : IDENTIFIER   asnType
 * ```
 */
export declare class NamedTypeVisitor {
    visitChildren(namedTypeCtx: any): NamedType;
}
