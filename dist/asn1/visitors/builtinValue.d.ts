import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { BuiltinValueContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjectIdentifierValue } from '../classes/objectIdentifierValue';
export declare type BuiltinValue = string | boolean | number | ObjectIdentifierValue;
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
