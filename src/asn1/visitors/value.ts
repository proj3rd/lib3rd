import { BuiltinValueVisitor } from './builtinValue';

/**
 * ANTLR4 grammar
 * ```
 * value  :   builtinValue
 * ```
 */
export class ValueVisitor {
  public visitChildren(valueCtx: any): any /* TODO */ {
    const builtinValueCtx = valueCtx.children[0];
    return builtinValueCtx.accept(new BuiltinValueVisitor());
  }
}
