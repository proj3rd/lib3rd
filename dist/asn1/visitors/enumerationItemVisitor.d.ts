import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationItem } from '../classes/enumeratedType';
import { EnumerationItemContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * enumerationItem: IDENTIFIER | namedNumber | value
 * ```
 */
export declare class EnumerationItemVisitor extends AbstractParseTreeVisitor<EnumerationItem> implements ASN_3gppVisitor<EnumerationItem> {
    visitChildren(ctx: EnumerationItemContext): EnumerationItem;
    protected defaultResult(): EnumerationItem;
}
//# sourceMappingURL=enumerationItemVisitor.d.ts.map