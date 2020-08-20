import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentType } from '../classes/sequenceType';
import { ComponentTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * componentType:
 *   namedType (OPTIONAL_LITERAL | DEFAULT_LITERAL value)? |
 *   COMPONENTS_LITERAL OF_LITERAL asnType
 * ```
 */
export declare class ComponentTypeVisitor extends AbstractParseTreeVisitor<ComponentType> implements ASN_3gppVisitor<ComponentType> {
    visitChildren(ctx: ComponentTypeContext): ComponentType;
    protected defaultResult(): ComponentType;
}
//# sourceMappingURL=componentTypeVisitor.d.ts.map