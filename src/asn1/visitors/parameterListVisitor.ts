import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { Parameter } from '../classes/parameter';
import { ParameterListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ParameterVisitor } from './parameterVisitor';

/**
 * # Grammar
 * ```
 * parameterList: L_BRACE parameter (COMMA parameter)* R_BRACE
 * ```
 */
export class ParameterListVisitor extends AbstractParseTreeVisitor<Parameter[]>
  implements ASN_3gppVisitor<Parameter[]> {
  public visitChildren(ctx: ParameterListContext): Parameter[] {
    const parameterCtxes = ctx.parameter();
    return parameterCtxes.map((parameterCtx) =>
      parameterCtx.accept(new ParameterVisitor())
    );
  }

  protected defaultResult(): Parameter[] {
    return unimpl();
  }
}
