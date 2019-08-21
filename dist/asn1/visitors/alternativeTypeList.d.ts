import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AlternativeTypeListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { NamedType } from '../classes/namedType';
/**
 * ANTLR4 grammar
 * ```
 * alternativeTypeList : (namedType) (COMMA namedType)*
 * ```
 */
export declare class AlternativeTypeListVisitor extends AbstractParseTreeVisitor<NamedType[]> implements ASN_3gppVisitor<NamedType[]> {
    defaultResult(): NamedType[];
    visitChildren(alternativeTypeListCtx: AlternativeTypeListContext): NamedType[];
}
