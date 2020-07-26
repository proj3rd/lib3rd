import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { _Unions } from '../classes/constraint';
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
  extends AbstractParseTreeVisitor<_Unions>
  implements ASN_3gppVisitor<_Unions> {
  public visitChildren(ctx: AdditionalElementSetSpecContext): _Unions {
    const elementSetSpecCtx = ctx.elementSetSpec();
    return elementSetSpecCtx.accept(new ElementSetSpecVisitor());
  }

  protected defaultResult(): _Unions {
    return unimpl();
  }
}
