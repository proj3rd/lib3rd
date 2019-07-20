import { getContextName } from '../utils';

import { ParameterVisitor } from './parameter';

/**
 * ANTLR4 grammar
 * ```
 * parameterList : L_BRACE parameter (COMMA parameter)* R_BRACE
 * ```
 */

export class ParameterListVisitor {
  public visitChildren(parameterListCtx: any/* TODO */): any/* TODO */ {
    const parameterList = [];
    const childCtxes: any[] = parameterListCtx.children;
    childCtxes.forEach((childCtx) => {
      if (getContextName(childCtx) !== 'parameter') {
        return;
      }
      parameterList.push(childCtx.accept(new ParameterVisitor()));
    });
    return parameterList;
  }
}
