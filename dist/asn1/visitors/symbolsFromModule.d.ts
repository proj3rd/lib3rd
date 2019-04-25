/**
 * ANTLR4 grammar
 * ```
 * symbolsFromModule : symbolList FROM_LITERAL globalModuleReference
 * symbolList   : (symbol) (COMMA symbol)*
 * ```
 */
export declare class SymbolsFromModuleVisitor {
    visitChildren(symbolsFromModuleCtx: any): {
        moduleName: string;
        symbols: string[];
    };
}
