import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { BooleanValue } from '../classes/booleanValue';
import { BooleanValueContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { unimpl } from './_devUtils';

/**
 * # Grammar
 * ```
 * booleanValue: TRUE_LITERAL | FALSE_LITERAL | TRUE_SMALL_LITERAL | FALSE_SMALL_LITERAL
 * ```
 */
export class BooleanValueVisitor extends AbstractParseTreeVisitor<BooleanValue>
  implements ASN_3gppVisitor<BooleanValue> {
  public visitChildren(ctx: BooleanValueContext): BooleanValue {
    const text = ctx.text;
    if (
      text === 'TRUE' ||
      text === 'true' ||
      text === 'FALSE' ||
      text === 'false'
    ) {
      return new BooleanValue(text);
    }
    throw Error();
  }

  protected defaultResult(): BooleanValue {
    return unimpl();
  }
}
