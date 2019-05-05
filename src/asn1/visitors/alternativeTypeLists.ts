import { ExtensionAdditionAlternativesVisitor } from './extensionAdditionAlternatives';
import { ExtensionAndExceptionVisitor } from './extensionAndException';
import { OptionalExtensionMarkerVisitor } from './optionalExtensionMarker';
import { RootAlternativeTypeListVisitor } from './rootAlternativeTypeList';

/**
 * ANTLR4 grammar
 * ```
 * alternativeTypeLists :   rootAlternativeTypeList (COMMA
 *    extensionAndException  extensionAdditionAlternatives  optionalExtensionMarker )?
 * ```
 */
export class AlternativeTypeListsVisitor {
  public visitChildren(alternativeTypeListsCtx: any): any /* TODO */ {
    const childCtxes = alternativeTypeListsCtx.children;
    const rootAlternativeTypeListCtx = childCtxes[0];
    const extensionAndExceptionCtx = childCtxes[2];
    const extensionAdditionAlternativesCtx = childCtxes[3];
    const optionalExtensionMarkerCtx = childCtxes[4];

    const alternativeTypeList: any[] = rootAlternativeTypeListCtx.accept(new RootAlternativeTypeListVisitor());
    if (extensionAndExceptionCtx) {
      alternativeTypeList.splice(alternativeTypeList.length, 0,
        ...extensionAndExceptionCtx.accept(new ExtensionAndExceptionVisitor()));
    }
    if (extensionAdditionAlternativesCtx) {
      const extensionAdditionAlternatives =
        extensionAdditionAlternativesCtx.accept(new ExtensionAdditionAlternativesVisitor());
      alternativeTypeList.splice(alternativeTypeList.length, 0, ...extensionAdditionAlternatives);
    }
    if (optionalExtensionMarkerCtx) {
      const optionalExtensionMarker = optionalExtensionMarkerCtx.accept(new OptionalExtensionMarkerVisitor());
      alternativeTypeList.splice(alternativeTypeList.length, 0, ...optionalExtensionMarker);
    }
    return alternativeTypeList;
  }
}
