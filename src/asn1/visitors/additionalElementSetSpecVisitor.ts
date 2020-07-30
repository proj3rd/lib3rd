import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { Unions } from '../classes/unions';
import { AdditionalElementSetSpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ElementSetSpecVisitor } from './elementSetSpecVisitor';

/**
 * # Grammar
 * ```
 * additionalElementSetSpec: elementSetSpec
 * ```
 */
export class AdditionalElementSetSpecVisitor
  extends AbstractParseTreeVisitor<Unions>
  implements ASN_3gppVisitor<Unions> {
  public visitChildren(ctx: AdditionalElementSetSpecContext): Unions {
    const elementSetSpecCtx = ctx.elementSetSpec();
    return elementSetSpecCtx.accept(new ElementSetSpecVisitor());
  }

  protected defaultResult(): Unions {
    return unimpl();
  }
}
