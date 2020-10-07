/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { Unions } from '../classes/unions';
import { AdditionalElementSetSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ElementSetSpecVisitor } from './elementSetSpecVisitor';

/**
 * # Grammar
 * ```
 * additionalElementSetSpec: elementSetSpec
 * ```
 */
export class AdditionalElementSetSpecVisitor
  extends AbstractParseTreeVisitor<Unions>
  implements grammar3rdVisitor<Unions> {
  public visitChildren(ctx: AdditionalElementSetSpecContext): Unions {
    const elementSetSpecCtx = ctx.elementSetSpec();
    return elementSetSpecCtx.accept(new ElementSetSpecVisitor());
  }

  protected defaultResult(): Unions {
    return unimpl();
  }
}
