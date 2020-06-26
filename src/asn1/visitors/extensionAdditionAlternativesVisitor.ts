import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { ExtensionAdditionAlternative } from '../classes/choiceType';
import { ExtensionAdditionAlternativesContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ExtensionAdditionAlternativesListVisitor } from './extensionAdditionAlternativesListVisitor';

/**
 * # Grammar
 * ```
 * extensionAdditionAlternatives: (COMMA extensionAdditionAlternativesList)?
 * ```
 */
export class ExtensionAdditionAlternativesVisitor
  extends AbstractParseTreeVisitor<ExtensionAdditionAlternative[]>
  implements ASN_3gppVisitor<ExtensionAdditionAlternative[]> {
  public visitChildren(
    ctx: ExtensionAdditionAlternativesContext
  ): ExtensionAdditionAlternative[] {
    const extensionAdditionAlternativesListCtx = ctx.extensionAdditionAlternativesList();
    if (extensionAdditionAlternativesListCtx === undefined) {
      return [];
    }
    return extensionAdditionAlternativesListCtx.accept(
      new ExtensionAdditionAlternativesListVisitor()
    );
  }

  protected defaultResult(): ExtensionAdditionAlternative[] {
    return unimpl();
  }
}
