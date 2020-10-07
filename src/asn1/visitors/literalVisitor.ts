/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { LiteralContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * literal: IDENTIFIER | COMMA
 * ```
 */
export class LiteralVisitor extends AbstractParseTreeVisitor<string>
  implements grammar3rdVisitor<string> {
  public visitChildren(ctx: LiteralContext): string {
    return ctx.text;
  }

  protected defaultResult(): string {
    return unimpl();
  }
}
