import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ActualParameterVisitor } from './actualParameter';

/**
 * ANTLR4 grammar
 * ```
 * actualParameterList : L_BRACE actualParameter (COMMA actualParameter)* R_BRACE
 * ```
 */
export class ActualParameterListVisitor {
  public visitChildren(actualParameterListCtx: any): any /* TODO */ {
    const actualParameterList: any[] = [];
    const childCtxes: any/* TODO */[] = actualParameterListCtx.children;
    childCtxes.forEach((childCtx) => {
      switch (getContextName(childCtx)) {
        case 'actualParameter': {
          actualParameterList.push(childCtx.accept(new ActualParameterVisitor()));
          break;
        }
        case null: {
          break;
        }
        default: {
          log.warn(getLogWithAsn1(actualParameterListCtx, 'Not supported ASN.1'));
          break;
        }
      }
    });
    return actualParameterList;
  }
}
