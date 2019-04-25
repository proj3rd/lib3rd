import { ISymbolsFromModule, SymbolsFromModuleListVisitor } from './symbolsFromModuleList';

/**
 * ANTLR4 grammar
 * ```
 * symbolsImported : (symbolsFromModuleList )?
 * ```
 */
export class SymbolsImportedVisitor {
  public visitChildren(symbolsImportedCtx: any): ISymbolsFromModule {
    let symbolsFromModule: ISymbolsFromModule = {};
    if (symbolsImportedCtx.children) {
      symbolsFromModule = symbolsImportedCtx.children[0].accept(new SymbolsFromModuleListVisitor());
    }
    return symbolsFromModule;
  }
}
