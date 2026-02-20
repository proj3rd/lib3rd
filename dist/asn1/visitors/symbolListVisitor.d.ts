import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnSymbol } from '../classes/asnSymbol';
import { SymbolListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * symbolList: (symbol) (COMMA symbol)*
 * ```
 */
export declare class SymbolListVisitor extends AbstractParseTreeVisitor<AsnSymbol[]> implements grammar3rdVisitor<AsnSymbol[]> {
    visitChildren(ctx: SymbolListContext): AsnSymbol[];
    protected defaultResult(): AsnSymbol[];
}
//# sourceMappingURL=symbolListVisitor.d.ts.map