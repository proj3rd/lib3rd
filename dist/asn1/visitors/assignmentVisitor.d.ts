import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AssignmentContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { Assignment } from '../types/assignment';
/**
 * # Grammar
 * ```
 * assignment: IDENTIFIER (
 *   valueAssignment |
 *   typeAssignment |
 *   parameterizedAssignment |
 *   objectClassAssignment
 * )
 * ```
 */
export declare class AssignmentVisitor extends AbstractParseTreeVisitor<Assignment> implements grammar3rdVisitor<Assignment> {
    visitChildren(ctx: AssignmentContext): Assignment;
    protected defaultResult(): Assignment;
}
//# sourceMappingURL=assignmentVisitor.d.ts.map