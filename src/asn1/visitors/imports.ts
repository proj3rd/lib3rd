import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ImportsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ISymbolsFromModule } from './symbolsFromModuleList';
import { SymbolsImportedVisitor } from './symbolsImported';

/**
 * ANTLR4 grammar
 * ```
 * imports :   (IMPORTS_LITERAL symbolsImported SEMI_COLON )?
 * ```
 */
export class ImportsVisitor extends AbstractParseTreeVisitor<ISymbolsFromModule>
                            implements ASN_3gppVisitor<ISymbolsFromModule> {
  public defaultResult(): ISymbolsFromModule {
    return {};
  }

  public visitChildren(importsCtx: ImportsContext): ISymbolsFromModule {
    let imports: ISymbolsFromModule = {};
    if (importsCtx.children) {
      imports = importsCtx.children[1].accept(new SymbolsImportedVisitor());
    }
    return imports;
  }
}
