import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _IntersectionElements } from '../classes/constraint';
import { IntersectionElementsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { unimpl } from './_devUtils';
import { ElementsVisitor } from './elementsVisitor';

/**
 * # Grammar
 * ```
 * intersectionElements: elements (exclusions)?
 * ```
 */
export class IntersectionElementsVisitor
  extends AbstractParseTreeVisitor<_IntersectionElements>
  implements ASN_3gppVisitor<_IntersectionElements> {
  public visitChildren(
    ctx: IntersectionElementsContext
  ): _IntersectionElements {
    const elementsCtx = ctx.elements();
    const elements = elementsCtx.accept(new ElementsVisitor());
    const exclusionsCtx = ctx.exclusions();
    if (exclusionsCtx !== undefined) {
      unimpl();
    }
    return elements;
  }

  protected defaultResult(): _IntersectionElements {
    return unimpl();
  }
}
