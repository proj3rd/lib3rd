/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { NamedNumberListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { INamedNumber } from '../types/namedNumber';
import { NamedNumberVisitor } from './namedNumberVisitor';

/**
 * # Grammar
 * ```
 * namedNumberList: (namedNumber) (COMMA namedNumber)*
 * ```
 */
export class NamedNumberListVisitor
  extends AbstractParseTreeVisitor<INamedNumber[]>
  implements grammar3rdVisitor<INamedNumber[]> {
  public visitChildren(ctx: NamedNumberListContext): INamedNumber[] {
    const namedNumberCtxes = ctx.namedNumber();
    return namedNumberCtxes
      .map((namedNumberCtx) => namedNumberCtx.accept(new NamedNumberVisitor()));
  }

  protected defaultResult(): INamedNumber[] {
    return unimpl();
  }
}
