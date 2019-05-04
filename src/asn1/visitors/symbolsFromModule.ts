/**
 * ANTLR4 grammar
 * ```
 * symbolsFromModule : symbolList FROM_LITERAL globalModuleReference
 * symbolList   : (symbol) (COMMA symbol)*
 * ```
 */
export class SymbolsFromModuleVisitor {
  public visitChildren(symbolsFromModuleCtx: any): {moduleName: string, symbols: string[]} {
    const moduleName = symbolsFromModuleCtx.children[2].getText();
    const symbolListCtx = symbolsFromModuleCtx.children[0];
    const symbols: string[] = [];
    symbolListCtx.children.forEach((symbolCtx: any, index: number) => {
      if (index % 2) {
        return;
      }
      // TODO: Need to implement/use SymbolCtxVisitor class?
      symbols.push(symbolCtx.children[0].getText());
    });
    return {moduleName, symbols};
  }
}
