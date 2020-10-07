/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { Unions } from '../classes/unions';
import { UnionsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { IntersectionsVisitor } from './intersectionsVisitor';

/**
 * # Grammar
 * ```
 * unions: (intersections) (unionMark intersections)*
 * ```
 */
export class UnionsVisitor extends AbstractParseTreeVisitor<Unions>
  implements grammar3rdVisitor<Unions> {
  public visitChildren(ctx: UnionsContext): Unions {
    const intersectionsCtxes = ctx.intersections();
    const intersectionsList = intersectionsCtxes
      .map((intersectionsCtx) => intersectionsCtx.accept(new IntersectionsVisitor()));
    return new Unions(intersectionsList);
  }

  protected defaultResult(): Unions {
    return unimpl();
  }
}
