/**
 * ANTRL4 grammar
 * ```
 *  componentTypeLists :
 *     rootComponentTypeList (tag | (COMMA tag? extensionAndException  extensionAdditions
 *      (optionalExtensionMarker|(EXTENSTIONENDMARKER  COMMA  rootComponentTypeList tag?))))?
 *    |  extensionAndException  extensionAdditions
 *      (optionalExtensionMarker | (EXTENSTIONENDMARKER  COMMA    rootComponentTypeList tag?))
 * ```
 */
export declare class ComponentTypeListsVisitor {
    visitChildren(componentTypeListsCtx: any): any;
}
