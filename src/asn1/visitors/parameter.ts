import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ParameterContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

/**
 * ANTLR4 grammar
 * ```
 * parameter : (paramGovernor COLON)? IDENTIFIER
 * ```
 */
export class ParameterVisitor extends AbstractParseTreeVisitor<string> implements ASN_3gppVisitor<string> {
  public defaultResult(): string {
    return undefined;
  }

  public visitChildren(parameterCtx: ParameterContext): string {
    const childCtxes = parameterCtx.children;
    if (getContextName(childCtxes[0]) !== null) {
      log.warn(getLogWithAsn1(parameterCtx, 'ParamGovernor not supported'));
      return childCtxes[2].text;
    }
    return childCtxes[0].text;
  }
}
