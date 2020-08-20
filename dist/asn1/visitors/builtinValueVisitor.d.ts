import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { BuiltinValue } from '../classes/value';
import { BuiltinValueContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
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
export declare class BuiltinValueVisitor extends AbstractParseTreeVisitor<BuiltinValue> implements ASN_3gppVisitor<BuiltinValue> {
    visitChildren(ctx: BuiltinValueContext): BuiltinValue;
    protected defaultResult(): BuiltinValue;
}
//# sourceMappingURL=builtinValueVisitor.d.ts.map