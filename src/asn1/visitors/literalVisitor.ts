import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { LiteralContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * literal: IDENTIFIER | COMMA
 * ```
 */
export class LiteralVisitor extends AbstractParseTreeVisitor<string>
  implements ASN_3gppVisitor<string> {
  public visitChildren(ctx: LiteralContext): string {
    return ctx.text;
  }

  protected defaultResult(): string {
    return unimpl();
  }
}
