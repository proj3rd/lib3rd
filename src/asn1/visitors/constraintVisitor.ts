import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { Constraint } from '../classes/constraint';
import { ConstraintContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ConstraintSpecVisitor } from './constraintSpecVisitor';

/**
 * # Grammar
 * ```
 * constraint: L_PARAN constraintSpec exceptionSpec? R_PARAN
 * ```
 */
export class ConstraintVisitor extends AbstractParseTreeVisitor<Constraint>
  implements ASN_3gppVisitor<Constraint> {
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
