import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { WithSyntaxSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { WithSyntaxSpec } from '../classes/withSyntaxSpec';
import { SyntaxListVisitor } from './syntaxList';

/**
 * ANTLR4 grammar
 * ```
 * withSyntaxSpec : WITH_LITERAL SYNTAX_LITERAL syntaxList
 * ```
 */
export class WithSyntaxSpecVisitor extends AbstractParseTreeVisitor<WithSyntaxSpec>
                                  implements ASN_3gppVisitor<WithSyntaxSpec> {
  public defaultResult(): WithSyntaxSpec {
    return undefined;
  }

  public visitChildren(withSyntaxSpecCtx: WithSyntaxSpecContext): WithSyntaxSpec {
    const syntaxListCtx = withSyntaxSpecCtx.children[2];
    return new WithSyntaxSpec(syntaxListCtx.accept(new SyntaxListVisitor()));
  }
}
