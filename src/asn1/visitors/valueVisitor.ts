/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Value } from '../classes/value';
import { ValueContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { BuiltinValueVisitor } from './builtinValueVisitor';

/**
 * # Grammar
 * ```
 * value: builtinValue
 * ```
 */
export class ValueVisitor extends AbstractParseTreeVisitor<Value>
  implements grammar3rdVisitor<Value> {
  public visitChildren(ctx: ValueContext): Value {
    const builtinValueCtx = ctx.builtinValue();
    return builtinValueCtx.accept(new BuiltinValueVisitor());
  }

  protected defaultResult(): Value {
    return '';
  }
}
