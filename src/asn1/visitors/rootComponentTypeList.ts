import { ComponentTypeListVisitor } from './componentTypeList';

/**
 * ANTLR4 grammar
 * ```
 * rootComponentTypeList  : componentTypeList
 * ```
 */
export class RootComponentTypeListVisitor {
  public visitChildren(rootComponentTypeListCtx: any): any /* TODO */ {
    const componentTypeListCtx = rootComponentTypeListCtx.children[0];
    return componentTypeListCtx.accept(new ComponentTypeListVisitor());
  }
}
