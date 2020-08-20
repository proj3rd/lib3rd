import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationItem } from '../classes/enumeratedType';
import { RootEnumerationContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * rootEnumeration: enumeration
 * ```
 */
export declare class RootEnumerationVisitor extends AbstractParseTreeVisitor<EnumerationItem[]> implements ASN_3gppVisitor<EnumerationItem[]> {
    visitChildren(ctx: RootEnumerationContext): EnumerationItem[];
    protected defaultResult(): EnumerationItem[];
}
//# sourceMappingURL=rootEnumerationVisitor.d.ts.map