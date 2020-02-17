import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { GeneralConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ContainingEncodedByConstraint } from '../classes/containingEncodedByConstraint';
import { TableConstraint } from '../classes/tableConstraint';
import { IContentsConstraint } from './contentsConstraint';
export declare type GeneralConstraint = TableConstraint | IContentsConstraint | ContainingEncodedByConstraint;
/**
 * ANTLR4 grammar
 * ```
 * generalConstraint :  userDefinedConstraint | tableConstraint | contentsConstraint
 * ```
 */
export declare class GeneralConstraintVisitor extends AbstractParseTreeVisitor<GeneralConstraint> implements ASN_3gppVisitor<GeneralConstraint> {
    defaultResult(): GeneralConstraint;
    visitChildren(generalConstraintCtx: GeneralConstraintContext): GeneralConstraint;
}
