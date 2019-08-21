import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ConstraintSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IContentsConstraint } from './contentsConstraint';
import { IConstraint } from './elements';
export declare type ConstraintSpec = IContentsConstraint | IConstraint;
/**
 * ANTLR4 grammar
 * ```
 * constraintSpec : generalConstraint | subtypeConstraint
 * ```
 */
export declare class ConstraintSpecVisitor extends AbstractParseTreeVisitor<ConstraintSpec> implements ASN_3gppVisitor<ConstraintSpec> {
    defaultResult(): ConstraintSpec;
    visitChildren(constraintSpecCtx: ConstraintSpecContext): ConstraintSpec;
}
