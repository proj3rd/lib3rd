/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedType } from '../classes/namedType';
import { RootAlternativeTypeListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { AlternativeTypeListVisitor } from './alternativeTypeListVisitor';

/**
 * # Grammar
 * ```
 * rootAlternativeTypeList: alternativeTypeList
 * ```
 */
export class RootAlternativeTypeListVisitor
  extends AbstractParseTreeVisitor<NamedType[]>
  implements grammar3rdVisitor<NamedType[]> {
  public visitChildren(ctx: RootAlternativeTypeListContext): NamedType[] {
    const alternativeTypeListCtx = ctx.alternativeTypeList();
    return alternativeTypeListCtx.accept(new AlternativeTypeListVisitor());
  }

  protected defaultResult(): NamedType[] {
    return [];
  }
}
