/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { SignedNumberContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * signedNumber: (MINUS)? NUMBER
 * ```
 */
export class SignedNumberVisitor extends AbstractParseTreeVisitor<string>
  implements grammar3rdVisitor<string> {
  public visitChildren(ctx: SignedNumberContext): string {
    return ctx.text;
  }

  protected defaultResult(): string {
    return unimpl();
  }
}
