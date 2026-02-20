/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { IntersectionsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { Intersections } from '../types/intersections';
import { IntersectionElementsVisitor } from './intersectionElementsVisitor';

/**
 * # Grammar
 * ```
 * intersections: (intersectionElements) (intersectionMark intersectionElements)*
 * ```
 */
export class IntersectionsVisitor
  extends AbstractParseTreeVisitor<Intersections>
  implements grammar3rdVisitor<Intersections> {
  public visitChildren(ctx: IntersectionsContext): Intersections {
    const intersectionElementsCtxes = ctx.intersectionElements();
    return intersectionElementsCtxes
      .map((intersectionElementsCtx) => (
        intersectionElementsCtx.accept(new IntersectionElementsVisitor())));
  }

  protected defaultResult(): Intersections {
    return unimpl();
  }
}
