import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AssignmentContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { Assignment } from '../types';
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
export declare class AssignmentVisitor extends AbstractParseTreeVisitor<Assignment> implements ASN_3gppVisitor<Assignment> {
    visitChildren(ctx: AssignmentContext): Assignment;
    protected defaultResult(): Assignment;
}
//# sourceMappingURL=assignmentVisitor.d.ts.map