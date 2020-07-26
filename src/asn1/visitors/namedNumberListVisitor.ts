import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { NamedNumberListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { INamedNumber } from '../types';
import { NamedNumberVisitor } from './namedNumberVisitor';

/**
 * # Grammar
 * ```
 * namedNumberList: (namedNumber) (COMMA namedNumber)*
 * ```
 */
export class NamedNumberListVisitor
  extends AbstractParseTreeVisitor<INamedNumber[]>
  implements ASN_3gppVisitor<INamedNumber[]> {
  public visitChildren(ctx: NamedNumberListContext): INamedNumber[] {
    const namedNumberCtxes = ctx.namedNumber();
    return namedNumberCtxes.map((namedNumberCtx) =>
      namedNumberCtx.accept(new NamedNumberVisitor())
    );
  }

  protected defaultResult(): INamedNumber[] {
    return unimpl();
  }
}
