import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ActualParameter } from '../classes/parameterizedType';
import { ActualParameterListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ActualParameterVisitor } from './actualParameterVisitor';

/**
 * # Grammar
 * ```
 * actualParameterList: L_BRACE actualParameter (COMMA actualParameter)* R_BRACE
 * ```
 */
export class ActualParameterListVisitor
  extends AbstractParseTreeVisitor<ActualParameter[]>
  implements ASN_3gppVisitor<ActualParameter[]> {
  public visitChildren(ctx: ActualParameterListContext): ActualParameter[] {
    const actualParameterCtxes = ctx.actualParameter();
    return actualParameterCtxes.map((actualParameterCtx) =>
      actualParameterCtx.accept(new ActualParameterVisitor())
    );
  }

  protected defaultResult(): ActualParameter[] {
    return unimpl();
  }
}
