import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ParameterContext, ParameterListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Parameter } from '../classes/parameter';
import { ParameterVisitor } from './parameter';

/**
 * ANTLR4 grammar
 * ```
 * parameterList : L_BRACE parameter (COMMA parameter)* R_BRACE
 * ```
 */

export class ParameterListVisitor extends AbstractParseTreeVisitor<Parameter[]>
                                  implements ASN_3gppVisitor<Parameter[]> {
  public defaultResult(): Parameter[] {
    return undefined;
  }

  public visitChildren(parameterListCtx: ParameterListContext): Parameter[] {
    const parameterList: Parameter[] = [];
    const childCtxes = parameterListCtx.children;
    childCtxes.forEach((childCtx) => {
      if (!(childCtx instanceof ParameterContext)) {
        return;
      }
      parameterList.push(childCtx.accept(new ParameterVisitor()));
    });
    return parameterList;
  }
}
