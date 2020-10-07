/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { _Elements } from '../types';
import { ElementsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { SubtypeElementsVisitor } from './subtypeElementsVisitor';

/**
 * # Grammar
 * ```
 * elements: subtypeElements
 * ```
 */
export class ElementsVisitor extends AbstractParseTreeVisitor<_Elements>
  implements grammar3rdVisitor<_Elements> {
  public visitChildren(ctx: ElementsContext): _Elements {
    const subtypeElementsCtx = ctx.subtypeElements();
    return subtypeElementsCtx.accept(new SubtypeElementsVisitor());
  }

  protected defaultResult(): _Elements {
    return unimpl();
  }
}
