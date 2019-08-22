import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ExtensionAdditionsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAddition } from './extensionAddition';
import { ExtensionAdditionListVisitor } from './extensionAdditionList';

/**
 * ANTLR4 grammar
 * ```
 * extensionAdditions  :  (COMMA  extensionAdditionList)?
 * ```
 */
export class ExtensionAdditionsVisitor extends AbstractParseTreeVisitor<ExtensionAddition[]>
                                       implements ASN_3gppVisitor<ExtensionAddition[]> {
  public defaultResult(): ExtensionAddition[] {
    return [];
  }

  public visitChildren(extensionAdditionsCtx: ExtensionAdditionsContext): ExtensionAddition[] {
    const childCtxes = extensionAdditionsCtx.children;
    let extensionAdditions: ExtensionAddition[] = [];
    if (childCtxes) {
      const extensionAdditionListCtx = childCtxes[1];
      extensionAdditions = extensionAdditionListCtx.accept(new ExtensionAdditionListVisitor());
    }
    return extensionAdditions;
  }
}
