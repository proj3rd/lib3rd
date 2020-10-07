import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Unions } from '../classes/unions';
import { UnionsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * unions: (intersections) (unionMark intersections)*
 * ```
 */
export declare class UnionsVisitor extends AbstractParseTreeVisitor<Unions> implements grammar3rdVisitor<Unions> {
    visitChildren(ctx: UnionsContext): Unions;
    protected defaultResult(): Unions;
}
//# sourceMappingURL=unionsVisitor.d.ts.map