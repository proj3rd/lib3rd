import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { BitStringType } from '../classes/bitStringType';
import { BitStringTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * bitStringType: (BIT_LITERAL STRING_LITERAL) (L_BRACE namedBitList R_BRACE)?
 * ```
 */
export declare class BitStringTypeVisitor extends AbstractParseTreeVisitor<BitStringType> implements grammar3rdVisitor<BitStringType> {
    visitChildren(ctx: BitStringTypeContext): BitStringType;
    protected defaultResult(): BitStringType;
}
//# sourceMappingURL=bitStringTypeVisitor.d.ts.map