/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedType } from '../classes/namedType';
import { AlternativeTypeListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { NamedTypeVisitor } from './namedTypeVisitor';

/**
 * # Grammar
 * ```
 * alternativeTypeList: (namedType) (COMMA namedType)*
 * ```
 */
export class AlternativeTypeListVisitor
  extends AbstractParseTreeVisitor<NamedType[]>
  implements grammar3rdVisitor<NamedType[]> {
  public visitChildren(ctx: AlternativeTypeListContext): NamedType[] {
    const namedTypeCtxes = ctx.namedType();
    return namedTypeCtxes.map((namedTypeCtx) => namedTypeCtx.accept(new NamedTypeVisitor()));
  }

  protected defaultResult(): NamedType[] {
    return [];
  }
}
