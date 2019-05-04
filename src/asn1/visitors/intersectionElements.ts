import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ElementsVisitor } from './elements';

/**
 * ANTLR4 grammar
 * ```
 * intersectionElements : elements (exclusions)?
 * ```
 */
export class IntersectionElementsVisitor {
  public visitChildren(intersectionElementsCtx: any): any /* TODO */ {
    const childCtxes = intersectionElementsCtx.children;
    const elementsCtx = childCtxes[0];
    const exclusionsCtx = childCtxes[1];
    const intersectionElements = elementsCtx.accept(new ElementsVisitor());
    if (exclusionsCtx) {
      log.warn(getLogWithAsn1(intersectionElementsCtx, 'Exclusions not supported:'));
    }
    return intersectionElements;
  }
}
