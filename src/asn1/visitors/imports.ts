import { ISymbolsFromModule } from './symbolsFromModuleList';
import { SymbolsImportedVisitor } from './symbolsImported';

/**
 * ANTLR4 grammar
 * ```
 * imports :   (IMPORTS_LITERAL symbolsImported SEMI_COLON )?
 * ```
 */
export class ImportsVisitor {
  public visitChildren(importsCtx: any): ISymbolsFromModule {
    let imports: ISymbolsFromModule = {};
    if (importsCtx.children) {
      imports = importsCtx.children[1].accept(new SymbolsImportedVisitor());
    }
    return imports;
  }
}
