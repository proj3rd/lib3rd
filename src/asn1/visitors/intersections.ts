import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { IntersectionElementsVisitor } from './intersectionElements';

/**
 * ANTLR4 grammar
 * ```
 * intersections : (intersectionElements) (intersectionMark intersectionElements)*
 * ```
 */
export class IntersectionsVisitor {
  public visitChildren(intersectionsCtx: any): any /* TODO */ {
    const childCtxes = intersectionsCtx.children;
    let intersections = null;
    if (childCtxes.length === 1) {
      intersections = childCtxes[0].accept(new IntersectionElementsVisitor());
    } else if (childCtxes.length > 1) {
      // TODO
      log.warn(getLogWithAsn1(intersectionsCtx, 'Multiple IntersectionElements\'s not supported:'));
    }
    return intersections;
  }
}
