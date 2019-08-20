import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { getContextName } from '../utils';

import { ParameterListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ParameterVisitor } from './parameter';

/**
 * ANTLR4 grammar
 * ```
 * parameterList : L_BRACE parameter (COMMA parameter)* R_BRACE
 * ```
 */

export class ParameterListVisitor extends AbstractParseTreeVisitor<string[]> implements ASN_3gppVisitor<string[]> {
  public defaultResult(): string[] {
    return undefined;
  }

  public visitChildren(parameterListCtx: ParameterListContext): string[] {
    const parameterList = [];
    const childCtxes = parameterListCtx.children;
    childCtxes.forEach((childCtx) => {
      if (getContextName(childCtx) !== 'parameter') {
        return;
      }
      parameterList.push(childCtx.accept(new ParameterVisitor()));
    });
    return parameterList;
  }
}
