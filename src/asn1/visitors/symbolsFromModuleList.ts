import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { SymbolsFromModuleListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { SymbolsFromModuleVisitor } from './symbolsFromModule';

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
export class SymbolsFromModuleListVisitor extends AbstractParseTreeVisitor<ISymbolsFromModule>
                                          implements ASN_3gppVisitor<ISymbolsFromModule> {
  public defaultResult(): ISymbolsFromModule {
    return {};
  }

  public visitChildren(symbolsFromModuleListCtx: SymbolsFromModuleListContext): ISymbolsFromModule {
    const symbolsFromModule: ISymbolsFromModule = {};
    symbolsFromModuleListCtx.children.forEach((symbolsFromModuleCtx: any) => {
      const {moduleName, symbols} = symbolsFromModuleCtx.accept(new SymbolsFromModuleVisitor());
      symbols.forEach((symbol: string) => {
        symbolsFromModule[symbol] = moduleName;
      });
    });
    return symbolsFromModule;
  }
}
