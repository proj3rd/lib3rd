import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ValueContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { BuiltinValue } from './builtinValue';
/**
 * ANTLR4 grammar
 * ```
 * value  :   builtinValue
 * ```
 */
export declare class ValueVisitor extends AbstractParseTreeVisitor<BuiltinValue> implements ASN_3gppVisitor<BuiltinValue> {
    defaultResult(): BuiltinValue;
    visitChildren(valueCtx: ValueContext): BuiltinValue;
}
