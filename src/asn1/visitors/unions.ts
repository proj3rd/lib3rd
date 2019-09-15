import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { IntersectionsContext, UnionsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IConstraint } from './elements';
import { IntersectionsVisitor } from './intersections';

/**
 * ANTLR4 grammar
 * ```
 * unions :   (intersections) (unionMark intersections)*
 * ```
 */
export class UnionsVisitor extends AbstractParseTreeVisitor<IConstraint[]> implements ASN_3gppVisitor<IConstraint[]> {
  public defaultResult(): IConstraint[] {
    return [];
  }

  public visitChildren(unionsCtx: UnionsContext): IConstraint[] {
    const unions: IConstraint[] = [];
    const { children } = unionsCtx;
    children.forEach((childCtx) => {
      if (childCtx instanceof IntersectionsContext) {
        unions.push(childCtx.accept(new IntersectionsVisitor()));
      }
    });
    return unions;
  }
}
