import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAddition } from '../classes/sequenceType';
import { ExtensionAdditionsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { unimpl } from './_devUtils';
import { ExtensionAdditionListVisitor } from './extensionAdditionListVisitor';

/**
 * #  Grammar
 * ```
 * extensionAdditions: (COMMA extensionAdditionList)?
 * ```
 */
export class ExtensionAdditionsVisitor
  extends AbstractParseTreeVisitor<ExtensionAddition[]>
  implements ASN_3gppVisitor<ExtensionAddition[]> {
  public visitChildren(ctx: ExtensionAdditionsContext): ExtensionAddition[] {
    const extensionAdditionListCtx = ctx.extensionAdditionList();
    if (extensionAdditionListCtx !== undefined) {
      return extensionAdditionListCtx.accept(
        new ExtensionAdditionListVisitor()
      );
    }
    return [];
  }

  protected defaultResult(): ExtensionAddition[] {
    return unimpl();
  }
}
