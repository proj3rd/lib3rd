import { ComponentPresence } from '../classes/componentPresence';

/**
 * ANTLR4 grammar
 * ```
 * componentPresence: IDENTIFIER (ABSENT_LITERAL | PRESENT_LITERAL)
 * ```
 */
export class ComponentPresenceVisitor {
  public visitChildren(componentPresenceCtx: any): ComponentPresence {
    const childCtxes = componentPresenceCtx.children;
    return new ComponentPresence(childCtxes[0].getText(), childCtxes[1].getText());
  }
}
