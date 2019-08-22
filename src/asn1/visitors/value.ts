import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ValueContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { BuiltinValue, BuiltinValueVisitor } from './builtinValue';

/**
 * ANTLR4 grammar
 * ```
 * value  :   builtinValue
 * ```
 */
export class ValueVisitor extends AbstractParseTreeVisitor<BuiltinValue> implements ASN_3gppVisitor<BuiltinValue> {
  public defaultResult(): BuiltinValue {
    return undefined;
  }

  public visitChildren(valueCtx: ValueContext): BuiltinValue {
    const builtinValueCtx = valueCtx.children[0];
    return builtinValueCtx.accept(new BuiltinValueVisitor());
  }
}
