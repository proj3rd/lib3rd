import { ExtensionAdditionListVisitor } from './extensionAdditionList';

/**
 * ANTLR4 grammar
 * ```
 * extensionAdditions  :  (COMMA  extensionAdditionList)?
 * ```
 */
export class ExtensionAdditionsVisitor {
  public visitChildren(extensionAdditionsCtx: any): any /* TODO */ {
    const childCtxes = extensionAdditionsCtx.children;
    let extensionAdditions = [];
    if (childCtxes) {
      const extensionAdditionListCtx = childCtxes[1];
      extensionAdditions = extensionAdditionListCtx.accept(new ExtensionAdditionListVisitor());
    }
    return extensionAdditions;
  }
}
