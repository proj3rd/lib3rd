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
export declare class OptionalExtensionMarkerVisitor extends AbstractParseTreeVisitor<ExtensionMarker | undefined> implements ASN_3gppVisitor<ExtensionMarker | undefined> {
    visitChildren(ctx: OptionalExtensionMarkerContext): ExtensionMarker | undefined;
    protected defaultResult(): ExtensionMarker | undefined;
}
//# sourceMappingURL=optionalExtensionMarkerVisitor.d.ts.map