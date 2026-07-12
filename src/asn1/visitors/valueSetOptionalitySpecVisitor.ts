/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { Optionality } from '../classes/optionality';
import { ValueSetOptionalitySpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * valueSetOptionalitySpec: OPTIONAL_LITERAL | DEFAULT_LITERAL valueSet
 * ```
 */
export class ValueSetOptionalitySpecVisitor
  extends AbstractParseTreeVisitor<Optionality>
  implements grammar3rdVisitor<Optionality> {
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
