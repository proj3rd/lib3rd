/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SymbolsFromModule } from '../classes/symbolsFromModule';
import { SymbolsFromModuleListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { SymbolsFromModuleVisitor } from './symbolsFromModuleVisitor';

/**
 * # Grammar
 * ```
 * symbolsFromModuleList: (symbolsFromModule) (symbolsFromModule)*
 * ```
 */
export class SymbolsFromModuleListVisitor
  extends AbstractParseTreeVisitor<SymbolsFromModule[]>
  implements grammar3rdVisitor<SymbolsFromModule[]> {
  public visitChildren(ctx: SymbolsFromModuleListContext): SymbolsFromModule[] {
    const symbolsFromModuleCtxes = ctx.symbolsFromModule();
    return symbolsFromModuleCtxes
      .map((symbolsFromModuleCtx) => symbolsFromModuleCtx.accept(new SymbolsFromModuleVisitor()));
  }

  protected defaultResult(): SymbolsFromModule[] {
    return [];
  }
}
