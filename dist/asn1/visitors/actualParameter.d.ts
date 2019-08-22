import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ActualParameterContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { BuiltinValue } from './builtinValue';
export declare type ActualParameter = AsnType | BuiltinValue;
/**
 * ANTLR4 grammar
 * ```
 * actualParameter : asnType | value
 * ```
 */
export declare class ActualParameterVisitor extends AbstractParseTreeVisitor<ActualParameter> implements ASN_3gppVisitor<ActualParameter> {
    defaultResult(): ActualParameter;
    visitChildren(actualParameterCtx: ActualParameterContext): ActualParameter;
}
