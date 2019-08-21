import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SymbolsFromModuleContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
interface ISymbolsFromModule {
    moduleName: string;
    symbols: string[];
}
/**
 * ANTLR4 grammar
 * ```
 * symbolsFromModule : symbolList FROM_LITERAL globalModuleReference
 * symbolList   : (symbol) (COMMA symbol)*
 * ```
 */
export declare class SymbolsFromModuleVisitor extends AbstractParseTreeVisitor<ISymbolsFromModule> implements ASN_3gppVisitor<ISymbolsFromModule> {
    defaultResult(): ISymbolsFromModule;
    visitChildren(symbolsFromModuleCtx: SymbolsFromModuleContext): ISymbolsFromModule;
}
export {};
