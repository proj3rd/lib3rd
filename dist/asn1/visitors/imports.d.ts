import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ImportsContext } from '../ASN_3gppParser';
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
    visitChildren(importsCtx: ImportsContext): ISymbolsFromModule;
}
