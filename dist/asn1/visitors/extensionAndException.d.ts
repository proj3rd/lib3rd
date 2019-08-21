import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAndExceptionContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';
/**
 * ANTLR4 grammar
 * ```
 * extensionAndException :  ELLIPSIS  exceptionSpec?
 * ```
 */
export declare class ExtensionAndExceptionVisitor extends AbstractParseTreeVisitor<ExtensionMarker[]> implements ASN_3gppVisitor<ExtensionMarker[]> {
    defaultResult(): ExtensionMarker[];
    visitChildren(extensionAndExceptionCtx: ExtensionAndExceptionContext): ExtensionMarker[];
}
