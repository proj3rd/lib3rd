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
export declare class SymbolsFromModuleListVisitor {
    visitChildren(symbolsFromModuleListCtx: any): ISymbolsFromModule;
}
