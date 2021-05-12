/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { IntersectionElementsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { IntersectionElements } from '../types/intersectionElements';
import { ElementsVisitor } from './elementsVisitor';

/**
 * # Grammar
 * ```
 * intersectionElements: elements (exclusions)?
 * ```
 */
export class IntersectionElementsVisitor
  extends AbstractParseTreeVisitor<IntersectionElements>
  implements grammar3rdVisitor<IntersectionElements> {
  public visitChildren(
    ctx: IntersectionElementsContext,
  ): IntersectionElements {
    const elementsCtx = ctx.elements();
    const elements = elementsCtx.accept(new ElementsVisitor());
    const exclusionsCtx = ctx.exclusions();
    if (exclusionsCtx !== undefined) {
      unimpl();
    }
    return elements;
  }

  protected defaultResult(): IntersectionElements {
    return unimpl();
  }
}
