import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { BuiltinValue } from '../classes/value';
import {
  BooleanValueContext,
  BuiltinValueContext,
  ChoiceValueContext,
  EnumeratedValueContext,
  IntegerValueContext,
  ObjectIdentifierValueContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { unimpl } from './_devUtils';
import { BooleanValueVisitor } from './booleanValueVisitor';
import { EnumeratedValueVisitor } from './enumeratedValueVisitor';
import { IntegerValueVisitor } from './integerValueVisitor';

/**
 * # Grammar
 * ```
 * builtinValue :
 *   enumeratedValue
 *   | integerValue
 *   | choiceValue
 *   | objectIdentifierValue
 *   | booleanValue
 *   | CSTRING
 *   | BSTRING
 * ```
 */
export class BuiltinValueVisitor extends AbstractParseTreeVisitor<BuiltinValue>
  implements ASN_3gppVisitor<BuiltinValue> {
  public visitChildren(ctx: BuiltinValueContext): BuiltinValue {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof EnumeratedValueContext) {
      return childCtx.accept(new EnumeratedValueVisitor());
    } else if (childCtx instanceof IntegerValueContext) {
      return childCtx.accept(new IntegerValueVisitor());
    } else if (childCtx instanceof ChoiceValueContext) {
      return unimpl(ctx);
    } else if (childCtx instanceof ObjectIdentifierValueContext) {
      return unimpl(ctx);
    } else if (childCtx instanceof BooleanValueContext) {
      return childCtx.accept(new BooleanValueVisitor());
    } else {
      return ctx.text;
    }
  }

  protected defaultResult(): BuiltinValue {
    return '';
  }
}
