import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentRelationConstraint } from '../classes/componentRelationConstraint';
import { ComponentRelationConstraintContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * componentRelationConstraint: L_BRACE (IDENTIFIER (DOT IDENTIFIER)?) R_BRACE
 * (L_BRACE atNotation (COMMA atNotation)* R_BRACE)?
 * ```
 * If atNotation is not present, it is SimpleTableConstraint (= ObjectSet)
 *   defined by X.682 clause 10, but it can be further concluded to
 *   ComponentRelationConstraint as defeind by X.680 clause 50.1 and X.681 clause 12.10.
 * Otherwise, it is ComponentRelationConstraint
 */
export declare class ComponentRelationConstraintVisitor extends AbstractParseTreeVisitor<ComponentRelationConstraint> implements grammar3rdVisitor<ComponentRelationConstraint> {
    visitChildren(ctx: ComponentRelationConstraintContext): ComponentRelationConstraint;
    protected defaultResult(): ComponentRelationConstraint;
}
//# sourceMappingURL=componentRelationConstraintVisitor.d.ts.map