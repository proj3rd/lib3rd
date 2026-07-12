/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import {
  ConstraintSpecContext,
  GeneralConstraintContext,
  SubtypeConstraintContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ConstraintSpec } from '../types/constraintSpec';
import { GeneralConstraintVisitor } from './generalConstraintVisitor';
import { SubtypeConstraintVisitor } from './subtypeConstraintVisitor';

/**
 * # Grammar
 * ```
 * constraintSpec: generalConstraint | subtypeConstraint
 * ```
 */
export class ConstraintSpecVisitor
  extends AbstractParseTreeVisitor<ConstraintSpec>
  implements grammar3rdVisitor<ConstraintSpec> {
  public visitChildren(ctx: ConstraintSpecContext): ConstraintSpec {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof GeneralConstraintContext) {
      return childCtx.accept(new GeneralConstraintVisitor());
    } if (childCtx instanceof SubtypeConstraintContext) {
      return childCtx.accept(new SubtypeConstraintVisitor());
    }
    throw Error();
  }

  protected defaultResult(): ConstraintSpec {
    return unimpl();
  }
}
