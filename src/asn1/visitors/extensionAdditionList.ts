import { ExtensionAdditionVisitor } from './extensionAddition';

/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionList  :  (extensionAddition) (COMMA  extensionAddition)*
 * ```
 */
export class ExtensionAdditionListVisitor {
  public visitChildren(extensionAdditionListCtx: any): any /* TODO */ {
    const childCtxes = extensionAdditionListCtx.children;
    const extensionAdditionList = [];
    childCtxes.forEach((childCtx: any, index: number) => {
      if (index % 2) {
        return;
      }
      extensionAdditionList.push(childCtx.accept(new ExtensionAdditionVisitor()));
    });
  }
}
