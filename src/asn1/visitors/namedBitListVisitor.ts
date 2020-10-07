/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { NamedBitListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { INamedBit } from '../types';
import { NamedBitVisitor } from './namedBitVisitor';

/**
 * # Grammar
 * ```
 * namedBitList: (namedBit) (COMMA namedBit)*
 * ```
 */
export class NamedBitListVisitor extends AbstractParseTreeVisitor<INamedBit[]>
  implements grammar3rdVisitor<INamedBit[]> {
  public visitChildren(ctx: NamedBitListContext): INamedBit[] {
    const namedBitCtxes = ctx.namedBit();
    return namedBitCtxes.map((namedBitCtx) => namedBitCtx.accept(new NamedBitVisitor()));
  }

  protected defaultResult(): INamedBit[] {
    return unimpl();
  }
}
