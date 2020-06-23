import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SignedNumberContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { unimpl } from './_devUtils';

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
