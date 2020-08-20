import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';
import { ExtensionAndExceptionContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * extensionAndException: ELLIPSIS exceptionSpec?
 * ```
 */
export declare class ExtensionAndExceptionVisitor extends AbstractParseTreeVisitor<ExtensionMarker> implements ASN_3gppVisitor<ExtensionMarker> {
    visitChildren(ctx: ExtensionAndExceptionContext): ExtensionMarker;
    protected defaultResult(): ExtensionMarker;
}
//# sourceMappingURL=extensionAndExceptionVisitor.d.ts.map