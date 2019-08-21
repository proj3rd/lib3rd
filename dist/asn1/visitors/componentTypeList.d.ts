import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentTypeListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { NamedType } from '../classes/namedType';
/**
 * ANTLR4 grammar
 * ```
 * componentTypeList  : (componentType) (COMMA tag? componentType)*
 * ```
 */
export declare class ComponentTypeListVisitor extends AbstractParseTreeVisitor<NamedType[]> implements ASN_3gppVisitor<NamedType[]> {
    defaultResult(): NamedType[];
    visitChildren(componentTypeListCtx: ComponentTypeListContext): NamedType[];
}
