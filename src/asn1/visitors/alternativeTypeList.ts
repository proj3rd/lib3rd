import { NamedType } from '../classes/namedType';

import { NamedTypeVisitor } from './namedType';

/**
 * ANTLR4 grammar
 * ```
 * alternativeTypeList : (namedType) (COMMA namedType)*
 * ```
 */
export class AlternativeTypeListVisitor {
  public visitChildren(alternativeTypeListCtx: any): NamedType[] {
    const childCtxes = alternativeTypeListCtx.children;
    const alternativeTypeList = [];
    childCtxes.forEach((childCtx: any, index: number) => {
      if (index % 2) {
        return;
      }
      alternativeTypeList.push(childCtx.accept(new NamedTypeVisitor()));
    });
    return alternativeTypeList;
  }
}
