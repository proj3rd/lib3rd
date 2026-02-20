import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnSymbol } from '../classes/asnSymbol';
import { SymbolContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
export declare class SymbolVisitor extends AbstractParseTreeVisitor<AsnSymbol> implements grammar3rdVisitor<AsnSymbol> {
    visitChildren(ctx: SymbolContext): AsnSymbol;
    protected defaultResult(): AsnSymbol;
}
//# sourceMappingURL=symbolVisitor.d.ts.map