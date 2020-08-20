import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationItem } from '../classes/enumeratedType';
import { AdditionalEnumerationContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * additionalEnumeration: enumeration
 * ```
 */
export declare class AdditionalEnumerationVisitor extends AbstractParseTreeVisitor<EnumerationItem[]> implements ASN_3gppVisitor<EnumerationItem[]> {
    visitChildren(ctx: AdditionalEnumerationContext): EnumerationItem[];
    protected defaultResult(): EnumerationItem[];
}
//# sourceMappingURL=additionalEnumerationVisitor.d.ts.map