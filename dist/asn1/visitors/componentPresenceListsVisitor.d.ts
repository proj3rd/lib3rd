import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TypeConstraintsComponent } from '../classes/innerTypeConstraints';
import { ComponentPresenceListsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * componentPresenceLists:
 *   componentPresenceList? (COMMA ELLIPSIS (COMMA componentPresenceList)?)?
 *   | ELLIPSIS (COMMA componentPresenceList)?
 * ```
 */
export declare class ComponentPresenceListsVisitor extends AbstractParseTreeVisitor<TypeConstraintsComponent[]> implements grammar3rdVisitor<TypeConstraintsComponent[]> {
    visitChildren(ctx: ComponentPresenceListsContext): TypeConstraintsComponent[];
    protected defaultResult(): TypeConstraintsComponent[];
}
//# sourceMappingURL=componentPresenceListsVisitor.d.ts.map