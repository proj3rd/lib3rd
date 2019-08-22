import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { NamedType } from '../classes/namedType';
/**
 * ANTLR4 grammar
 * ```
 * componentType  :
 *  namedType (OPTIONAL_LITERAL | DEFAULT_LITERAL value )?
 *  |  COMPONENTS_LITERAL OF_LITERAL  asnType
 * ```
 */
export declare class ComponentTypeVisitor extends AbstractParseTreeVisitor<NamedType> implements ASN_3gppVisitor<NamedType> {
    defaultResult(): NamedType;
    visitChildren(componentTypeCtx: ComponentTypeContext): NamedType;
}
