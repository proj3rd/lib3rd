import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Syntax } from '../classes/syntax';
import { WithSyntaxSpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * withSyntaxSpec: WITH_LITERAL SYNTAX_LITERAL syntaxList
 * ```
 */
export declare class WithSyntaxSpecVisitor extends AbstractParseTreeVisitor<Syntax[]> implements ASN_3gppVisitor<Syntax[]> {
    visitChildren(ctx: WithSyntaxSpecContext): Syntax[];
    protected defaultResult(): Syntax[];
}
//# sourceMappingURL=withSyntaxSpecVisitor.d.ts.map