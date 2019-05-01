import { ExtensionAdditionAlternativesListVisitor } from './extensionAdditionAlternativesList';

/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternatives  : (COMMA  extensionAdditionAlternativesList )?
 * ```
 */
export class ExtensionAdditionAlternativesVisitor  {
  public visitChildren(extensionAdditionAlternativesCtx: any): any /* TODO */ {
    let extensionAdditionAlternatives = null;
    if (extensionAdditionAlternativesCtx.children) {
      const extensionAdditionAlternativesListCtx = extensionAdditionAlternativesCtx.children[1];
      extensionAdditionAlternatives =
        extensionAdditionAlternativesListCtx.accept(new ExtensionAdditionAlternativesListVisitor());
    }
    return extensionAdditionAlternatives;
  }
}
