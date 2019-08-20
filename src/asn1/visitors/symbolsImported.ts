import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { SymbolsImportedContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { ISymbolsFromModule, SymbolsFromModuleListVisitor } from './symbolsFromModuleList';

/**
 * ANTLR4 grammar
 * ```
 * symbolsImported : (symbolsFromModuleList )?
 * ```
 */
export class SymbolsImportedVisitor extends AbstractParseTreeVisitor<ISymbolsFromModule>
                                    implements ASN_3gppVisitor<ISymbolsFromModule> {
  public defaultResult(): ISymbolsFromModule {
    return {};
  }

  public visitChildren(symbolsImportedCtx: SymbolsImportedContext): ISymbolsFromModule {
    let symbolsFromModule: ISymbolsFromModule = {};
    if (symbolsImportedCtx.children) {
      symbolsFromModule = symbolsImportedCtx.children[0].accept(new SymbolsFromModuleListVisitor());
    }
    return symbolsFromModule;
  }
}
