import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl, unreach } from 'unimpl';
import {
  DefinedValueContext,
  NamedBitContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { INamedBit } from '../types';

/**
 * # Grammar
 * ```
 * namedBit: IDENTIFIER L_PARAN (NUMBER | definedValue) R_PARAN
 * ```
 */
export class NamedBitVisitor extends AbstractParseTreeVisitor<INamedBit>
  implements ASN_3gppVisitor<INamedBit> {
  public visitChildren(ctx: NamedBitContext): INamedBit {
    const name = ctx.getChild(0).text;
    const thirdCtx = ctx.getChild(2);
    if (thirdCtx instanceof DefinedValueContext) {
      return todo();
    } else {
      const valueLiteral = thirdCtx.text;
      if (isNaN(+valueLiteral)) {
        throw Error();
      }
      return { name, valueLiteral };
    }
    return unreach();
  }

  protected defaultResult(): INamedBit {
    return unimpl();
  }
}
