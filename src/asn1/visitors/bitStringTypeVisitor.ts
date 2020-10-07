/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { BitStringType } from '../classes/bitStringType';
import { BitStringTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { INamedBit } from '../types';
import { NamedBitListVisitor } from './namedBitListVisitor';

/**
 * # Grammar
 * ```
 * bitStringType: (BIT_LITERAL STRING_LITERAL) (L_BRACE namedBitList R_BRACE)?
 * ```
 */
export class BitStringTypeVisitor
  extends AbstractParseTreeVisitor<BitStringType>
  implements grammar3rdVisitor<BitStringType> {
  public visitChildren(ctx: BitStringTypeContext): BitStringType {
    const namedBitList: INamedBit[] = [];
    const namedBitListCtx = ctx.namedBitList();
    if (namedBitListCtx !== undefined) {
      namedBitList.push(...namedBitListCtx.accept(new NamedBitListVisitor()));
    }
    return new BitStringType(namedBitList);
  }

  protected defaultResult(): BitStringType {
    return unimpl();
  }
}
