import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { _ConstraintSpec } from '../types';
import {
  ConstraintSpecContext,
  GeneralConstraintContext,
  SubtypeConstraintContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { GeneralConstraintVisitor } from './generalConstraintVisitor';
import { SubtypeConstraintVisitor } from './subtypeConstraintVisitor';

/**
 * # Grammar
 * ```
 * constraintSpec: generalConstraint | subtypeConstraint
 * ```
 */
export class ConstraintSpecVisitor
  extends AbstractParseTreeVisitor<_ConstraintSpec>
  implements ASN_3gppVisitor<_ConstraintSpec> {
  public visitChildren(ctx: ConstraintSpecContext): _ConstraintSpec {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof GeneralConstraintContext) {
      return childCtx.accept(new GeneralConstraintVisitor());
    } else if (childCtx instanceof SubtypeConstraintContext) {
      return childCtx.accept(new SubtypeConstraintVisitor());
    } else {
      throw Error();
    }
  }

  protected defaultResult(): _ConstraintSpec {
    return unimpl();
  }
}
