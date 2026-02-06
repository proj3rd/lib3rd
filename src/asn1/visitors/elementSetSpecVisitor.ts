/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { ElementSetSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ElementSetSpec } from '../types/elementSetSpec';
import { UnionsVisitor } from './unionsVisitor';

/**
 * # Grammar
 * ```
 * elementSetSpec: unions | ALL_LITERAL exclusions
 * ```
 */
export class ElementSetSpecVisitor
  extends AbstractParseTreeVisitor<ElementSetSpec>
  implements grammar3rdVisitor<ElementSetSpec> {
  public visitChildren(ctx: ElementSetSpecContext): ElementSetSpec {
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

  protected defaultResult(): ElementSetSpec {
    return unimpl();
  }
}
