import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedType } from '../classes/namedType';
import { AlternativeTypeListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { NamedTypeVisitor } from './namedTypeVisitor';

/**
 * # Grammar
 * ```
 * alternativeTypeList: (namedType) (COMMA namedType)*
 * ```
 */
export class AlternativeTypeListVisitor
  extends AbstractParseTreeVisitor<NamedType[]>
  implements ASN_3gppVisitor<NamedType[]> {
  public visitChildren(ctx: AlternativeTypeListContext): NamedType[] {
    const namedTypeCtxes = ctx.namedType();
    return namedTypeCtxes.map((namedTypeCtx) =>
      namedTypeCtx.accept(new NamedTypeVisitor())
    );
  }

  protected defaultResult(): NamedType[] {
    return [];
  }
}
