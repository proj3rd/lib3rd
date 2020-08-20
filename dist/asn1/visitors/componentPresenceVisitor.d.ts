import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentPresence } from '../classes/innerTypeConstraints';
import { ComponentPresenceContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * componentPresence: IDENTIFIER (ABSENT_LITERAL | PRESENT_LITERAL)
 * ```
 */
export declare class ComponentPresenceVisitor extends AbstractParseTreeVisitor<ComponentPresence> implements ASN_3gppVisitor<ComponentPresence> {
    visitChildren(ctx: ComponentPresenceContext): ComponentPresence;
    protected defaultResult(): ComponentPresence;
}
//# sourceMappingURL=componentPresenceVisitor.d.ts.map