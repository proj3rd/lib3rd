import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';
import { ExtensionAndExceptionContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * extensionAndException: ELLIPSIS exceptionSpec?
 * ```
 */
export declare class ExtensionAndExceptionVisitor extends AbstractParseTreeVisitor<ExtensionMarker> implements grammar3rdVisitor<ExtensionMarker> {
    visitChildren(ctx: ExtensionAndExceptionContext): ExtensionMarker;
    protected defaultResult(): ExtensionMarker;
}
//# sourceMappingURL=extensionAndExceptionVisitor.d.ts.map