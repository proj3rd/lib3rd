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
export declare class OptionalExtensionMarkerVisitor extends AbstractParseTreeVisitor<ExtensionMarker[]> implements ASN_3gppVisitor<ExtensionMarker[]> {
    defaultResult(): ExtensionMarker[];
    visitChildren(optionalExtensionMarkerCtx: OptionalExtensionMarkerContext): ExtensionMarker[];
}
