import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { _ElementSetSpec } from '../classes/constraint';
import { RootElementSetSpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ElementSetSpecVisitor } from './elementSetSpecVisitor';

/**
 * # Grammar
 * ```
 * rootElementSetSpec: elementSetSpec
 * ```
 */
export class RootElementSetSpecVisitor
  extends AbstractParseTreeVisitor<_ElementSetSpec>
  implements ASN_3gppVisitor<_ElementSetSpec> {
  public visitChildren(ctx: RootElementSetSpecContext): _ElementSetSpec {
    const elementSetSpecCtx = ctx.elementSetSpec();
    return elementSetSpecCtx.accept(new ElementSetSpecVisitor());
  }

  protected defaultResult(): _ElementSetSpec {
    return unimpl();
  }
}
