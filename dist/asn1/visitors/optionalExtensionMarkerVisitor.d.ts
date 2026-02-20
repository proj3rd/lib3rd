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
export declare class OptionalExtensionMarkerVisitor extends AbstractParseTreeVisitor<ExtensionMarker | undefined> implements grammar3rdVisitor<ExtensionMarker | undefined> {
    visitChildren(ctx: OptionalExtensionMarkerContext): ExtensionMarker | undefined;
    protected defaultResult(): ExtensionMarker | undefined;
}
//# sourceMappingURL=optionalExtensionMarkerVisitor.d.ts.map