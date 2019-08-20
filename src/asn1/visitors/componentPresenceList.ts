import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ComponentPresenceListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { ComponentPresence } from '../classes/componentPresence';
import { ComponentPresenceVisitor } from './componentPresence';

/**
 * ANTRL4 grammar
 * ```
 * componentPresenceList: (componentPresence) (COMMA componentPresence)*
 * ```
 */
export class ComponentPresenceListVisitor extends AbstractParseTreeVisitor<ComponentPresence[]>
                                          implements ASN_3gppVisitor<ComponentPresence[]> {
  public defaultResult(): ComponentPresence[] {
    return [];
  }

  public visitChildren(componentPresenceListCtx: ComponentPresenceListContext): ComponentPresence[] {
    const childCtxes = componentPresenceListCtx.children;
    const componentPresenceList = [];
    childCtxes.forEach((childCtx: any, index: number) => {
      if (index % 2) {
        return;
      }
      componentPresenceList.push(childCtx.accept(new ComponentPresenceVisitor()));
    });
    return componentPresenceList;
  }
}
