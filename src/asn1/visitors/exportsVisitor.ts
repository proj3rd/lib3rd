/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Exports } from '../classes/moduleDefinition';
import { ExportsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * exports: (
 *   EXPORST_LITERAL symbolsExported SEMI_COLON |
 *   EXPORTS LITERAL ALL_LITERAL SEMI_COLON
 * )?
 * ```
 */
export class ExportsVisitor extends AbstractParseTreeVisitor<Exports | null>
  implements grammar3rdVisitor<Exports | null> {
  public visitChildren(ctx: ExportsContext): Exports | null {
    if (ctx.childCount === 0) {
      return null;
    }
    throw Error('Not implemented');
  }

  protected defaultResult(): Exports | null {
    return null;
  }
}
