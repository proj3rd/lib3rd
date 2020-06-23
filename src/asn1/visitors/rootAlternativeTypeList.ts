import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedType } from '../classes/namedType';
import { RootAlternativeTypeListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { AlternativeTypeListVisitor } from './alternativeTypeListVisitor';

/**
 * # Grammar
 * ```
 * rootAlternativeTypeList: alternativeTypeList
 * ```
 */
export class RootAlternativeTypeListVisitor
  extends AbstractParseTreeVisitor<NamedType[]>
  implements ASN_3gppVisitor<NamedType[]> {
  public visitChildren(ctx: RootAlternativeTypeListContext): NamedType[] {
    const alternativeTypeListCtx = ctx.alternativeTypeList();
    return alternativeTypeListCtx.accept(new AlternativeTypeListVisitor());
  }

  protected defaultResult(): NamedType[] {
    return [];
  }
}
