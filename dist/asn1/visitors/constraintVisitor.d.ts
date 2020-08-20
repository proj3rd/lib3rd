import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Constraint } from '../classes/constraint';
import { ConstraintContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * constraint: L_PARAN constraintSpec exceptionSpec? R_PARAN
 * ```
 */
export declare class ConstraintVisitor extends AbstractParseTreeVisitor<Constraint> implements ASN_3gppVisitor<Constraint> {
    visitChildren(ctx: ConstraintContext): Constraint;
    protected defaultResult(): Constraint;
}
//# sourceMappingURL=constraintVisitor.d.ts.map