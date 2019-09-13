import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TableConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IComponentRelationConstraint } from './componentRelationConstraint';
/**
 * ANTLR4 grammar
 * ```
 * tableConstraint : componentRelationConstraint
 * ```
 */
export declare class TableConstraintVisitor extends AbstractParseTreeVisitor<IComponentRelationConstraint> implements ASN_3gppVisitor<IComponentRelationConstraint> {
    defaultResult(): IComponentRelationConstraint;
    visitChildren(tableConstraintCtx: TableConstraintContext): IComponentRelationConstraint;
}
