import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ISymbolsFromModule } from './symbolsFromModuleList';
/**
 * ANTLR4 grammar
 * ```
 * imports :   (IMPORTS_LITERAL symbolsImported SEMI_COLON )?
 * ```
 */
export declare class ImportsVisitor extends AbstractParseTreeVisitor<ISymbolsFromModule> implements ASN_3gppVisitor<ISymbolsFromModule> {
    defaultResult(): ISymbolsFromModule;
    visitChildren(importsCtx: any): ISymbolsFromModule;
}
