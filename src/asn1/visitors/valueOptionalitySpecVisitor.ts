/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { Optionality } from '../classes/optionality';
import { ValueOptionalitySpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ValueVisitor } from './valueVisitor';

/**
 * # Grammar
 * ```
 * valueOptionalitySpec: OPTIONAL_LITERAL | (DEFAULT_LITERAL value)
 * ```
 */
export class ValueOptionalitySpecVisitor
  extends AbstractParseTreeVisitor<Optionality>
  implements grammar3rdVisitor<Optionality> {
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
