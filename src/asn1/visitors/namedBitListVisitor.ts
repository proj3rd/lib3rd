import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { NamedBitListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { INamedBit } from '../types';
import { NamedBitVisitor } from './namedBitVisitor';

/**
 * # Grammar
 * ```
 * namedBitList: (namedBit) (COMMA namedBit)*
 * ```
 */
export class NamedBitListVisitor extends AbstractParseTreeVisitor<INamedBit[]>
  implements ASN_3gppVisitor<INamedBit[]> {
  public visitChildren(ctx: NamedBitListContext): INamedBit[] {
    const namedBitCtxes = ctx.namedBit();
    return namedBitCtxes.map((namedBitCtx) =>
      namedBitCtx.accept(new NamedBitVisitor())
    );
  }

  protected defaultResult(): INamedBit[] {
    return unimpl();
  }
}
