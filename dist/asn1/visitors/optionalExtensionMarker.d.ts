import { ExtensionMarker } from '../classes/extensionMarker';
/**
 * ANTLR4 grammar
 * ```
 * optionalExtensionMarker :  ( COMMA  ELLIPSIS )?
 * ```
 */
export declare class OptionalExtensionMarkerVisitor {
    visitChildren(optionalExtensionMarkerCtx: any): ExtensionMarker[];
}
