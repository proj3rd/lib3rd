import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { ExtensionMarker } from '../classes/extensionMarker';
import { TypeConstraintsComponent } from '../classes/innerTypeConstraints';
import {
  ComponentPresenceListContext,
  ComponentPresenceListsContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ComponentPresenceListVisitor } from './componentPresenceListVisitor';

/**
 * # Grammar
 * ```
 * componentPresenceLists:
 *   componentPresenceList? (COMMA ELLIPSIS (COMMA componentPresenceList)?)?
 *   | ELLIPSIS (COMMA componentPresenceList)?
 * ```
 */
export class ComponentPresenceListsVisitor
  extends AbstractParseTreeVisitor<TypeConstraintsComponent[]>
  implements ASN_3gppVisitor<TypeConstraintsComponent[]> {
  public visitChildren(
    ctx: ComponentPresenceListsContext
  ): TypeConstraintsComponent[] {
    const componentPresenceList: TypeConstraintsComponent[] = [];
    for (let i = 0; i < ctx.childCount; i++) {
      const childCtx = ctx.getChild(i);
      if (childCtx instanceof ComponentPresenceListContext) {
        const typeConstraintsComponent = childCtx.accept(
          new ComponentPresenceListVisitor()
        );
        componentPresenceList.push(...typeConstraintsComponent);
      } else {
        switch (childCtx.text) {
          case ',': {
            break;
          }
          case '...': {
            componentPresenceList.push(ExtensionMarker.getInstance());
            break;
          }
          default: {
            throw Error(childCtx.text);
          }
        }
      }
    }
    return componentPresenceList;
  }

  protected defaultResult(): TypeConstraintsComponent[] {
    return unimpl();
  }
}
