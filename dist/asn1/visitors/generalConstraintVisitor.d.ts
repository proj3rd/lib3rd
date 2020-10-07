import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _GeneralConstraint } from '../types';
import { GeneralConstraintContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * generalConstraint: userDefinedConstraint | tableConstraint | contentsConstraint
 * ```
 */
export declare class GeneralConstraintVisitor extends AbstractParseTreeVisitor<_GeneralConstraint> implements grammar3rdVisitor<_GeneralConstraint> {
    visitChildren(ctx: GeneralConstraintContext): _GeneralConstraint;
    protected defaultResult(): _GeneralConstraint;
}
//# sourceMappingURL=generalConstraintVisitor.d.ts.map