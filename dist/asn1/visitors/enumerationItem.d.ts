import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationItemContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { BuiltinValue } from './builtinValue';
export declare type EnumerationItem = BuiltinValue;
/**
 * ANTLR4 grammar
 * ```
 * enumerationItem : IDENTIFIER | namedNumber | value
 * ```
 */
export declare class EnumerationItemVisitor extends AbstractParseTreeVisitor<EnumerationItem> implements ASN_3gppVisitor<EnumerationItem> {
    defaultResult(): EnumerationItem;
    visitChildren(enumerationItemCtx: EnumerationItemContext): EnumerationItem;
}
