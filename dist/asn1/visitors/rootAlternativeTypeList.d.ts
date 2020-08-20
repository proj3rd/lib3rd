import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedType } from '../classes/namedType';
import { RootAlternativeTypeListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * rootAlternativeTypeList: alternativeTypeList
 * ```
 */
export declare class RootAlternativeTypeListVisitor extends AbstractParseTreeVisitor<NamedType[]> implements ASN_3gppVisitor<NamedType[]> {
    visitChildren(ctx: RootAlternativeTypeListContext): NamedType[];
    protected defaultResult(): NamedType[];
}
//# sourceMappingURL=rootAlternativeTypeList.d.ts.map