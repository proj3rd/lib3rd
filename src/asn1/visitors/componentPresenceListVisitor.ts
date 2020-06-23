import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TypeConstraintsComponent } from '../classes/innerTypeConstraints';
import { ComponentPresenceListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { unimpl } from './_devUtils';
import { ComponentPresenceVisitor } from './componentPresenceVisitor';

/**
 * # Grammar
 * ```
 * componentPresenceList: (componentPresence) (COMMA componentPresence)*
 * ```
 */
export class ComponentPresenceListVisitor
  extends AbstractParseTreeVisitor<TypeConstraintsComponent[]>
  implements ASN_3gppVisitor<TypeConstraintsComponent[]> {
  public visitChildren(
    ctx: ComponentPresenceListContext
  ): TypeConstraintsComponent[] {
    const componentPresenceCtxes = ctx.componentPresence();
    return componentPresenceCtxes.map((componentPresenceCtx) =>
      componentPresenceCtx.accept(new ComponentPresenceVisitor())
    );
  }

  protected defaultResult(): TypeConstraintsComponent[] {
    return unimpl();
  }
}
