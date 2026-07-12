import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { BuiltinValue } from '../types/builtinValue';
import { BuiltinValueContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
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
export declare class BuiltinValueVisitor extends AbstractParseTreeVisitor<BuiltinValue> implements grammar3rdVisitor<BuiltinValue> {
    visitChildren(ctx: BuiltinValueContext): BuiltinValue;
    protected defaultResult(): BuiltinValue;
}
//# sourceMappingURL=builtinValueVisitor.d.ts.map