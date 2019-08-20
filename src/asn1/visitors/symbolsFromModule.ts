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
export class SymbolsFromModuleVisitor extends AbstractParseTreeVisitor<ISymbolsFromModule>
                                      implements ASN_3gppVisitor<ISymbolsFromModule> {
  public defaultResult(): ISymbolsFromModule {
    return { moduleName: undefined, symbols: [] };
  }

  public visitChildren(symbolsFromModuleCtx: SymbolsFromModuleContext): ISymbolsFromModule {
    const symbolListCtx = symbolsFromModuleCtx.children[0];
    const symbolsFromModule = {
      moduleName: symbolsFromModuleCtx.children[2].text,
      symbols: [],
    };
    for (let index = 0; index < symbolListCtx.childCount; index++) {
      if (index % 2) {
        return;
      }
      const symbolCtx = symbolListCtx.getChild(index);
      // TODO: Need to implement/use SymbolCtxVisitor class?
      symbolsFromModule.symbols.push(symbolCtx.getChild(0).text);
    }
    return symbolsFromModule;
  }
}
