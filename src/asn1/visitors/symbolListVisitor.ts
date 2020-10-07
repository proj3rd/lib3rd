/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnSymbol } from '../classes/asnSymbol';
import { SymbolListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { SymbolVisitor } from './symbolVisitor';

/**
 * # Grammar
 * ```
 * symbolList: (symbol) (COMMA symbol)*
 * ```
 */
export class SymbolListVisitor extends AbstractParseTreeVisitor<AsnSymbol[]>
  implements grammar3rdVisitor<AsnSymbol[]> {
  public visitChildren(ctx: SymbolListContext): AsnSymbol[] {
    return ctx.symbol().map((sym) => sym.accept(new SymbolVisitor()));
  }

  protected defaultResult(): AsnSymbol[] {
    return [];
  }
}
