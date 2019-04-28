import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { RootElementSetSpecVisitor } from './rootElementSetSpec';

/**
 * ANTLR4 grammar
 * ```
 * elementSetSpecs :
 *  rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
export class ElementSetSpecsVisitor {
  public visitChildren(elementSetSpecsCtx: any): any /* TODO */ {
    const childCtxes = elementSetSpecsCtx.children;
    const rootElementSetSpecCtx = childCtxes[0];
    const elementSetSpecs = rootElementSetSpecCtx.accept(new RootElementSetSpecVisitor());
    if (childCtxes.length > 3) {
      log.warn(getLogWithAsn1(elementSetSpecsCtx, 'AdditionalElementSetSpec not supported:'));
    } else if (childCtxes.length > 1) {
      log.warn(getLogWithAsn1(elementSetSpecsCtx, 'Extension marker not supported:'));
    }
    return elementSetSpecs;
  }
}
