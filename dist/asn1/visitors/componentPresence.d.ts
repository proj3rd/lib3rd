import { ComponentPresence } from '../classes/componentPresence';
/**
 * ANTLR4 grammar
 * ```
 * componentPresence: IDENTIFIER (ABSENT_LITERAL | PRESENT_LITERAL)
 * ```
 */
export declare class ComponentPresenceVisitor {
    visitChildren(componentPresenceCtx: any): ComponentPresence;
}
