/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { Constraint } from '../classes/constraint';
import { ConstraintContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ConstraintSpecVisitor } from './constraintSpecVisitor';

/**
 * # Grammar
 * ```
 * constraint: L_PARAN constraintSpec exceptionSpec? R_PARAN
 * ```
 */
export class ConstraintVisitor extends AbstractParseTreeVisitor<Constraint>
  implements grammar3rdVisitor<Constraint> {
  public visitChildren(ctx: ConstraintContext): Constraint {
    const constraintSpecCtx = ctx.constraintSpec();
    const constraint = constraintSpecCtx.accept(new ConstraintSpecVisitor());
    const exceptionSpecCtx = ctx.exceptionSpec();
    if (exceptionSpecCtx !== undefined) {
      unimpl(ctx.text);
    }
    return new Constraint(constraint);
  }

  protected defaultResult(): Constraint {
    return unimpl();
  }
}
