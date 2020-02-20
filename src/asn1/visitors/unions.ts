import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { IntersectionsContext, UnionsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ElementsTypes } from './elements';
import { IntersectionsVisitor } from './intersections';

/**
 * ANTLR4 grammar
 * ```
 * unions :   (intersections) (unionMark intersections)*
 * ```
 */
export class UnionsVisitor extends AbstractParseTreeVisitor<ElementsTypes[]>
                           implements ASN_3gppVisitor<ElementsTypes[]> {
  public defaultResult(): ElementsTypes[] {
    return [];
  }

  public visitChildren(unionsCtx: UnionsContext): ElementsTypes[] {
    const unions: ElementsTypes[] = [];
    const { children } = unionsCtx;
    children.forEach((childCtx) => {
      if (childCtx instanceof IntersectionsContext) {
        unions.push(childCtx.accept(new IntersectionsVisitor()));
      }
    });
    return unions;
  }
}
