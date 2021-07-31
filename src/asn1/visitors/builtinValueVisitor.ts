/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { BuiltinValue } from '../types/builtinValue';
import {
  BooleanValueContext,
  BuiltinValueContext,
  ChoiceValueContext,
  EnumeratedValueContext,
  IntegerValueContext,
  ObjectIdentifierValueContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { BooleanValueVisitor } from './booleanValueVisitor';
import { EnumeratedValueVisitor } from './enumeratedValueVisitor';
import { IntegerValueVisitor } from './integerValueVisitor';
import { ObjectIdentifierValueVisitor } from './objectIdentifierValueVisitor';

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
  implements grammar3rdVisitor<BuiltinValue> {
  public visitChildren(ctx: BuiltinValueContext): BuiltinValue {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof EnumeratedValueContext) {
      return childCtx.accept(new EnumeratedValueVisitor());
    } if (childCtx instanceof IntegerValueContext) {
      return childCtx.accept(new IntegerValueVisitor());
    } if (childCtx instanceof ChoiceValueContext) {
      return unimpl(ctx.text);
    } if (childCtx instanceof ObjectIdentifierValueContext) {
      return childCtx.accept(new ObjectIdentifierValueVisitor());
    } if (childCtx instanceof BooleanValueContext) {
      return childCtx.accept(new BooleanValueVisitor());
    }
    return ctx.text;
  }

  protected defaultResult(): BuiltinValue {
    return '';
  }
}
