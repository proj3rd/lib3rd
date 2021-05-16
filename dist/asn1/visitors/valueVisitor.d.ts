import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ValueContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { Value } from '../types/value';
/**
 * # Grammar
 * ```
 * value: builtinValue
 * ```
 */
export declare class ValueVisitor extends AbstractParseTreeVisitor<Value> implements grammar3rdVisitor<Value> {
    visitChildren(ctx: ValueContext): Value;
    protected defaultResult(): Value;
}
//# sourceMappingURL=valueVisitor.d.ts.map