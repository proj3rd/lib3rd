import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { SignedNumberContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * signedNumber: (MINUS)? NUMBER
 * ```
 */
export class SignedNumberVisitor extends AbstractParseTreeVisitor<string>
  implements ASN_3gppVisitor<string> {
  public visitChildren(ctx: SignedNumberContext): string {
    return ctx.text;
  }

  protected defaultResult(): string {
    return unimpl();
  }
}
