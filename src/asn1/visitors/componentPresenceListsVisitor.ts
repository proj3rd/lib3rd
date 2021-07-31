/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ExtensionMarker } from '../classes/extensionMarker';
import {
  ComponentPresenceListContext,
  ComponentPresenceListsContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { TypeConstraintsComponent } from '../types/typeConstraintsComponent';
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
  implements grammar3rdVisitor<TypeConstraintsComponent[]> {
  public visitChildren(
    ctx: ComponentPresenceListsContext,
  ): TypeConstraintsComponent[] {
    const componentPresenceList: TypeConstraintsComponent[] = [];
    for (let i = 0; i < ctx.childCount; i += 1) {
      const childCtx = ctx.getChild(i);
      if (childCtx instanceof ComponentPresenceListContext) {
        const typeConstraintsComponent = childCtx.accept(
          new ComponentPresenceListVisitor(),
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
