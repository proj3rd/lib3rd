/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { Parameter } from '../classes/parameter';
import { ParameterContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ParamGovernorVisitor } from './paramGovernorVisitor';

/**
 * # Grammar
 * ```
 * parameter: (paramGovernor COLON)? IDENTIFIER
 * ```
 */
export class ParameterVisitor extends AbstractParseTreeVisitor<Parameter>
  implements grammar3rdVisitor<Parameter> {
  public visitChildren(ctx: ParameterContext): Parameter {
    const { childCount } = ctx;
    const paramGovernorCtx = ctx.paramGovernor();
    const paramGovernor = paramGovernorCtx === undefined
      ? undefined
      : paramGovernorCtx.accept(new ParamGovernorVisitor());
    const dummyReferenceCtx = ctx.getChild(childCount - 1);
    const dummyReference = dummyReferenceCtx.text;
    return new Parameter(dummyReference, paramGovernor);
  }

  protected defaultResult(): Parameter {
    return unimpl();
  }
}
