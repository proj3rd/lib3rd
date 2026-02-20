import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AdditionalEnumerationContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { EnumerationItem } from '../types/enumerationItem';
/**
 * # Grammar
 * ```
 * additionalEnumeration: enumeration
 * ```
 */
export declare class AdditionalEnumerationVisitor extends AbstractParseTreeVisitor<EnumerationItem[]> implements grammar3rdVisitor<EnumerationItem[]> {
    visitChildren(ctx: AdditionalEnumerationContext): EnumerationItem[];
    protected defaultResult(): EnumerationItem[];
}
//# sourceMappingURL=additionalEnumerationVisitor.d.ts.map