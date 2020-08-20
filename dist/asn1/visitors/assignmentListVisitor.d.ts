import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Assignment } from '../classes/assignment';
import { AssignmentListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * assignmentList: (assignment) (assignment)*
 * ```
 */
export declare class AssignmentListVisitor extends AbstractParseTreeVisitor<Assignment[]> implements ASN_3gppVisitor<Assignment[]> {
    visitChildren(ctx: AssignmentListContext): Assignment[];
    protected defaultResult(): Assignment[];
}
//# sourceMappingURL=assignmentListVisitor.d.ts.map