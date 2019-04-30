import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

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

    const alternativeTypeList = rootAlternativeTypeListCtx.accept(new RootAlternativeTypeListVisitor());
    if (extensionAndExceptionCtx) {
      // TODO
      log.warn(getLogWithAsn1(alternativeTypeListsCtx, 'ExtensionAndException not supported:'));
    }
    if (extensionAdditionAlternativesCtx) {
      // TODO
      log.warn(getLogWithAsn1(alternativeTypeListsCtx, 'ExtensionAdditionAlternatives not supported:'));
    }
    if (optionalExtensionMarkerCtx) {
      const optionalExtensionMarker = optionalExtensionMarkerCtx.accept(new OptionalExtensionMarkerVisitor());
      if (optionalExtensionMarker) {
        alternativeTypeList.push(optionalExtensionMarker);
      }
    }
    return alternativeTypeList;
  }
}
