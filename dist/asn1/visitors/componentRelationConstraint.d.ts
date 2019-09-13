import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentRelationConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
export interface IComponentRelationConstraint {
    moduleReference?: string;
    objectSetReference: string;
    atNotations?: string[];
}
/**
 * ANTLR4 grammar
 * ```
 * componentRelationConstraint : L_BRACE (IDENTIFIER (DOT IDENTIFIER)?) R_BRACE
 *      (L_BRACE atNotation (COMMA atNotation)* R_BRACE)?
 * ```
 */
export declare class ComponentRelationConstraintVisitor extends AbstractParseTreeVisitor<IComponentRelationConstraint> implements ASN_3gppVisitor<IComponentRelationConstraint> {
    defaultResult(): IComponentRelationConstraint;
    visitChildren(componentRelationConstraintCtx: ComponentRelationConstraintContext): IComponentRelationConstraint;
}
