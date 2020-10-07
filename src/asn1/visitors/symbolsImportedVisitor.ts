/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SymbolsFromModule } from '../classes/symbolsFromModule';
import { SymbolsImportedContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { SymbolsFromModuleListVisitor } from './symbolsFromModuleList';

/**
 * # Grammar
 * ```
 * symbolsImported: (symbolsFromModuleList)?
 * ```
 */
export class SymbolsImportedVisitor
  extends AbstractParseTreeVisitor<SymbolsFromModule[]>
  implements grammar3rdVisitor<SymbolsFromModule[]> {
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
