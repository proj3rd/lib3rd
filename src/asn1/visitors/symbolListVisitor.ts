import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnSymbol, Reference } from '../classes/asnSymbol';
import { SymbolContext, SymbolListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * symbolList: (symbol) (COMMA symbol)*
 * ```
 */
export class SymbolListVisitor extends AbstractParseTreeVisitor<AsnSymbol[]>
  implements ASN_3gppVisitor<AsnSymbol[]> {
  public visitChildren(ctx: SymbolListContext): AsnSymbol[] {
    return ctx.symbol().map((sym) => sym.accept(new SymbolVisitor()));
  }

  protected defaultResult(): AsnSymbol[] {
    return [];
  }
}

class SymbolVisitor extends AbstractParseTreeVisitor<AsnSymbol>
  implements ASN_3gppVisitor<AsnSymbol> {
  public visitChildren(ctx: SymbolContext): AsnSymbol {
    const name = ctx.getChild(0).text;
    const parameterized = ctx.childCount > 1 ? true : false;
    return new Reference(name, parameterized);
  }

  protected defaultResult(): AsnSymbol {
    return new Reference('');
  }
}
