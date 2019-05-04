import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ExtensionMarker } from '../classes/extensionMarker';
import { ComponentPresenceListVisitor } from './componentPresenceList';

/**
 * ANTLR4 grammar
 * ```
 * componentPresenceLists:
 *    componentPresenceList? (COMMA ELLIPSIS (COMMA componentPresenceList)?)?
 *   |  ELLIPSIS (COMMA componentPresenceList)?
 * ```
 */
export class ComponentPresenceListsVisitor {
  public visitChildren(componentPresenceListsCtx: any): any /* TODO */ {
    let componentPresenceLists = null;
    const childCtxes = componentPresenceListsCtx.children;
    childCtxes.forEach((childCtx: any, index: number) => {
      switch (getContextName(childCtx)) {
        case 'componentPresenceList': {
          const componentPresenceList = childCtx.accept(new ComponentPresenceListVisitor());
          if (componentPresenceLists === null) {
            componentPresenceLists = componentPresenceList;
          } else {
            componentPresenceLists.splice(componentPresenceLists.length, 0, ...componentPresenceList);
          }
          break;
        }
        case null: {
          switch (childCtx.getText()) {
            case ',': {
              break;
            }
            case '...': {
              const extensionMarker = new ExtensionMarker();
              if (componentPresenceLists === null) {
                componentPresenceLists = [extensionMarker];
              } else {
                componentPresenceLists.push(extensionMarker);
              }
              break;
            }
            default: {
              log.warn(getLogWithAsn1(componentPresenceListsCtx, 'Not supported ASN1:'));
              break;
            }
          }
          break;
        }
        default: {
          log.warn(getLogWithAsn1(componentPresenceListsCtx, 'Not supported ASN1:'));
          break;
        }
      }
    });
    return componentPresenceLists;
  }
}
