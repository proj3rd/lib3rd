/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { TypeConstraintsComponent } from '../classes/innerTypeConstraints';
import { ComponentPresenceListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ComponentPresenceVisitor } from './componentPresenceVisitor';

/**
 * # Grammar
 * ```
 * componentPresenceList: (componentPresence) (COMMA componentPresence)*
 * ```
 */
export class ComponentPresenceListVisitor
  extends AbstractParseTreeVisitor<TypeConstraintsComponent[]>
  implements grammar3rdVisitor<TypeConstraintsComponent[]> {
  public visitChildren(
    ctx: ComponentPresenceListContext,
  ): TypeConstraintsComponent[] {
    const componentPresenceCtxes = ctx.componentPresence();
    return componentPresenceCtxes
      .map((componentPresenceCtx) => componentPresenceCtx.accept(new ComponentPresenceVisitor()));
  }

  protected defaultResult(): TypeConstraintsComponent[] {
    return unimpl();
  }
}
