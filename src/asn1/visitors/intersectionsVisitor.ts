import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { _Intersections } from '../types';
import { IntersectionsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { IntersectionElementsVisitor } from './intersectionElementsVisitor';

/**
 * # Grammar
 * ```
 * intersections: (intersectionElements) (intersectionMark intersectionElements)*
 * ```
 */
export class IntersectionsVisitor
  extends AbstractParseTreeVisitor<_Intersections>
  implements ASN_3gppVisitor<_Intersections> {
  public visitChildren(ctx: IntersectionsContext): _Intersections {
    const intersectionElementsCtxes = ctx.intersectionElements();
    return intersectionElementsCtxes.map((intersectionElementsCtx) =>
      intersectionElementsCtx.accept(new IntersectionElementsVisitor())
    );
  }

  protected defaultResult(): _Intersections {
    return unimpl();
  }
}
