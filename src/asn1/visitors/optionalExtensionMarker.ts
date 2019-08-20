import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { OptionalExtensionMarkerContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { ExtensionMarker } from '../classes/extensionMarker';

/**
 * ANTLR4 grammar
 * ```
 * optionalExtensionMarker :  ( COMMA  ELLIPSIS )?
 * ```
 */
export class OptionalExtensionMarkerVisitor extends AbstractParseTreeVisitor<ExtensionMarker[]>
                                            implements ASN_3gppVisitor<ExtensionMarker[]> {
  public defaultResult(): ExtensionMarker[] {
    return [];
  }

  public visitChildren(optionalExtensionMarkerCtx: OptionalExtensionMarkerContext): ExtensionMarker[] {
    return optionalExtensionMarkerCtx.children ? [new ExtensionMarker()] : [];
  }
}
