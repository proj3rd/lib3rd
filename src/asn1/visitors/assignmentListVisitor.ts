import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Assignment } from '../classes/assignment';
import { AssignmentListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { AssignmentVisitor } from './assignmentVisitor';

/**
 * # Grammar
 * ```
 * assignmentList: (assignment) (assignment)*
 * ```
 */
export class AssignmentListVisitor
  extends AbstractParseTreeVisitor<Assignment[]>
  implements ASN_3gppVisitor<Assignment[]> {
  public visitChildren(ctx: AssignmentListContext): Assignment[] {
    const assignmentCtxes = ctx.assignment();
    return assignmentCtxes.map((assignmentCtx) =>
      assignmentCtx.accept(new AssignmentVisitor())
    );
  }

  protected defaultResult(): Assignment[] {
    return [];
  }
}
