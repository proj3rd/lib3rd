/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from '../../utils/unimpl';
import {
  DefinedValueContext,
  NamedBitContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { INamedBit } from '../types/namedBit';

/**
 * # Grammar
 * ```
 * namedBit: IDENTIFIER L_PARAN (NUMBER | definedValue) R_PARAN
 * ```
 */
export class NamedBitVisitor extends AbstractParseTreeVisitor<INamedBit>
  implements grammar3rdVisitor<INamedBit> {
  public visitChildren(ctx: NamedBitContext): INamedBit {
    const name = ctx.getChild(0).text;
    const thirdCtx = ctx.getChild(2);
    if (thirdCtx instanceof DefinedValueContext) {
      return todo();
    }
    const valueLiteral = thirdCtx.text;
    if (Number.isNaN(+valueLiteral)) {
      throw Error();
    }
    return { name, valueLiteral };
  }

  protected defaultResult(): INamedBit {
    return unimpl();
  }
}
