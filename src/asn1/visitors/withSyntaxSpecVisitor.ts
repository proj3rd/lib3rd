import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { Syntax } from '../classes/syntax';
import { WithSyntaxSpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { SyntaxListVisitor } from './syntaxListVisitor';

/**
 * # Grammar
 * ```
 * withSyntaxSpec: WITH_LITERAL SYNTAX_LITERAL syntaxList
 * ```
 */
export class WithSyntaxSpecVisitor extends AbstractParseTreeVisitor<Syntax[]>
  implements ASN_3gppVisitor<Syntax[]> {
  public visitChildren(ctx: WithSyntaxSpecContext): Syntax[] {
    const syntaxListCtx = ctx.syntaxList();
    const syntaxList = syntaxListCtx.accept(new SyntaxListVisitor());
    return syntaxList;
  }

  protected defaultResult(): Syntax[] {
    return unimpl();
  }
}
