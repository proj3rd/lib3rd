import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AssignmentListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { Assignment } from '../types/assignment';
/**
 * # Grammar
 * ```
 * assignmentList: (assignment) (assignment)*
 * ```
 */
export declare class AssignmentListVisitor extends AbstractParseTreeVisitor<Assignment[]> implements grammar3rdVisitor<Assignment[]> {
    visitChildren(ctx: AssignmentListContext): Assignment[];
    protected defaultResult(): Assignment[];
}
//# sourceMappingURL=assignmentListVisitor.d.ts.map