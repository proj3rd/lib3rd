import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentPresenceListsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ComponentPresence } from '../classes/componentPresence';
import { ExtensionMarker } from '../classes/extensionMarker';
export declare type ComponentPresenceLists = Array<ComponentPresence | ExtensionMarker>;
/**
 * ANTLR4 grammar
 * ```
 * componentPresenceLists:
 *    componentPresenceList? (COMMA ELLIPSIS (COMMA componentPresenceList)?)?
 *   |  ELLIPSIS (COMMA componentPresenceList)?
 * ```
 */
export declare class ComponentPresenceListsVisitor extends AbstractParseTreeVisitor<ComponentPresenceLists> implements ASN_3gppVisitor<ComponentPresenceLists> {
    defaultResult(): ComponentPresenceLists;
    visitChildren(componentPresenceListsCtx: ComponentPresenceListsContext): ComponentPresenceLists;
}
