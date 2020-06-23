import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _ElementSetSpecs } from '../classes/constraint';
import { ElementSetSpecsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { unimpl } from './_devUtils';
import { RootElementSetSpecVisitor } from './rootElementSetSpecVisitor';

/**
 * # Grammar
 * ```
 * elementSetSpecs: rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
export class ElementSetSpecsVisitor
  extends AbstractParseTreeVisitor<_ElementSetSpecs>
  implements ASN_3gppVisitor<_ElementSetSpecs> {
  public visitChildren(ctx: ElementSetSpecsContext): _ElementSetSpecs {
    const elementSetSpecs: _ElementSetSpecs = [];
    const rootElementSetSpecCtx = ctx.rootElementSetSpec();
    const rootElementSetSpec = rootElementSetSpecCtx.accept(
      new RootElementSetSpecVisitor()
    );
    elementSetSpecs.push(rootElementSetSpec);
    if (ctx.childCount > 1) {
      unimpl();
    }
    return elementSetSpecs;
  }

  protected defaultResult(): _ElementSetSpecs {
    return unimpl();
  }
}
