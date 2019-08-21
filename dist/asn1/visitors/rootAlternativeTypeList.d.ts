import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootAlternativeTypeListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { NamedType } from '../classes/namedType';
/**
 * ANTLR4 grammar
 * ```
 * rootAlternativeTypeList  : alternativeTypeList
 * ```
 */
export declare class RootAlternativeTypeListVisitor extends AbstractParseTreeVisitor<NamedType[]> implements ASN_3gppVisitor<NamedType[]> {
    defaultResult(): NamedType[];
    visitChildren(rootAlternativeTypeListCtx: RootAlternativeTypeListContext): NamedType[];
}
