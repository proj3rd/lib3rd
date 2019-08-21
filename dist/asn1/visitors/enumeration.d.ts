import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { EnumerationItem } from './enumerationItem';
/**
 * ANTLR4 grammar
 * ```
 * enumeration : enumerationItem ( COMMA enumerationItem)*
 * ```
 */
export declare class EnumerationVisitor extends AbstractParseTreeVisitor<EnumerationItem[]> implements ASN_3gppVisitor<EnumerationItem[]> {
    defaultResult(): EnumerationItem[];
    visitChildren(enumerationCtx: EnumerationContext): EnumerationItem[];
}
