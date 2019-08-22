import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { AlternativeTypeListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { NamedType } from '../classes/namedType';
import { NamedTypeVisitor } from './namedType';

/**
 * ANTLR4 grammar
 * ```
 * alternativeTypeList : (namedType) (COMMA namedType)*
 * ```
 */
export class AlternativeTypeListVisitor extends AbstractParseTreeVisitor<NamedType[]>
                                        implements ASN_3gppVisitor<NamedType[]> {
  public defaultResult(): NamedType[] {
    return [];
  }

  public visitChildren(alternativeTypeListCtx: AlternativeTypeListContext): NamedType[] {
    const childCtxes = alternativeTypeListCtx.children;
    const alternativeTypeList = [];
    childCtxes.forEach((childCtx, index) => {
      if (index % 2) {
        return;
      }
      alternativeTypeList.push(childCtx.accept(new NamedTypeVisitor()));
    });
    return alternativeTypeList;
  }
}
