/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { _Intersections } from '../types';
import { IntersectionsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { IntersectionElementsVisitor } from './intersectionElementsVisitor';

/**
 * # Grammar
 * ```
 * intersections: (intersectionElements) (intersectionMark intersectionElements)*
 * ```
 */
export class IntersectionsVisitor
  extends AbstractParseTreeVisitor<_Intersections>
  implements grammar3rdVisitor<_Intersections> {
  public visitChildren(ctx: IntersectionsContext): _Intersections {
    const intersectionElementsCtxes = ctx.intersectionElements();
    return intersectionElementsCtxes
      .map((intersectionElementsCtx) => (
        intersectionElementsCtx.accept(new IntersectionElementsVisitor())));
  }

  protected defaultResult(): _Intersections {
    return unimpl();
  }
}
