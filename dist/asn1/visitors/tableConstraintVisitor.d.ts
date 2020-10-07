import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentRelationConstraint } from '../classes/componentRelationConstraint';
import { TableConstraintContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * tableConstraint: componentRelationConstraint
 * ```
 */
export declare class TableConstraintVisitor extends AbstractParseTreeVisitor<ComponentRelationConstraint> implements grammar3rdVisitor<ComponentRelationConstraint> {
    visitChildren(ctx: TableConstraintContext): ComponentRelationConstraint;
    protected defaultResult(): ComponentRelationConstraint;
}
//# sourceMappingURL=tableConstraintVisitor.d.ts.map