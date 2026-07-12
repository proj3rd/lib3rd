/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { BooleanValue } from '../classes/booleanValue';
import { BooleanValueContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * booleanValue: TRUE_LITERAL | FALSE_LITERAL | TRUE_SMALL_LITERAL | FALSE_SMALL_LITERAL
 * ```
 */
export class BooleanValueVisitor extends AbstractParseTreeVisitor<BooleanValue>
  implements grammar3rdVisitor<BooleanValue> {
  public visitChildren(ctx: BooleanValueContext): BooleanValue {
    const { text } = ctx;
    if (
      text === 'TRUE'
      || text === 'true'
      || text === 'FALSE'
      || text === 'false'
    ) {
      return new BooleanValue(text);
    }
    throw Error();
  }

  protected defaultResult(): BooleanValue {
    return unimpl();
  }
}
