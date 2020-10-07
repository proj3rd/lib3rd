/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Imports } from '../classes/imports';
import { ImportsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { SymbolsImportedVisitor } from './symbolsImportedVisitor';

/**
 * # Grammar
 * ```
 * imports: (IMPORTS_LITERAL symbolsImported SEMI_COLON)?
 * ```
 */
export class ImportsVisitor extends AbstractParseTreeVisitor<Imports | null>
  implements grammar3rdVisitor<Imports | null> {
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
