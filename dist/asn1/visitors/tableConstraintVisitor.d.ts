import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentRelationConstraint } from '../classes/componentRelationConstraint';
import { TableConstraintContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * tableConstraint: componentRelationConstraint
 * ```
 */
export declare class TableConstraintVisitor extends AbstractParseTreeVisitor<ComponentRelationConstraint> implements ASN_3gppVisitor<ComponentRelationConstraint> {
    visitChildren(ctx: TableConstraintContext): ComponentRelationConstraint;
    protected defaultResult(): ComponentRelationConstraint;
}
//# sourceMappingURL=tableConstraintVisitor.d.ts.map