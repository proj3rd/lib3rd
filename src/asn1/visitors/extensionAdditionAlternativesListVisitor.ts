import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { ExtensionAdditionAlternative } from '../classes/choiceType';
import { ExtensionAdditionAlternativesListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ExtensionAdditionAlternativeVisitor } from './extensionAdditionAlternativeVisitor';

/**
 * # Grammar
 * ```
 * extensionAdditionAlternativesList: (extensionAdditionAlternative) (COMMA extensionAdditionAlternative)*
 * ```
 */
export class ExtensionAdditionAlternativesListVisitor
  extends AbstractParseTreeVisitor<ExtensionAdditionAlternative[]>
  implements ASN_3gppVisitor<ExtensionAdditionAlternative[]> {
  public visitChildren(
    ctx: ExtensionAdditionAlternativesListContext
  ): ExtensionAdditionAlternative[] {
    const extensionAdditionAlternativeCtxes = ctx.extensionAdditionAlternative();
    return extensionAdditionAlternativeCtxes.map(
      (extensionAdditionAlternativeCtx) =>
        extensionAdditionAlternativeCtx.accept(
          new ExtensionAdditionAlternativeVisitor()
        )
    );
  }

  protected defaultResult(): ExtensionAdditionAlternative[] {
    return unimpl();
  }
}
