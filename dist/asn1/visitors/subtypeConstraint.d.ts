import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubtypeConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IConstraint } from './elements';
/**
 * ANTLR4 grammar
 * ```
 * subtypeConstraint	:
 * elementSetSpecs
 * ```
 */
export declare class SubtypeConstraintVisitor extends AbstractParseTreeVisitor<IConstraint> implements ASN_3gppVisitor<IConstraint> {
    defaultResult(): IConstraint;
    visitChildren(subtypeConstraintCtx: SubtypeConstraintContext): IConstraint;
}
