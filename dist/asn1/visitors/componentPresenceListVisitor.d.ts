import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TypeConstraintsComponent } from '../classes/innerTypeConstraints';
import { ComponentPresenceListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * componentPresenceList: (componentPresence) (COMMA componentPresence)*
 * ```
 */
export declare class ComponentPresenceListVisitor extends AbstractParseTreeVisitor<TypeConstraintsComponent[]> implements ASN_3gppVisitor<TypeConstraintsComponent[]> {
    visitChildren(ctx: ComponentPresenceListContext): TypeConstraintsComponent[];
    protected defaultResult(): TypeConstraintsComponent[];
}
//# sourceMappingURL=componentPresenceListVisitor.d.ts.map