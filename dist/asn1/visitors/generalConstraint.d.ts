import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { GeneralConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IContentsConstraint } from './contentsConstraint';
/**
 * ANTLR4 grammar
 * ```
 * generalConstraint :  userDefinedConstraint | tableConstraint | contentsConstraint
 * ```
 */
export declare class GeneralConstraintVisitor extends AbstractParseTreeVisitor<IContentsConstraint> implements ASN_3gppVisitor<IContentsConstraint> {
    defaultResult(): IContentsConstraint;
    visitChildren(generalConstraintCtx: GeneralConstraintContext): IContentsConstraint;
}
