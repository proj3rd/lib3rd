import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { BitStringTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { BitString } from '../classes/bitString';
/**
 * ANTLR4 grammar
 * ```
 * (BIT_LITERAL STRING_LITERAL) (L_BRACE namedBitList R_BRACE)?
 * ```
 */
export declare class BitStringTypeVisitor extends AbstractParseTreeVisitor<BitString> implements ASN_3gppVisitor<BitString> {
    defaultResult(): BitString;
    visitChildren(bitStringTypeCtx: BitStringTypeContext): BitString;
}
