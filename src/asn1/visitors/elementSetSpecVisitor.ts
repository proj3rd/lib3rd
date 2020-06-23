import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _ElementSetSpec } from '../classes/constraint';
import { ElementSetSpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { unimpl } from './_devUtils';
import { UnionsVisitor } from './unionsVisitor';

/**
 * # Grammar
 * ```
 * elementSetSpec: unions | ALL_LITERAL exclusions
 * ```
 */
export class ElementSetSpecVisitor
  extends AbstractParseTreeVisitor<_ElementSetSpec>
  implements ASN_3gppVisitor<_ElementSetSpec> {
  public visitChildren(ctx: ElementSetSpecContext): _ElementSetSpec {
    const unionsCtx = ctx.unions();
    if (unionsCtx !== undefined) {
      return unionsCtx.accept(new UnionsVisitor());
    }
    const exclusionsCtx = ctx.exclusions();
    if (exclusionsCtx !== undefined) {
      unimpl(ctx);
    }
    throw Error();
  }

  protected defaultResult(): _ElementSetSpec {
    return unimpl();
  }
}
