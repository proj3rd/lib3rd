import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SymbolsFromModule } from '../classes/symbolsFromModule';
import { SymbolsImportedContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * symbolsImported: (symbolsFromModuleList)?
 * ```
 */
export declare class SymbolsImportedVisitor extends AbstractParseTreeVisitor<SymbolsFromModule[]> implements grammar3rdVisitor<SymbolsFromModule[]> {
    visitChildren(ctx: SymbolsImportedContext): SymbolsFromModule[];
    protected defaultResult(): SymbolsFromModule[];
}
//# sourceMappingURL=symbolsImportedVisitor.d.ts.map