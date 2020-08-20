import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedType } from '../classes/namedType';
import { AlternativeTypeListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * alternativeTypeList: (namedType) (COMMA namedType)*
 * ```
 */
export declare class AlternativeTypeListVisitor extends AbstractParseTreeVisitor<NamedType[]> implements ASN_3gppVisitor<NamedType[]> {
    visitChildren(ctx: AlternativeTypeListContext): NamedType[];
    protected defaultResult(): NamedType[];
}
//# sourceMappingURL=alternativeTypeListVisitor.d.ts.map