import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SizeConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ConstraintSpec } from './constraintSpec';
/**
 * ANTLR4 grammar
 * ```
 * sizeConstraint : SIZE_LITERAL constraint
 * ```
 */
export declare class SizeConstraintVisitor extends AbstractParseTreeVisitor<ConstraintSpec> implements ASN_3gppVisitor<ConstraintSpec> {
    defaultResult(): ConstraintSpec;
    visitChildren(sizeConstraintCtx: SizeConstraintContext): ConstraintSpec;
}
