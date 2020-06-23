import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';
import { OptionalExtensionMarkerContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * optionalExtensionMarker: (COMMA ELLIPSIS)?
 * ```
 */
export class OptionalExtensionMarkerVisitor
  extends AbstractParseTreeVisitor<ExtensionMarker | undefined>
  implements ASN_3gppVisitor<ExtensionMarker | undefined> {
  public visitChildren(
    ctx: OptionalExtensionMarkerContext
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
