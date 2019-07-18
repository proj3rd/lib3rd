import { ExtensionMarker } from '../classes/extensionMarker';

/**
 * ANTLR4 grammar
 * ```
 * optionalExtensionMarker :  ( COMMA  ELLIPSIS )?
 * ```
 */
export class OptionalExtensionMarkerVisitor {
  public visitChildren(optionalExtensionMarkerCtx: any): ExtensionMarker[] {
    return optionalExtensionMarkerCtx.children ? [new ExtensionMarker()] : [];
  }
}
