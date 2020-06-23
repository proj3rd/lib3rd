import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Value } from '../classes/value';
import { ValueContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { BuiltinValueVisitor } from './builtinValueVisitor';

/**
 * # Grammar
 * ```
 * value: builtinValue
 * ```
 */
export class ValueVisitor extends AbstractParseTreeVisitor<Value>
  implements ASN_3gppVisitor<Value> {
  public visitChildren(ctx: ValueContext): Value {
    const builtinValueCtx = ctx.builtinValue();
    return builtinValueCtx.accept(new BuiltinValueVisitor());
  }

  protected defaultResult(): Value {
    return '';
  }
}
