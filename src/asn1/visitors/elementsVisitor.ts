import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { _Elements } from '../types';
import { ElementsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { SubtypeElementsVisitor } from './subtypeElementsVisitor';

/**
 * # Grammar
 * ```
 * elements: subtypeElements
 * ```
 */
export class ElementsVisitor extends AbstractParseTreeVisitor<_Elements>
  implements ASN_3gppVisitor<_Elements> {
  public visitChildren(ctx: ElementsContext): _Elements {
    const subtypeElementsCtx = ctx.subtypeElements();
    return subtypeElementsCtx.accept(new SubtypeElementsVisitor());
  }

  protected defaultResult(): _Elements {
    return unimpl();
  }
}
