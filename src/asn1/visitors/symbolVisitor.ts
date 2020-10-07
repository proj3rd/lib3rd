/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnSymbol, Reference } from '../classes/asnSymbol';
import { SymbolContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

export class SymbolVisitor extends AbstractParseTreeVisitor<AsnSymbol>
  implements grammar3rdVisitor<AsnSymbol> {
  public visitChildren(ctx: SymbolContext): AsnSymbol {
    const name = ctx.getChild(0).text;
    const parameterized = ctx.childCount > 1;
    return new Reference(name, parameterized);
  }

  protected defaultResult(): AsnSymbol {
    return new Reference('');
  }
}
