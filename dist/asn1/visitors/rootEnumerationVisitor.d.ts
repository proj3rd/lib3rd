import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationItem } from '../classes/enumeratedType';
import { RootEnumerationContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * rootEnumeration: enumeration
 * ```
 */
export declare class RootEnumerationVisitor extends AbstractParseTreeVisitor<EnumerationItem[]> implements grammar3rdVisitor<EnumerationItem[]> {
    visitChildren(ctx: RootEnumerationContext): EnumerationItem[];
    protected defaultResult(): EnumerationItem[];
}
//# sourceMappingURL=rootEnumerationVisitor.d.ts.map