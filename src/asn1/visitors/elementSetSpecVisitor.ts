/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { _ElementSetSpec } from '../types';
import { ElementSetSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { UnionsVisitor } from './unionsVisitor';

/**
 * # Grammar
 * ```
 * elementSetSpec: unions | ALL_LITERAL exclusions
 * ```
 */
export class ElementSetSpecVisitor
  extends AbstractParseTreeVisitor<_ElementSetSpec>
  implements grammar3rdVisitor<_ElementSetSpec> {
  public visitChildren(ctx: ElementSetSpecContext): _ElementSetSpec {
    const unionsCtx = ctx.unions();
    if (unionsCtx !== undefined) {
      return unionsCtx.accept(new UnionsVisitor());
    }
    const exclusionsCtx = ctx.exclusions();
    if (exclusionsCtx !== undefined) {
      unimpl(ctx.text);
    }
    throw Error();
  }

  protected defaultResult(): _ElementSetSpec {
    return unimpl();
  }
}
