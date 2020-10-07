/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SymbolsFromModule } from '../classes/symbolsFromModule';
import { SymbolsFromModuleContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { GlobalModuleReferenceVisitor } from './globalModuleReferenceVisitor';
import { SymbolListVisitor } from './symbolListVisitor';

/**
 * # Grammar
 * ```
 * symbolsFromModule: symbolList FROM_LITERAL globalModuleReference
 * ```
 */
export class SymbolsFromModuleVisitor
  extends AbstractParseTreeVisitor<SymbolsFromModule>
  implements grammar3rdVisitor<SymbolsFromModule> {
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
