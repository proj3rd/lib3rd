import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { BuiltinValueContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
export declare type BuiltinValue = string | boolean | number;
/**
 * ANTLR4 grammar
 * ```
 * builtinValue :
 *     enumeratedValue
 *   |	integerValue
 *   |	choiceValue
 *   |	objectIdentifierValue
 *   |	booleanValue
 *   |   CSTRING
 *   |   BSTRING
 * ```
 */
export declare class BuiltinValueVisitor extends AbstractParseTreeVisitor<BuiltinValue> implements ASN_3gppVisitor<BuiltinValue> {
    defaultResult(): BuiltinValue;
    visitChildren(builtinValueCtx: BuiltinValueContext): BuiltinValue;
}
