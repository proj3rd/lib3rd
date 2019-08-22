import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ParameterContext, ParamGovernorContext } from '../ASN_3gppParser';
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
    if (childCtxes[0] instanceof ParamGovernorContext) {
      log.warn(getLogWithAsn1(parameterCtx, 'ParamGovernor not supported'));
      return childCtxes[2].text;
    }
    return childCtxes[0].text;
  }
}
