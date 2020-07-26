import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { Optionality } from '../classes/optionality';
import { ValueSetOptionalitySpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * valueSetOptionalitySpec: OPTIONAL_LITERAL | DEFAULT_LITERAL valueSet
 * ```
 */
export class ValueSetOptionalitySpecVisitor
  extends AbstractParseTreeVisitor<Optionality>
  implements ASN_3gppVisitor<Optionality> {
  public visitChildren(ctx: ValueSetOptionalitySpecContext): Optionality {
    const valueSetCtx = ctx.valueSet();
    if (valueSetCtx === undefined) {
      return new Optionality();
    }
    return unimpl();
  }

  protected defaultResult(): Optionality {
    return unimpl();
  }
}
