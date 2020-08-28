import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentType } from '../classes/componentType';
import { ComponentTypeListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * componentTypeList: (componentType) (COMMA tag? componentType)*
 * ```
 */
export declare class ComponentTypeListVisitor extends AbstractParseTreeVisitor<ComponentType[]> implements ASN_3gppVisitor<ComponentType[]> {
    visitChildren(ctx: ComponentTypeListContext): ComponentType[];
    protected defaultResult(): ComponentType[];
}
//# sourceMappingURL=componentTypeListVisitor.d.ts.map