import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ComponentPresenceListContext, ComponentPresenceListsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { ComponentPresence } from '../classes/componentPresence';
import { ExtensionMarker } from '../classes/extensionMarker';
import { ComponentPresenceListVisitor } from './componentPresenceList';

export type ComponentPresenceLists = Array<ComponentPresence | ExtensionMarker>;

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
      if (childCtx instanceof ComponentPresenceListContext) {
        const componentPresenceList = childCtx.accept(new ComponentPresenceListVisitor());
        componentPresenceLists.splice(componentPresenceLists.length, 0, ...componentPresenceList);
      } else if (childCtx instanceof TerminalNode) {
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
      } else {
        log.warn(getLogWithAsn1(componentPresenceListsCtx, 'Not supported ASN1:'));
      }
    });
    return componentPresenceLists;
  }
}
