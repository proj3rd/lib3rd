import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { LiteralContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

/**
 * ANTLR4 grammar
 * ```
 * literal : IDENTIFIER | COMMA
 * ```
 */
export class LiteralVisitor extends AbstractParseTreeVisitor<string>
                                  implements ASN_3gppVisitor<string> {
  public defaultResult(): string {
    return undefined;
  }

  public visitChildren(literalCtx: LiteralContext): string {
    return literalCtx.text;
  }
}
