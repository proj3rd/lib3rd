import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentIdListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * componentIdList: IDENTIFIER (DOT IDENTIFIER)*
 * ```
 */
export declare class ComponentIdListVisitor extends AbstractParseTreeVisitor<string[]> implements grammar3rdVisitor<string[]> {
    visitChildren(ctx: ComponentIdListContext): string[];
    protected defaultResult(): string[];
}
//# sourceMappingURL=componentIdListVisitor.d.ts.map