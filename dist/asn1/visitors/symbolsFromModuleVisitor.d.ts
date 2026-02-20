import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SymbolsFromModule } from '../classes/symbolsFromModule';
import { SymbolsFromModuleContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * symbolsFromModule: symbolList FROM_LITERAL globalModuleReference
 * ```
 */
export declare class SymbolsFromModuleVisitor extends AbstractParseTreeVisitor<SymbolsFromModule> implements grammar3rdVisitor<SymbolsFromModule> {
    visitChildren(ctx: SymbolsFromModuleContext): SymbolsFromModule;
    protected defaultResult(): SymbolsFromModule;
}
//# sourceMappingURL=symbolsFromModuleVisitor.d.ts.map