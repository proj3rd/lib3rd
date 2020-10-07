import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentPresence } from '../classes/componentPresence';
import { ComponentPresenceContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * componentPresence: IDENTIFIER (ABSENT_LITERAL | PRESENT_LITERAL)
 * ```
 */
export declare class ComponentPresenceVisitor extends AbstractParseTreeVisitor<ComponentPresence> implements grammar3rdVisitor<ComponentPresence> {
    visitChildren(ctx: ComponentPresenceContext): ComponentPresence;
    protected defaultResult(): ComponentPresence;
}
//# sourceMappingURL=componentPresenceVisitor.d.ts.map