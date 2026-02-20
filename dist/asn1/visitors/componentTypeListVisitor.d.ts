import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentType } from '../classes/componentType';
import { ComponentTypeListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * componentTypeList: (componentType) (COMMA tag? componentType)*
 * ```
 */
export declare class ComponentTypeListVisitor extends AbstractParseTreeVisitor<ComponentType[]> implements grammar3rdVisitor<ComponentType[]> {
    visitChildren(ctx: ComponentTypeListContext): ComponentType[];
    protected defaultResult(): ComponentType[];
}
//# sourceMappingURL=componentTypeListVisitor.d.ts.map