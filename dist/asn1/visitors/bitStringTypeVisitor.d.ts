import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { BitStringType } from '../classes/bitStringType';
import { BitStringTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * bitStringType: (BIT_LITERAL STRING_LITERAL) (L_BRACE namedBitList R_BRACE)?
 * ```
 */
export declare class BitStringTypeVisitor extends AbstractParseTreeVisitor<BitStringType> implements ASN_3gppVisitor<BitStringType> {
    visitChildren(ctx: BitStringTypeContext): BitStringType;
    protected defaultResult(): BitStringType;
}
//# sourceMappingURL=bitStringTypeVisitor.d.ts.map