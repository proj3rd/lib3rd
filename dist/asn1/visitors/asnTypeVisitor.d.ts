import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnType } from '../classes/asnType';
import { AsnTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * asnType: (builtinType | referencedType) (constraint)*
 * ```
 */
export declare class AsnTypeVisitor extends AbstractParseTreeVisitor<AsnType> implements ASN_3gppVisitor<AsnType> {
    visitChildren(ctx: AsnTypeContext): AsnType;
    protected defaultResult(): AsnType;
}
//# sourceMappingURL=asnTypeVisitor.d.ts.map