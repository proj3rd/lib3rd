import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ExtensionAdditionAlternativesListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAdditionAlternative, ExtensionAdditionAlternativeVisitor } from './extensionAdditionAlternative';

/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternativesList  : (extensionAdditionAlternative) (COMMA  extensionAdditionAlternative)*
 * ```
 */
export class ExtensionAdditionAlternativesListVisitor extends AbstractParseTreeVisitor<ExtensionAdditionAlternative[]>
                                                      implements ASN_3gppVisitor<ExtensionAdditionAlternative[]> {
  public defaultResult(): ExtensionAdditionAlternative[] {
    return [];
  }

  public visitChildren(extensionAdditionAlternativesListCtx: ExtensionAdditionAlternativesListContext)
      : ExtensionAdditionAlternative[] {
    const extensionAdditionAlternativesList = [];
    const childCtxes = extensionAdditionAlternativesListCtx.children;
    childCtxes.forEach((childCtx, index) => {
      if (index % 2) {
        return;
      }
      extensionAdditionAlternativesList.push(childCtx.accept(new ExtensionAdditionAlternativeVisitor()));
    });
    return extensionAdditionAlternativesList;
  }
}
