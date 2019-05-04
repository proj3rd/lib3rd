import { ComponentPresenceVisitor } from './componentPresence';

/**
 * ANTRL4 grammar
 * ```
 * componentPresenceList: (componentPresence) (COMMA componentPresence)*
 * ```
 */
export class ComponentPresenceListVisitor {
  public visitChildren(componentPresenceListCtx: any): any /* TODO */ {
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
