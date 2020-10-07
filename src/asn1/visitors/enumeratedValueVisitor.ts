/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumeratedValueContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * enumeratedValue: IDENTIFIER
 * ```
 */
export class EnumeratedValueVisitor extends AbstractParseTreeVisitor<string>
  implements grammar3rdVisitor<string> {
  public visitChildren(ctx: EnumeratedValueContext): string {
    return ctx.text;
  }

  protected defaultResult(): string {
    return '';
  }
}
