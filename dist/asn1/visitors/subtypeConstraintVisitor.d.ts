import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubtypeConstraint } from '../classes/subtypeConstraint';
import { SubtypeConstraintContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * subtypeConstraint: elementSetSpecs
 * ```
 */
export declare class SubtypeConstraintVisitor extends AbstractParseTreeVisitor<SubtypeConstraint> implements grammar3rdVisitor<SubtypeConstraint> {
    visitChildren(ctx: SubtypeConstraintContext): SubtypeConstraint;
    protected defaultResult(): SubtypeConstraint;
}
//# sourceMappingURL=subtypeConstraintVisitor.d.ts.map