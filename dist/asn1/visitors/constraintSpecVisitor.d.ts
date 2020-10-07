import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _ConstraintSpec } from '../types';
import { ConstraintSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * constraintSpec: generalConstraint | subtypeConstraint
 * ```
 */
export declare class ConstraintSpecVisitor extends AbstractParseTreeVisitor<_ConstraintSpec> implements grammar3rdVisitor<_ConstraintSpec> {
    visitChildren(ctx: ConstraintSpecContext): _ConstraintSpec;
    protected defaultResult(): _ConstraintSpec;
}
//# sourceMappingURL=constraintSpecVisitor.d.ts.map