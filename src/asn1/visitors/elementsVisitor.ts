/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ElementsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { Elements } from '../types/elements';
import { SubtypeElementsVisitor } from './subtypeElementsVisitor';

/**
 * # Grammar
 * ```
 * elements: subtypeElements
 * ```
 */
export class ElementsVisitor extends AbstractParseTreeVisitor<Elements>
  implements grammar3rdVisitor<Elements> {
  public visitChildren(ctx: ElementsContext): Elements {
    const subtypeElementsCtx = ctx.subtypeElements();
    return subtypeElementsCtx.accept(new SubtypeElementsVisitor());
  }

  protected defaultResult(): Elements {
    return unimpl();
  }
}
