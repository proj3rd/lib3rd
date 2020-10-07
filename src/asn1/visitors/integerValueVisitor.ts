/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { IntegerValue } from '../classes/integerValue';
import { IntegerValueContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { SignedNumberVisitor } from './signedNumberVisitor';

/**
 * # Grammar
 * ```
 * integerValue: signedNumber | IDENTIFIER
 * ```
 */
export class IntegerValueVisitor extends AbstractParseTreeVisitor<IntegerValue>
  implements grammar3rdVisitor<IntegerValue> {
  public visitChildren(ctx: IntegerValueContext): IntegerValue {
    const signedNumberCtx = ctx.signedNumber();
    let literal: string | undefined;
    if (signedNumberCtx !== undefined) {
      literal = signedNumberCtx.accept(new SignedNumberVisitor());
    } else {
      literal = ctx.text;
    }
    return new IntegerValue(literal);
  }

  protected defaultResult(): IntegerValue {
    return unimpl();
  }
}
