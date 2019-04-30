/**
 * ANTLR4 grammar
 * ```
 * optionalExtensionMarker :  ( COMMA  ELLIPSIS )?
 * ```
 */
export class OptionalExtensionMarkerVisitor {
  public visitChildren(optionalExtensionMarkerCtx: any): any /* TODO */ {
    return optionalExtensionMarkerCtx.children ? '...' : null;
  }
}
