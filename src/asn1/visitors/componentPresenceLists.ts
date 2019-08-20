import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParseTree } from 'antlr4ts/tree/ParseTree';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ComponentPresenceListsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { ComponentPresence } from '../classes/componentPresence';
import { ExtensionMarker } from '../classes/extensionMarker';
import { ComponentPresenceListVisitor } from './componentPresenceList';

type ComponentPresenceLists = Array<ComponentPresence | ExtensionMarker>;

/**
 * ANTLR4 grammar
 * ```
 * componentPresenceLists:
 *    componentPresenceList? (COMMA ELLIPSIS (COMMA componentPresenceList)?)?
 *   |  ELLIPSIS (COMMA componentPresenceList)?
 * ```
 */
export class ComponentPresenceListsVisitor extends AbstractParseTreeVisitor<ComponentPresenceLists>
                                           implements ASN_3gppVisitor<ComponentPresenceLists> {
  public defaultResult(): ComponentPresenceLists {
    return [];
  }

  public visitChildren(componentPresenceListsCtx: ComponentPresenceListsContext): ComponentPresenceLists {
    const componentPresenceLists = [];
    const childCtxes = componentPresenceListsCtx.children;
    childCtxes.forEach((childCtx: ParseTree, index: number) => {
      switch (getContextName(childCtx)) {
        case 'componentPresenceList': {
          const componentPresenceList = childCtx.accept(new ComponentPresenceListVisitor());
          componentPresenceLists.splice(componentPresenceLists.length, 0, ...componentPresenceList);
          break;
        }
        case null: {
          switch (childCtx.text) {
            case ',': {
              break;
            }
            case '...': {
              const extensionMarker = new ExtensionMarker();
              componentPresenceLists.push(extensionMarker);
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
