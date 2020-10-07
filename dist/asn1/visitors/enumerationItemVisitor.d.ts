import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationItem } from '../classes/enumeratedType';
import { EnumerationItemContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * enumerationItem: IDENTIFIER | namedNumber | value
 * ```
 */
export declare class EnumerationItemVisitor extends AbstractParseTreeVisitor<EnumerationItem> implements grammar3rdVisitor<EnumerationItem> {
    visitChildren(ctx: EnumerationItemContext): EnumerationItem;
    protected defaultResult(): EnumerationItem;
}
//# sourceMappingURL=enumerationItemVisitor.d.ts.map