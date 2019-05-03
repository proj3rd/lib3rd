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
    const childCtxes = componentPresenceListsCtx.children;
    // TODO
  }
}
