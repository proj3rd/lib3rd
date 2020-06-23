import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAddition } from '../classes/sequenceType';
import { ExtensionAdditionListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { unimpl } from './_devUtils';
import { ExtensionAdditionVisitor } from './extensionAdditionVisitor';

/**
 * # Grammar
 * ```
 * extensionAdditionList: (extensionAddition) (COMMA extensionAddition)*
 * ```
 */
export class ExtensionAdditionListVisitor
  extends AbstractParseTreeVisitor<ExtensionAddition[]>
  implements ASN_3gppVisitor<ExtensionAddition[]> {
  public visitChildren(ctx: ExtensionAdditionListContext): ExtensionAddition[] {
    const extensionAdditionCtxes = ctx.extensionAddition();
    return extensionAdditionCtxes.map((extensionAdditionCtx) =>
      extensionAdditionCtx.accept(new ExtensionAdditionVisitor())
    );
  }

  protected defaultResult(): ExtensionAddition[] {
    return unimpl();
  }
}
