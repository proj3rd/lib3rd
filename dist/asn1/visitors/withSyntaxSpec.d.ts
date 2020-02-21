import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { WithSyntaxSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { WithSyntaxSpec } from '../classes/withSyntaxSpec';
/**
 * ANTLR4 grammar
 * ```
 * withSyntaxSpec : WITH_LITERAL SYNTAX_LITERAL syntaxList
 * ```
 */
export declare class WithSyntaxSpecVisitor extends AbstractParseTreeVisitor<WithSyntaxSpec> implements ASN_3gppVisitor<WithSyntaxSpec> {
    defaultResult(): WithSyntaxSpec;
    visitChildren(withSyntaxSpecCtx: WithSyntaxSpecContext): WithSyntaxSpec;
}
