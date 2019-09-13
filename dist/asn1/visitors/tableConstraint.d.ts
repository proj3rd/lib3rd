import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TableConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { TableConstraint } from '../classes/tableConstraint';
/**
 * ANTLR4 grammar
 * ```
 * tableConstraint : componentRelationConstraint
 * ```
 */
export declare class TableConstraintVisitor extends AbstractParseTreeVisitor<TableConstraint> implements ASN_3gppVisitor<TableConstraint> {
    defaultResult(): TableConstraint;
    visitChildren(tableConstraintCtx: TableConstraintContext): TableConstraint;
}
