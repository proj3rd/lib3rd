import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentRelationConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { TableConstraint } from '../classes/tableConstraint';
/**
 * ANTLR4 grammar
 * ```
 * componentRelationConstraint : L_BRACE (IDENTIFIER (DOT IDENTIFIER)?) R_BRACE
 *      (L_BRACE atNotation (COMMA atNotation)* R_BRACE)?
 * ```
 */
export declare class ComponentRelationConstraintVisitor extends AbstractParseTreeVisitor<TableConstraint> implements ASN_3gppVisitor<TableConstraint> {
    defaultResult(): TableConstraint;
    visitChildren(componentRelationConstraintCtx: ComponentRelationConstraintContext): TableConstraint;
}
