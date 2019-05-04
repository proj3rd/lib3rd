import { ComponentTypeVisitor } from './componentType';

/**
 * ANTLR4 grammar
 * ```
 * componentTypeList  : (componentType) (COMMA componentType)*
 * ```
 */
export class ComponentTypeListVisitor {
  public visitChildren(componentTypeListCtx: any): any /* TODO */ {
    const childCtxes = componentTypeListCtx.children;
    const componetTypeList = [];
    childCtxes.forEach((childCtx: any, index: number) => {
      if (index % 2) {
        return;
      }
      componetTypeList.push(childCtx.accept(new ComponentTypeVisitor()));
    });
    return componetTypeList;
  }
}
