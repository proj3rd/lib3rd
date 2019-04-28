import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { UnionsVisitor } from './unions';

/**
 * ANTLR4 grammar
 * ```
 * elementSetSpec : unions | ALL_LITERAL exclusions
 * ```
 */
export class ElementSetSpecVisitor {
  public visitChildren(elementSetSpecCtx: any): any /* TODO */ {
    const childCtxes = elementSetSpecCtx.children;
    let elementSetSpec = null;
    switch (childCtxes.length) {
      case 1: {
        elementSetSpec = childCtxes[0].accept(new UnionsVisitor());
        break;
      }
      case 2: {
        log.warn(getLogWithAsn1(elementSetSpecCtx, 'ALL EXCEPT not supported:'));
        break;
      }
      default: {
        log.warn(getLogWithAsn1(elementSetSpecCtx, 'Not suported ASN1:'));
        break;
      }
    }
    return elementSetSpec;
  }
}
