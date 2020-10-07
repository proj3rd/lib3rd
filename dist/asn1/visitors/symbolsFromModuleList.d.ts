import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SymbolsFromModule } from '../classes/symbolsFromModule';
import { SymbolsFromModuleListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * symbolsFromModuleList: (symbolsFromModule) (symbolsFromModule)*
 * ```
 */
export declare class SymbolsFromModuleListVisitor extends AbstractParseTreeVisitor<SymbolsFromModule[]> implements grammar3rdVisitor<SymbolsFromModule[]> {
    visitChildren(ctx: SymbolsFromModuleListContext): SymbolsFromModule[];
    protected defaultResult(): SymbolsFromModule[];
}
//# sourceMappingURL=symbolsFromModuleList.d.ts.map