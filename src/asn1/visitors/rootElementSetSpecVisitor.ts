/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { RootElementSetSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ElementSetSpec } from '../types/elementSetSpec';
import { ElementSetSpecVisitor } from './elementSetSpecVisitor';

/**
 * # Grammar
 * ```
 * rootElementSetSpec: elementSetSpec
 * ```
 */
export class RootElementSetSpecVisitor
  extends AbstractParseTreeVisitor<ElementSetSpec>
  implements grammar3rdVisitor<ElementSetSpec> {
  public visitChildren(ctx: RootElementSetSpecContext): ElementSetSpec {
    const elementSetSpecCtx = ctx.elementSetSpec();
    return elementSetSpecCtx.accept(new ElementSetSpecVisitor());
  }

  protected defaultResult(): ElementSetSpec {
    return unimpl();
  }
}
