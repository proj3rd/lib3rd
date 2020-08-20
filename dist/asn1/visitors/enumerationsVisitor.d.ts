import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationItem } from '../classes/enumeratedType';
import { EnumerationsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * enumerations: rootEnumeration (COMMA ELLIPSIS exceptionSpec? (COMMA additionalEnumeration)?)?
 * ```
 */
export declare class EnumerationsVisitor extends AbstractParseTreeVisitor<EnumerationItem[]> implements ASN_3gppVisitor<EnumerationItem[]> {
    visitChildren(ctx: EnumerationsContext): EnumerationItem[];
    protected defaultResult(): EnumerationItem[];
}
//# sourceMappingURL=enumerationsVisitor.d.ts.map