import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SymbolsFromModuleListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
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
export declare class SymbolsFromModuleListVisitor extends AbstractParseTreeVisitor<ISymbolsFromModule> implements ASN_3gppVisitor<ISymbolsFromModule> {
    defaultResult(): ISymbolsFromModule;
    visitChildren(symbolsFromModuleListCtx: SymbolsFromModuleListContext): ISymbolsFromModule;
}
