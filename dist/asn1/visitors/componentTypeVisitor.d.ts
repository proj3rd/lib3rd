import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentType } from '../classes/componentType';
import { ComponentTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * componentType:
 *   namedType (OPTIONAL_LITERAL | DEFAULT_LITERAL value)? |
 *   COMPONENTS_LITERAL OF_LITERAL asnType
 * ```
 */
export declare class ComponentTypeVisitor extends AbstractParseTreeVisitor<ComponentType> implements grammar3rdVisitor<ComponentType> {
    visitChildren(ctx: ComponentTypeContext): ComponentType;
    protected defaultResult(): ComponentType;
}
//# sourceMappingURL=componentTypeVisitor.d.ts.map