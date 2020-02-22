import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { IntersectionsContext, UnionMarkContext, UnionsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { UnionMark } from '../classes/unionMark';
import { ElementsTypes } from './elements';
import { IntersectionsVisitor } from './intersections';
import { UnionMarkVisitor } from './unionMark';

export type Unions = Array<ElementsTypes | UnionMark>;

/**
 * ANTLR4 grammar
 * ```
 * unions :   (intersections) (unionMark intersections)*
 * ```
 */
export class UnionsVisitor extends AbstractParseTreeVisitor<Unions>
                           implements ASN_3gppVisitor<Unions> {
  public defaultResult(): Unions {
    return [];
  }

  public visitChildren(unionsCtx: UnionsContext): Unions {
    const unions: Unions = [];
    const { children } = unionsCtx;
    children.forEach((childCtx) => {
      if (childCtx instanceof IntersectionsContext) {
        unions.push(childCtx.accept(new IntersectionsVisitor()));
      } else if (childCtx instanceof UnionMarkContext) {
        unions.push(childCtx.accept(new UnionMarkVisitor()));
      }
    });
    return unions;
  }
}
