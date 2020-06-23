import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _Constraint } from '../classes/constraint';
import { ConstraintContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { unimpl } from './_devUtils';
import { ConstraintSpecVisitor } from './constraintSpecVisitor';

/**
 * # Grammar
 * ```
 * constraint: L_PARAN constraintSpec exceptionSpec? R_PARAN
 * ```
 */
export class ConstraintVisitor extends AbstractParseTreeVisitor<_Constraint>
  implements ASN_3gppVisitor<_Constraint> {
  public visitChildren(ctx: ConstraintContext): _Constraint {
    const constraintSpecCtx = ctx.constraintSpec();
    const constraint = constraintSpecCtx.accept(new ConstraintSpecVisitor());
    const exceptionSpecCtx = ctx.exceptionSpec();
    if (exceptionSpecCtx !== undefined) {
      unimpl(ctx);
    }
    return constraint;
  }

  protected defaultResult(): _Constraint {
    return unimpl();
  }
}
