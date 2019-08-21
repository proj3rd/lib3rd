import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentPresenceListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ComponentPresence } from '../classes/componentPresence';
/**
 * ANTRL4 grammar
 * ```
 * componentPresenceList: (componentPresence) (COMMA componentPresence)*
 * ```
 */
export declare class ComponentPresenceListVisitor extends AbstractParseTreeVisitor<ComponentPresence[]> implements ASN_3gppVisitor<ComponentPresence[]> {
    defaultResult(): ComponentPresence[];
    visitChildren(componentPresenceListCtx: ComponentPresenceListContext): ComponentPresence[];
}
