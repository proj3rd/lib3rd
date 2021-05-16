import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ConstraintSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ConstraintSpec } from '../types/constraintSpec';
/**
 * # Grammar
 * ```
 * constraintSpec: generalConstraint | subtypeConstraint
 * ```
 */
export declare class ConstraintSpecVisitor extends AbstractParseTreeVisitor<ConstraintSpec> implements grammar3rdVisitor<ConstraintSpec> {
    visitChildren(ctx: ConstraintSpecContext): ConstraintSpec;
    protected defaultResult(): ConstraintSpec;
}
//# sourceMappingURL=constraintSpecVisitor.d.ts.map