import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootEnumerationContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { EnumerationItem } from './enumerationItem';
/**
 * ANTLR4 grammar
 * ```
 * rootEnumeration : enumeration
 * ```
 */
export declare class RootEnumerationVisitor extends AbstractParseTreeVisitor<EnumerationItem[]> implements ASN_3gppVisitor<EnumerationItem[]> {
    defaultResult(): EnumerationItem[];
    visitChildren(rootEnumerationCtx: RootEnumerationContext): EnumerationItem[];
}
