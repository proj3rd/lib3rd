import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedType } from '../classes/namedType';
import { NamedTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * namedType: IDENTIFIER asnType
 * ```
 */
export declare class NamedTypeVisitor extends AbstractParseTreeVisitor<NamedType> implements ASN_3gppVisitor<NamedType> {
    visitChildren(ctx: NamedTypeContext): NamedType;
    protected defaultResult(): NamedType;
}
//# sourceMappingURL=namedTypeVisitor.d.ts.map