/**
 * ANTRL4 grammar
 * ```
 *  componentTypeLists :
 *     rootComponentTypeList (COMMA  extensionAndException  extensionAdditions
 *      (optionalExtensionMarker|(EXTENSTIONENDMARKER  COMMA  rootComponentTypeList)))?
 *    |  extensionAndException  extensionAdditions
 *      (optionalExtensionMarker | (EXTENSTIONENDMARKER  COMMA    rootComponentTypeList))
 * ```
 */
export declare class ComponentTypeListsVisitor {
    visitChildren(componentTypeListsCtx: any): any;
}
