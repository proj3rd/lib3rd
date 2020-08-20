import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnSymbol } from '../classes/asnSymbol';
import { SymbolListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * symbolList: (symbol) (COMMA symbol)*
 * ```
 */
export declare class SymbolListVisitor extends AbstractParseTreeVisitor<AsnSymbol[]> implements ASN_3gppVisitor<AsnSymbol[]> {
    visitChildren(ctx: SymbolListContext): AsnSymbol[];
    protected defaultResult(): AsnSymbol[];
}
//# sourceMappingURL=symbolListVisitor.d.ts.map