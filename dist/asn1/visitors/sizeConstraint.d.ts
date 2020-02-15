import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SizeConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { SizeConstraint } from '../classes/sizeConstraint';
/**
 * ANTLR4 grammar
 * ```
 * sizeConstraint : SIZE_LITERAL constraint
 * ```
 */
export declare class SizeConstraintVisitor extends AbstractParseTreeVisitor<SizeConstraint> implements ASN_3gppVisitor<SizeConstraint> {
    defaultResult(): SizeConstraint;
    visitChildren(sizeConstraintCtx: SizeConstraintContext): SizeConstraint;
}
