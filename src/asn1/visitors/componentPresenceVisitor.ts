/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ComponentPresence } from '../classes/componentPresence';
import { ComponentPresenceContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * componentPresence: IDENTIFIER (ABSENT_LITERAL | PRESENT_LITERAL)
 * ```
 */
export class ComponentPresenceVisitor
  extends AbstractParseTreeVisitor<ComponentPresence>
  implements grammar3rdVisitor<ComponentPresence> {
  public visitChildren(ctx: ComponentPresenceContext): ComponentPresence {
    const nameCtx = ctx.getChild(0);
    const name = nameCtx.text;
    const presenceCtx = ctx.getChild(1);
    const presence = presenceCtx.text;
    if (presence !== 'ABSENT' && presence !== 'PRESENT') {
      throw Error();
    }
    return new ComponentPresence(name, presence);
  }

  protected defaultResult(): ComponentPresence {
    return unimpl();
  }
}
