import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { OctetStringType } from '../classes/octetStringType';
import { OctetStringTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * octetStringType: OCTET_LITERAL STRING_LITERAL
 * ```
 */
export declare class OctetStringTypeVisitor extends AbstractParseTreeVisitor<OctetStringType> implements ASN_3gppVisitor<OctetStringType> {
    visitChildren(ctx: OctetStringTypeContext): OctetStringType;
    protected defaultResult(): OctetStringType;
}
//# sourceMappingURL=octetStringTypeVisitor.d.ts.map