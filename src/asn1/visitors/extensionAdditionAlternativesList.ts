import { ExtensionAdditionAlternativeVisitor } from './extensionAdditionAlternative';

/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternativesList  : (extensionAdditionAlternative) (COMMA  extensionAdditionAlternative)*
 * ```
 */
export class ExtensionAdditionAlternativesListVisitor {
  public visitChildren(extensionAdditionAlternativesListCtx: any): any /* TODO */ {
    const extensionAdditionAlternativesList = [];
    const childCtxes = extensionAdditionAlternativesListCtx.children;
    childCtxes.forEach((childCtx: any, index: number) => {
      if (index % 2) {
        return;
      }
      extensionAdditionAlternativesList.push(childCtx.accept(new ExtensionAdditionAlternativeVisitor()));
    });
    return extensionAdditionAlternativesList;
  }
}
