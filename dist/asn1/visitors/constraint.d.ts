import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ConstraintSpec } from './constraintSpec';
/**
 * ANTLR4 grammar
 * ```
 * constraint :L_PARAN constraintSpec  exceptionSpec? R_PARAN
 * ```
 */
export declare class ConstraintVisitor extends AbstractParseTreeVisitor<ConstraintSpec> implements ASN_3gppVisitor<ConstraintSpec> {
    defaultResult(): ConstraintSpec;
    visitChildren(constraintCtx: ConstraintContext): ConstraintSpec;
}
