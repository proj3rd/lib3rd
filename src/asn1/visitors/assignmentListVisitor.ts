/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AssignmentListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { Assignment } from '../types/assignment';
import { AssignmentVisitor } from './assignmentVisitor';

/**
 * # Grammar
 * ```
 * assignmentList: (assignment) (assignment)*
 * ```
 */
export class AssignmentListVisitor
  extends AbstractParseTreeVisitor<Assignment[]>
  implements grammar3rdVisitor<Assignment[]> {
  public visitChildren(ctx: AssignmentListContext): Assignment[] {
    const assignmentCtxes = ctx.assignment();
    return assignmentCtxes.map((assignmentCtx) => assignmentCtx.accept(new AssignmentVisitor()));
  }

  protected defaultResult(): Assignment[] {
    return [];
  }
}
