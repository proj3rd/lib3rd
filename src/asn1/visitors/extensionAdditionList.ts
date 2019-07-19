import { log } from '../../utils/logging';

import { getContextName, getLogWithAsn1 } from '../utils';
import { ExtensionAdditionVisitor } from './extensionAddition';
import { TagVisitor } from './tag';

/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionList  :  (extensionAddition) (COMMA tag? extensionAddition)*
 * ```
 */
export class ExtensionAdditionListVisitor {
  public visitChildren(extensionAdditionListCtx: any): any /* TODO */ {
    const childCtxes = extensionAdditionListCtx.children;
    const extensionAdditionList = [];
    childCtxes.forEach((childCtx: any, index: number) => {
      switch (getContextName(childCtx)) {
        case 'extensionAddition': {
          const extensionAddition = childCtx.accept(new ExtensionAdditionVisitor());
          extensionAdditionList.splice(extensionAdditionList.length, 0, ...extensionAddition);
          break;
        }
        case 'tag': {
          const tag = childCtx.accept(new TagVisitor());
          if (tag) {
            extensionAdditionList[extensionAdditionList.length - 1].tag = tag;
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
