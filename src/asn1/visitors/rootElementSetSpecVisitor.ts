/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { _ElementSetSpec } from '../types';
import { RootElementSetSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ElementSetSpecVisitor } from './elementSetSpecVisitor';

/**
 * # Grammar
 * ```
 * rootElementSetSpec: elementSetSpec
 * ```
 */
export class RootElementSetSpecVisitor
  extends AbstractParseTreeVisitor<_ElementSetSpec>
  implements grammar3rdVisitor<_ElementSetSpec> {
  public visitChildren(ctx: RootElementSetSpecContext): _ElementSetSpec {
    const elementSetSpecCtx = ctx.elementSetSpec();
    return elementSetSpecCtx.accept(new ElementSetSpecVisitor());
  }

  protected defaultResult(): _ElementSetSpec {
    return unimpl();
  }
}
