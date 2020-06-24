import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { _Intersections, _Unions } from '../classes/constraint';
import { UnionsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { IntersectionsVisitor } from './intersectionsVisitor';

/**
 * # Grammar
 * ```
 * unions: (intersections) (unionMark intersections)*
 * ```
 */
export class UnionsVisitor extends AbstractParseTreeVisitor<_Unions>
  implements ASN_3gppVisitor<_Unions> {
  public visitChildren(ctx: UnionsContext): _Unions {
    const intersectionsCtxes = ctx.intersections();
    return intersectionsCtxes.map((intersectionsCtx) =>
      intersectionsCtx.accept(new IntersectionsVisitor())
    );
  }

  protected defaultResult(): _Unions {
    return unimpl();
  }
}
