import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { GovernorContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { Governor } from '../types/governor';
/**
 * # Grammar
 * ```
 * governor: asnType | definedObjectClass
 * ```
 */
export declare class GovernorVisitor extends AbstractParseTreeVisitor<Governor> implements grammar3rdVisitor<Governor> {
    visitChildren(ctx: GovernorContext): Governor;
    protected defaultResult(): Governor;
}
//# sourceMappingURL=governorVisitor.d.ts.map