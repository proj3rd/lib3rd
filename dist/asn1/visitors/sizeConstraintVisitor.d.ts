import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SizeConstraint } from '../classes/sizeConstraint';
import { SizeConstraintContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * sizeConstraint: SIZE_LITERAL constraint
 * ```
 */
export declare class SizeConstraintVisitor extends AbstractParseTreeVisitor<SizeConstraint> implements ASN_3gppVisitor<SizeConstraint> {
    visitChildren(ctx: SizeConstraintContext): SizeConstraint;
    protected defaultResult(): SizeConstraint;
}
//# sourceMappingURL=sizeConstraintVisitor.d.ts.map