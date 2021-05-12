/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import {
  ContentsConstraintContext,
  GeneralConstraintContext,
  TableConstraintContext,
  UserDefinedConstraintContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { GeneralConstraint } from '../types/generalConstraint';
import { ContentsConstraintVisitor } from './contentsConstraintVisitor';
import { TableConstraintVisitor } from './tableConstraintVisitor';

/**
 * # Grammar
 * ```
 * generalConstraint: userDefinedConstraint | tableConstraint | contentsConstraint
 * ```
 */
export class GeneralConstraintVisitor
  extends AbstractParseTreeVisitor<GeneralConstraint>
  implements grammar3rdVisitor<GeneralConstraint> {
  public visitChildren(ctx: GeneralConstraintContext): GeneralConstraint {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof UserDefinedConstraintContext) {
      return unimpl();
    } if (childCtx instanceof TableConstraintContext) {
      return childCtx.accept(new TableConstraintVisitor());
    } if (childCtx instanceof ContentsConstraintContext) {
      return childCtx.accept(new ContentsConstraintVisitor());
    }
    throw Error(ctx.text);
  }

  protected defaultResult(): GeneralConstraint {
    return unimpl();
  }
}
