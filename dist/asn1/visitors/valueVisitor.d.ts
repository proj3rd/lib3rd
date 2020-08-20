import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Value } from '../classes/value';
import { ValueContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * value: builtinValue
 * ```
 */
export declare class ValueVisitor extends AbstractParseTreeVisitor<Value> implements ASN_3gppVisitor<Value> {
    visitChildren(ctx: ValueContext): Value;
    protected defaultResult(): Value;
}
//# sourceMappingURL=valueVisitor.d.ts.map