import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentTypeListsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';
import { NamedType } from '../classes/namedType';
import { ExtensionAddition } from './extensionAddition';
declare type ComponentTypeLists = Array<NamedType | ExtensionMarker | ExtensionAddition>;
/**
 * ANTRL4 grammar
 * ```
 *  componentTypeLists :
 *     rootComponentTypeList
 *       (tag | (COMMA tag? extensionAndException  extensionAdditions
 *                 (optionalExtensionMarker|(EXTENSTIONENDMARKER  COMMA  rootComponentTypeList tag?)?))?))?
 *    |  extensionAndException  extensionAdditions
 *         (optionalExtensionMarker | (EXTENSTIONENDMARKER  COMMA    rootComponentTypeList tag?)?))?
 * ```
 */
export declare class ComponentTypeListsVisitor extends AbstractParseTreeVisitor<ComponentTypeLists> implements ASN_3gppVisitor<ComponentTypeLists> {
    defaultResult(): ComponentTypeLists;
    visitChildren(componentTypeListsCtx: ComponentTypeListsContext): ComponentTypeLists;
}
export {};
