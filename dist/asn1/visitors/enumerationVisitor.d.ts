import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationItem } from '../classes/enumeratedType';
import { EnumerationContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * enumeration: enumerationItem (COMMA enumerationItem)*
 * ```
 */
export declare class EnumerationVisitor extends AbstractParseTreeVisitor<EnumerationItem[]> implements grammar3rdVisitor<EnumerationItem[]> {
    visitChildren(ctx: EnumerationContext): EnumerationItem[];
    protected defaultResult(): EnumerationItem[];
}
//# sourceMappingURL=enumerationVisitor.d.ts.map