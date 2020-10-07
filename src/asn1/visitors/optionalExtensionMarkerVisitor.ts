/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';
import { OptionalExtensionMarkerContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * optionalExtensionMarker: (COMMA ELLIPSIS)?
 * ```
 */
export class OptionalExtensionMarkerVisitor
  extends AbstractParseTreeVisitor<ExtensionMarker | undefined>
  implements grammar3rdVisitor<ExtensionMarker | undefined> {
  public visitChildren(
    ctx: OptionalExtensionMarkerContext,
  ): ExtensionMarker | undefined {
    if (ctx.childCount === 0) {
      return undefined;
    }
    return ExtensionMarker.getInstance();
  }

  protected defaultResult(): ExtensionMarker | undefined {
    return undefined;
  }
}
