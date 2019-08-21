import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentPresenceContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ComponentPresence } from '../classes/componentPresence';
/**
 * ANTLR4 grammar
 * ```
 * componentPresence: IDENTIFIER (ABSENT_LITERAL | PRESENT_LITERAL)
 * ```
 */
export declare class ComponentPresenceVisitor extends AbstractParseTreeVisitor<ComponentPresence> implements ASN_3gppVisitor<ComponentPresence> {
    defaultResult(): ComponentPresence;
    visitChildren(componentPresenceCtx: ComponentPresenceContext): ComponentPresence;
}
