import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { _Intersections } from '../types';
import { Unions } from '../classes/unions';
import { UnionsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { IntersectionsVisitor } from './intersectionsVisitor';

/**
 * # Grammar
 * ```
 * unions: (intersections) (unionMark intersections)*
 * ```
 */
export class UnionsVisitor extends AbstractParseTreeVisitor<Unions>
  implements ASN_3gppVisitor<Unions> {
  public visitChildren(ctx: UnionsContext): Unions {
    const intersectionsCtxes = ctx.intersections();
    const intersectionsList = intersectionsCtxes.map((intersectionsCtx) =>
      intersectionsCtx.accept(new IntersectionsVisitor())
    );
    return new Unions(intersectionsList);
  }

  protected defaultResult(): Unions {
    return unimpl();
  }
}
