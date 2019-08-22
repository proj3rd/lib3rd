import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SymbolsImportedContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ISymbolsFromModule } from './symbolsFromModuleList';
/**
 * ANTLR4 grammar
 * ```
 * symbolsImported : (symbolsFromModuleList )?
 * ```
 */
export declare class SymbolsImportedVisitor extends AbstractParseTreeVisitor<ISymbolsFromModule> implements ASN_3gppVisitor<ISymbolsFromModule> {
    defaultResult(): ISymbolsFromModule;
    visitChildren(symbolsImportedCtx: SymbolsImportedContext): ISymbolsFromModule;
}
