import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationItem } from '../classes/enumeratedType';
import { EnumerationContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * enumeration: enumerationItem (COMMA enumerationItem)*
 * ```
 */
export declare class EnumerationVisitor extends AbstractParseTreeVisitor<EnumerationItem[]> implements ASN_3gppVisitor<EnumerationItem[]> {
    visitChildren(ctx: EnumerationContext): EnumerationItem[];
    protected defaultResult(): EnumerationItem[];
}
//# sourceMappingURL=enumerationVisitor.d.ts.map