/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ParamGovernorContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ParamGovernor } from '../types/paramGovernor';
import { GovernorVisitor } from './governorVisitor';

/**
 * # Grammar
 * ```
 * paramGovernor: governor | IDENTIFIER
 * ```
 */
export class ParamGovernorVisitor
  extends AbstractParseTreeVisitor<ParamGovernor>
  implements grammar3rdVisitor<ParamGovernor> {
  public visitChildren(ctx: ParamGovernorContext): ParamGovernor {
    const governorCtx = ctx.governor();
    if (governorCtx === undefined) {
      return ctx.text;
    }
    return governorCtx.accept(new GovernorVisitor());
  }

  protected defaultResult(): ParamGovernor {
    return unimpl();
  }
}
