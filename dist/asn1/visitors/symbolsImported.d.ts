import { ISymbolsFromModule } from './symbolsFromModuleList';
/**
 * ANTLR4 grammar
 * ```
 * symbolsImported : (symbolsFromModuleList )?
 * ```
 */
export declare class SymbolsImportedVisitor {
    visitChildren(symbolsImportedCtx: any): ISymbolsFromModule;
}
