import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

import { log } from '../../utils/logging';

import { getLogWithAsn1 } from '../utils';

import { ExtensionAdditionContext, ExtensionAdditionListContext, TagContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { NamedType } from '../classes/namedType';
import { ExtensionAddition, ExtensionAdditionVisitor } from './extensionAddition';
import { TagVisitor } from './tag';

/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionList  :  (extensionAddition) (COMMA tag? extensionAddition)*
 * ```
 */
export class ExtensionAdditionListVisitor extends AbstractParseTreeVisitor<ExtensionAddition[]>
                                          implements ASN_3gppVisitor<ExtensionAddition[]> {
  public defaultResult(): ExtensionAddition[] {
    return [];
  }

  public visitChildren(extensionAdditionListCtx: ExtensionAdditionListContext): ExtensionAddition[] {
    const childCtxes = extensionAdditionListCtx.children;
    const extensionAdditionList: ExtensionAddition[] = [];
    childCtxes.forEach((childCtx) => {
      if (childCtx instanceof ExtensionAdditionContext) {
        extensionAdditionList.push(childCtx.accept(new ExtensionAdditionVisitor()));
      } else if (childCtx instanceof TagContext) {
        const tag = childCtx.accept(new TagVisitor());
        const lastItem = extensionAdditionList[extensionAdditionList.length - 1];
        if (tag && lastItem instanceof NamedType) {
          lastItem.tag = tag;
        }
      } else if (childCtx instanceof TerminalNode) {
        // Do nothing
      } else {
        log.warn(getLogWithAsn1(childCtx, 'Not supported ASN.1 in ExtensionAdditionList'));
      }
    });
    return extensionAdditionList;
  }
}
