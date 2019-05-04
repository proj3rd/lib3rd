import { SymbolsFromModuleVisitor } from './symbolsFromModule';

/**
 * objectIdentifier: moduleName mapping
 */
export interface ISymbolsFromModule {
  [objectIdentifier: string]: string;
}

/**
 * ANTLR4 grammar
 * ```
 * symbolsFromModuleList :
 *      (symbolsFromModule) (symbolsFromModule)*
 * ```
 */
export class SymbolsFromModuleListVisitor {
  public visitChildren(symbolsFromModuleListCtx: any): ISymbolsFromModule {
    const symbolsFromModule: ISymbolsFromModule = {};
    symbolsFromModuleListCtx.children.forEach((symbolsFromModuleCtx: any) => {
      const {moduleName, symbols} = symbolsFromModuleCtx.accept(new SymbolsFromModuleVisitor());
      symbols.forEach((symbol: string) => {
        symbolsFromModule[symbol] = moduleName;
      });
    });
    return symbolsFromModule;
  }
}
