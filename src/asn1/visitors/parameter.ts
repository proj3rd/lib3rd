import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

/**
 * ANTLR4 grammar
 * ```
 * parameter : (paramGovernor COLON)? IDENTIFIER
 * ```
 */
export class ParameterVisitor {
  public visitChildren(parameterCtx: any/* TODO */): any/* TODO */ {
    const childCtxes: any[] = parameterCtx.children;
    if (getContextName(childCtxes[0]) !== null) {
      log.warn(getLogWithAsn1(parameterCtx, 'ParamGovernor not supported'));
      return childCtxes[2].getText();
    }
    return childCtxes[0].getText();
  }
}
