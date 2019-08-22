import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ActualParameterContext, ActualParameterListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ActualParameter, ActualParameterVisitor } from './actualParameter';

/**
 * ANTLR4 grammar
 * ```
 * actualParameterList : L_BRACE actualParameter (COMMA actualParameter)* R_BRACE
 * ```
 */
export class ActualParameterListVisitor extends AbstractParseTreeVisitor<ActualParameter[]>
                                        implements ASN_3gppVisitor<ActualParameter[]> {
  public defaultResult(): ActualParameter[] {
    return undefined;
  }

  public visitChildren(actualParameterListCtx: ActualParameterListContext): ActualParameter[] {
    const actualParameterList = [];
    const childCtxes = actualParameterListCtx.children;
    childCtxes.forEach((childCtx) => {
      if (childCtx instanceof ActualParameterContext) {
        actualParameterList.push(childCtx.accept(new ActualParameterVisitor()));
      } else if (childCtx instanceof TerminalNode) {
        // Do nothing
      } else {
        log.warn(getLogWithAsn1(actualParameterListCtx, 'Not supported ASN.1'));
      }
    });
    return actualParameterList;
  }
}
