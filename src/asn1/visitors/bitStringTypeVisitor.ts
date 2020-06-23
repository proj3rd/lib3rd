import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { BitStringType } from '../classes/bitStringType';
import { BitStringTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { unimpl } from './_devUtils';

/**
 * # Grammar
 * ```
 * bitStringType: (BIT_LITERAL STRING_LITERAL) (L_BRACE namedBitList R_BRACE)?
 * ```
 */
export class BitStringTypeVisitor
  extends AbstractParseTreeVisitor<BitStringType>
  implements ASN_3gppVisitor<BitStringType> {
  public visitChildren(ctx: BitStringTypeContext): BitStringType {
    const namedBitListCtx = ctx.namedBitList();
    if (namedBitListCtx !== undefined) {
      unimpl();
    }
    return new BitStringType();
  }

  protected defaultResult(): BitStringType {
    return unimpl();
  }
}
