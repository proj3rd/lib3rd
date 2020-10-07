/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { GlobalModuleReferenceContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * globalModuleReference: IDENTIFIER assignedIdentifier
 * ```
 */
export class GlobalModuleReferenceVisitor extends AbstractParseTreeVisitor<string>
  implements grammar3rdVisitor<string> {
  public visitChildren(ctx: GlobalModuleReferenceContext): string {
    if (ctx.assignedIdentifier().text !== '') {
      throw Error();
    }
    return ctx.text;
  }

  protected defaultResult(): string {
    return '';
  }
}
