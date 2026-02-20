/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { Syntax } from '../classes/syntax';
import { WithSyntaxSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { SyntaxListVisitor } from './syntaxListVisitor';

/**
 * # Grammar
 * ```
 * withSyntaxSpec: WITH_LITERAL SYNTAX_LITERAL syntaxList
 * ```
 */
export class WithSyntaxSpecVisitor extends AbstractParseTreeVisitor<Syntax[]>
  implements grammar3rdVisitor<Syntax[]> {
  public visitChildren(ctx: WithSyntaxSpecContext): Syntax[] {
    const syntaxListCtx = ctx.syntaxList();
    const syntaxList = syntaxListCtx.accept(new SyntaxListVisitor());
    return syntaxList;
  }

  protected defaultResult(): Syntax[] {
    return unimpl();
  }
}
