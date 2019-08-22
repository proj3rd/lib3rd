import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { UnionsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IConstraint } from './elements';
import { IntersectionsVisitor } from './intersections';

/**
 * ANTLR4 grammar
 * ```
 * unions :   (intersections) (unionMark intersections)*
 * ```
 */
export class UnionsVisitor extends AbstractParseTreeVisitor<IConstraint> implements ASN_3gppVisitor<IConstraint> {
  public defaultResult(): IConstraint {
    return undefined;
  }

  public visitChildren(unionsCtx: UnionsContext): IConstraint {
    const childCtxes = unionsCtx.children;
    let unions: IConstraint;
    if (childCtxes.length === 1) {
      unions = childCtxes[0].accept(new IntersectionsVisitor());
    } else {
      log.warn(getLogWithAsn1(unionsCtx, 'Multiple of Intersections\'s not supported:'));
    }
    return unions;
  }
}
