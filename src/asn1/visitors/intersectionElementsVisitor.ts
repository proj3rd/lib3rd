/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { _IntersectionElements } from '../types';
import { IntersectionElementsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ElementsVisitor } from './elementsVisitor';

/**
 * # Grammar
 * ```
 * intersectionElements: elements (exclusions)?
 * ```
 */
export class IntersectionElementsVisitor
  extends AbstractParseTreeVisitor<_IntersectionElements>
  implements grammar3rdVisitor<_IntersectionElements> {
  public visitChildren(
    ctx: IntersectionElementsContext,
  ): _IntersectionElements {
    const elementsCtx = ctx.elements();
    const elements = elementsCtx.accept(new ElementsVisitor());
    const exclusionsCtx = ctx.exclusions();
    if (exclusionsCtx !== undefined) {
      unimpl();
    }
    return elements;
  }

  protected defaultResult(): _IntersectionElements {
    return unimpl();
  }
}
