import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Syntax } from '../classes/syntax';
import { WithSyntaxSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * withSyntaxSpec: WITH_LITERAL SYNTAX_LITERAL syntaxList
 * ```
 */
export declare class WithSyntaxSpecVisitor extends AbstractParseTreeVisitor<Syntax[]> implements grammar3rdVisitor<Syntax[]> {
    visitChildren(ctx: WithSyntaxSpecContext): Syntax[];
    protected defaultResult(): Syntax[];
}
//# sourceMappingURL=withSyntaxSpecVisitor.d.ts.map