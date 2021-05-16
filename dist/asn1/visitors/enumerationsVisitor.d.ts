import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { EnumerationItem } from '../types/enumerationItem';
/**
 * # Grammar
 * ```
 * enumerations: rootEnumeration (COMMA ELLIPSIS exceptionSpec? (COMMA additionalEnumeration)?)?
 * ```
 */
export declare class EnumerationsVisitor extends AbstractParseTreeVisitor<EnumerationItem[]> implements grammar3rdVisitor<EnumerationItem[]> {
    visitChildren(ctx: EnumerationsContext): EnumerationItem[];
    protected defaultResult(): EnumerationItem[];
}
//# sourceMappingURL=enumerationsVisitor.d.ts.map