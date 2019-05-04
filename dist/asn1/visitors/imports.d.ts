import { ISymbolsFromModule } from './symbolsFromModuleList';
/**
 * ANTLR4 grammar
 * ```
 * imports :   (IMPORTS_LITERAL symbolsImported SEMI_COLON )?
 * ```
 */
export declare class ImportsVisitor {
    visitChildren(importsCtx: any): ISymbolsFromModule;
}
