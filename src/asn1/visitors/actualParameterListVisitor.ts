/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ActualParameter } from '../classes/parameterizedType';
import { ActualParameterListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ActualParameterVisitor } from './actualParameterVisitor';

/**
 * # Grammar
 * ```
 * actualParameterList: L_BRACE actualParameter (COMMA actualParameter)* R_BRACE
 * ```
 */
export class ActualParameterListVisitor
  extends AbstractParseTreeVisitor<ActualParameter[]>
  implements grammar3rdVisitor<ActualParameter[]> {
  public visitChildren(ctx: ActualParameterListContext): ActualParameter[] {
    const actualParameterCtxes = ctx.actualParameter();
    return actualParameterCtxes
      .map((actualParameterCtx) => actualParameterCtx.accept(new ActualParameterVisitor()));
  }

  protected defaultResult(): ActualParameter[] {
    return unimpl();
  }
}
