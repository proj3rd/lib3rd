import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { GeneralConstraintContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { GeneralConstraint } from '../types/generalConstraint';
/**
 * # Grammar
 * ```
 * generalConstraint: userDefinedConstraint | tableConstraint | contentsConstraint
 * ```
 */
export declare class GeneralConstraintVisitor extends AbstractParseTreeVisitor<GeneralConstraint> implements grammar3rdVisitor<GeneralConstraint> {
    visitChildren(ctx: GeneralConstraintContext): GeneralConstraint;
    protected defaultResult(): GeneralConstraint;
}
//# sourceMappingURL=generalConstraintVisitor.d.ts.map