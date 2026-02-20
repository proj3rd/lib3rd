import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { IntegerValue } from '../classes/integerValue';
import { IntegerValueContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * integerValue: signedNumber | IDENTIFIER
 * ```
 */
export declare class IntegerValueVisitor extends AbstractParseTreeVisitor<IntegerValue> implements grammar3rdVisitor<IntegerValue> {
    visitChildren(ctx: IntegerValueContext): IntegerValue;
    protected defaultResult(): IntegerValue;
}
//# sourceMappingURL=integerValueVisitor.d.ts.map