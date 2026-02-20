import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SizeConstraint } from '../classes/sizeConstraint';
import { SizeConstraintContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * sizeConstraint: SIZE_LITERAL constraint
 * ```
 */
export declare class SizeConstraintVisitor extends AbstractParseTreeVisitor<SizeConstraint> implements grammar3rdVisitor<SizeConstraint> {
    visitChildren(ctx: SizeConstraintContext): SizeConstraint;
    protected defaultResult(): SizeConstraint;
}
//# sourceMappingURL=sizeConstraintVisitor.d.ts.map