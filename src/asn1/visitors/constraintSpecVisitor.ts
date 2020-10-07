/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { _ConstraintSpec } from '../types';
import {
  ConstraintSpecContext,
  GeneralConstraintContext,
  SubtypeConstraintContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
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
  implements grammar3rdVisitor<_ConstraintSpec> {
  public visitChildren(ctx: ConstraintSpecContext): _ConstraintSpec {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof GeneralConstraintContext) {
      return childCtx.accept(new GeneralConstraintVisitor());
    } if (childCtx instanceof SubtypeConstraintContext) {
      return childCtx.accept(new SubtypeConstraintVisitor());
    }
    throw Error();
  }

  protected defaultResult(): _ConstraintSpec {
    return unimpl();
  }
}
