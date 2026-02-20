import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumeratedValueContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * enumeratedValue: IDENTIFIER
 * ```
 */
export declare class EnumeratedValueVisitor extends AbstractParseTreeVisitor<string> implements grammar3rdVisitor<string> {
    visitChildren(ctx: EnumeratedValueContext): string;
    protected defaultResult(): string;
}
//# sourceMappingURL=enumeratedValueVisitor.d.ts.map