import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { Optionality } from '../classes/optionality';
import { ValueOptionalitySpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ValueVisitor } from './valueVisitor';

/**
 * # Grammar
 * ```
 * valueOptionalitySpec: OPTIONAL_LITERAL | (DEFAULT_LITERAL value)
 * ```
 */
export class ValueOptionalitySpecVisitor
  extends AbstractParseTreeVisitor<Optionality>
  implements ASN_3gppVisitor<Optionality> {
  public visitChildren(ctx: ValueOptionalitySpecContext): Optionality {
    const valueCtx = ctx.value();
    if (valueCtx === undefined) {
      return new Optionality();
    }
    const value = valueCtx.accept(new ValueVisitor());
    return new Optionality(value);
  }

  protected defaultResult(): Optionality {
    return unimpl();
  }
}
