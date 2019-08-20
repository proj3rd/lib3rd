import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ComponentPresenceContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { ComponentPresence } from '../classes/componentPresence';

/**
 * ANTLR4 grammar
 * ```
 * componentPresence: IDENTIFIER (ABSENT_LITERAL | PRESENT_LITERAL)
 * ```
 */
export class ComponentPresenceVisitor extends AbstractParseTreeVisitor<ComponentPresence>
                                      implements ASN_3gppVisitor<ComponentPresence> {
  public defaultResult(): ComponentPresence {
    return undefined;
  }

  public visitChildren(componentPresenceCtx: ComponentPresenceContext): ComponentPresence {
    const childCtxes = componentPresenceCtx.children;
    return new ComponentPresence(childCtxes[0].text, childCtxes[1].text);
  }
}
