import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumeratedValueContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * enumeratedValue: IDENTIFIER
 * ```
 */
export class EnumeratedValueVisitor extends AbstractParseTreeVisitor<string>
  implements ASN_3gppVisitor<string> {
  public visitChildren(ctx: EnumeratedValueContext): string {
    return ctx.text;
  }

  protected defaultResult(): string {
    return '';
  }
}
