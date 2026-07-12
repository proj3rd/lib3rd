/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { Parameter } from '../classes/parameter';
import { ParameterListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ParameterVisitor } from './parameterVisitor';

/**
 * # Grammar
 * ```
 * parameterList: L_BRACE parameter (COMMA parameter)* R_BRACE
 * ```
 */
export class ParameterListVisitor extends AbstractParseTreeVisitor<Parameter[]>
  implements grammar3rdVisitor<Parameter[]> {
  public visitChildren(ctx: ParameterListContext): Parameter[] {
    const parameterCtxes = ctx.parameter();
    return parameterCtxes.map((parameterCtx) => parameterCtx.accept(new ParameterVisitor()));
  }

  protected defaultResult(): Parameter[] {
    return unimpl();
  }
}
