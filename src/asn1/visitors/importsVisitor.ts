import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Imports } from '../classes/imports';
import { SymbolsFromModule } from '../classes/symbolsFromModule';
import {
  GlobalModuleReferenceContext,
  ImportsContext,
  SymbolsFromModuleContext,
  SymbolsFromModuleListContext,
  SymbolsImportedContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { SymbolListVisitor } from './symbolListVisitor';

/**
 * # Grammar
 * ```
 * imports: (IMPORTS_LITERAL symbolsImported SEMI_COLON)?
 * ```
 */
export class ImportsVisitor extends AbstractParseTreeVisitor<Imports | null>
  implements ASN_3gppVisitor<Imports | null> {
  public visitChildren(ctx: ImportsContext): Imports | null {
    if (ctx.childCount === 0) {
      return null;
    }
    const symbolsImportedCtx = ctx.symbolsImported();
    if (symbolsImportedCtx === undefined) {
      throw Error();
    }
    const imports = symbolsImportedCtx.accept(new SymbolsImportedVisitor());
    return new Imports(imports);
  }

  protected defaultResult(): Imports | null {
    return null;
  }
}

/**
 * # Grammar
 * ```
 * symbolsImported: (symbolsFromModuleList)?
 * ```
 */
class SymbolsImportedVisitor
  extends AbstractParseTreeVisitor<SymbolsFromModule[]>
  implements ASN_3gppVisitor<SymbolsFromModule[]> {
  public visitChildren(ctx: SymbolsImportedContext): SymbolsFromModule[] {
    if (ctx.childCount === 0) {
      return [];
    }
    const symbolsFromModuleListCtx = ctx.symbolsFromModuleList();
    if (symbolsFromModuleListCtx === undefined) {
      throw Error();
    }
    return symbolsFromModuleListCtx.accept(new SymbolsFromModuleListVisitor());
  }

  protected defaultResult(): SymbolsFromModule[] {
    return [];
  }
}

/**
 * # Grammar
 * ```
 * symbolsFromModuleList: (symbolsFromModule) (symbolsFromModule)*
 * ```
 */
class SymbolsFromModuleListVisitor
  extends AbstractParseTreeVisitor<SymbolsFromModule[]>
  implements ASN_3gppVisitor<SymbolsFromModule[]> {
  public visitChildren(ctx: SymbolsFromModuleListContext): SymbolsFromModule[] {
    const symbolsFromModuleCtxes = ctx.symbolsFromModule();
    return symbolsFromModuleCtxes.map((symbolsFromModuleCtx) =>
      symbolsFromModuleCtx.accept(new SymbolsFromModuleVisitor())
    );
  }

  protected defaultResult(): SymbolsFromModule[] {
    return [];
  }
}

/**
 * # Grammar
 * ```
 * symbolsFromModule: symbolList FROM_LITERAL globalModuleReference
 * ```
 */
class SymbolsFromModuleVisitor
  extends AbstractParseTreeVisitor<SymbolsFromModule>
  implements ASN_3gppVisitor<SymbolsFromModule> {
  public visitChildren(ctx: SymbolsFromModuleContext): SymbolsFromModule {
    const symbols = ctx.symbolList().accept(new SymbolListVisitor());
    const moduleName = ctx
      .globalModuleReference()
      .accept(new GlobalModuleReferenceVisitor());
    return new SymbolsFromModule(moduleName, symbols);
  }

  protected defaultResult(): SymbolsFromModule {
    return new SymbolsFromModule('', []);
  }
}

/**
 * # Grammar
 * ```
 * globalModuleReference: IDENTIFIER assignedIdentifier
 * ```
 */
class GlobalModuleReferenceVisitor extends AbstractParseTreeVisitor<string>
  implements ASN_3gppVisitor<string> {
  public visitChildren(ctx: GlobalModuleReferenceContext): string {
    if (ctx.assignedIdentifier().text !== '') {
      throw Error();
    }
    return ctx.text;
  }

  protected defaultResult(): string {
    return '';
  }
}
