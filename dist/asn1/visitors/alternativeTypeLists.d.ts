/**
 * ANTLR4 grammar
 * ```
 * alternativeTypeLists :   rootAlternativeTypeList (COMMA
 *    extensionAndException  extensionAdditionAlternatives  optionalExtensionMarker )?
 * ```
 */
export declare class AlternativeTypeListsVisitor {
    visitChildren(alternativeTypeListsCtx: any): any;
}
