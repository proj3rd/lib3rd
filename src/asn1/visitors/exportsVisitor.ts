import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Exports } from '../classes/moduleDefinition';
import { ExportsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

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
  implements ASN_3gppVisitor<Exports | null> {
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
