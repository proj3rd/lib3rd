import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedType } from '../classes/namedType';
import { NamedTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
/**
 * ANTLR4
 * ```
 * namedType : IDENTIFIER   asnType
 * ```
 */
export declare class NamedTypeVisitor extends AbstractParseTreeVisitor<NamedType> implements ASN_3gppVisitor<NamedType> {
    defaultResult(): NamedType;
    visitChildren(namedTypeCtx: NamedTypeContext): NamedType;
}
