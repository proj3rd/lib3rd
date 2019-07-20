import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { AsnTypeVisitor } from './asnType';
import { ValueVisitor } from './value';

/**
 * ANTLR4 grammar
 * ```
 * actualParameter : asnType | value
 * ```
 */
export class ActualParameterVisitor {
  public visitChildren(actualParameterCtx: any): any /* TODO */ {
    const childCtx = actualParameterCtx.children[0];
    switch (getContextName(childCtx)) {
      case 'asnType': {
        return childCtx.accept(new AsnTypeVisitor());
      }
      case 'value': {
        return childCtx.accept(new ValueVisitor());
      }
      default: {
        log.warn(getLogWithAsn1(actualParameterCtx, 'Not supported ASN.1'));
        break;
      }
    }
  }
}
