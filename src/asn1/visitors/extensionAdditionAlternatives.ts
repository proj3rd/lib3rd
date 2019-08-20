import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ExtensionAdditionAlternativesContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAdditionAlternative } from './extensionAdditionAlternative';
import { ExtensionAdditionAlternativesListVisitor } from './extensionAdditionAlternativesList';

/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternatives  : (COMMA  extensionAdditionAlternativesList )?
 * ```
 */
export class ExtensionAdditionAlternativesVisitor extends AbstractParseTreeVisitor<ExtensionAdditionAlternative[]>
                                                  implements ASN_3gppVisitor<ExtensionAdditionAlternative[]> {
  public defaultResult(): ExtensionAdditionAlternative[] {
    return undefined;
  }

  public visitChildren(extensionAdditionAlternativesCtx: ExtensionAdditionAlternativesContext)
      : ExtensionAdditionAlternative[] {
    let extensionAdditionAlternatives = [];
    if (extensionAdditionAlternativesCtx.children) {
      const extensionAdditionAlternativesListCtx = extensionAdditionAlternativesCtx.children[1];
      extensionAdditionAlternatives =
        extensionAdditionAlternativesListCtx.accept(new ExtensionAdditionAlternativesListVisitor());
    }
    return extensionAdditionAlternatives;
  }
}
