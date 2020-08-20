import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TypeConstraintsComponent } from '../classes/innerTypeConstraints';
import { ComponentPresenceListsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * componentPresenceLists:
 *   componentPresenceList? (COMMA ELLIPSIS (COMMA componentPresenceList)?)?
 *   | ELLIPSIS (COMMA componentPresenceList)?
 * ```
 */
export declare class ComponentPresenceListsVisitor extends AbstractParseTreeVisitor<TypeConstraintsComponent[]> implements ASN_3gppVisitor<TypeConstraintsComponent[]> {
    visitChildren(ctx: ComponentPresenceListsContext): TypeConstraintsComponent[];
    protected defaultResult(): TypeConstraintsComponent[];
}
//# sourceMappingURL=componentPresenceListsVisitor.d.ts.map