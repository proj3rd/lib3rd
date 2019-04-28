import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { IntersectionsVisitor } from './intersections';

/**
 * ANTLR4 grammar
 * ```
 * unions :   (intersections) (unionMark intersections)*
 * ```
 */
export class UnionsVisitor {
  public visitChildren(unionsCtx: any): any /* TODO */ {
    const childCtxes = unionsCtx.children;
    let unions = null;
    if (childCtxes.length === 1) {
      unions = childCtxes[0].accept(new IntersectionsVisitor());
    } else {
      log.warn(getLogWithAsn1(unionsCtx, 'Multiple of Intersections\'s not supported:'));
    }
    return unions;
  }
}
