import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';

import { getContextName, getLogWithAsn1 } from '../utils';

import { ExtensionAdditionListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAddition, ExtensionAdditionVisitor } from './extensionAddition';
import { TagVisitor } from './tag';
import { NamedType } from '../classes/namedType';

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
      switch (getContextName(childCtx)) {
        case 'extensionAddition': {
          extensionAdditionList.push(childCtx.accept(new ExtensionAdditionVisitor()));
          break;
        }
        case 'tag': {
          const tag = childCtx.accept(new TagVisitor());
          const lastItem = extensionAdditionList[extensionAdditionList.length - 1];
          if (tag && lastItem instanceof NamedType) {
            lastItem.tag = tag;
          }
          break;
        }
        case null: {
          break;
        }
        default: {
          log.warn(getLogWithAsn1(childCtx, 'Not supported ASN.1 in ExtensionAdditionList'));
          break;
        }
      }
    });
    return extensionAdditionList;
  }
}
