import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Constraint } from '../classes/constraint';
import { ConstraintContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * constraint: L_PARAN constraintSpec exceptionSpec? R_PARAN
 * ```
 */
export declare class ConstraintVisitor extends AbstractParseTreeVisitor<Constraint> implements grammar3rdVisitor<Constraint> {
    visitChildren(ctx: ConstraintContext): Constraint;
    protected defaultResult(): Constraint;
}
//# sourceMappingURL=constraintVisitor.d.ts.map