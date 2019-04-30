import { AlternativeTypeListVisitor } from './alternativeTypeList';

/**
 * ANTLR4 grammar
 * ```
 * rootAlternativeTypeList  : alternativeTypeList
 * ```
 */
export class RootAlternativeTypeListVisitor {
  public visitChildren(rootAlternativeTypeListCtx: any): any /* TODO */ {
    const alternativeTypeListCtx = rootAlternativeTypeListCtx.children[0];
    return alternativeTypeListCtx.accept(new AlternativeTypeListVisitor());
  }
}
