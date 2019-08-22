import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { AlternativeTypeListsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';
import { NamedType } from '../classes/namedType';
import { ExtensionAdditionAlternativesVisitor } from './extensionAdditionAlternatives';
import { ExtensionAndExceptionVisitor } from './extensionAndException';
import { OptionalExtensionMarkerVisitor } from './optionalExtensionMarker';
import { RootAlternativeTypeListVisitor } from './rootAlternativeTypeList';

export type AlternativeTypeLists = Array<NamedType | ExtensionMarker>;

/**
 * ANTLR4 grammar
 * ```
 * alternativeTypeLists :   rootAlternativeTypeList (COMMA
 *    extensionAndException  extensionAdditionAlternatives  optionalExtensionMarker )?
 * ```
 */
export class AlternativeTypeListsVisitor extends AbstractParseTreeVisitor<AlternativeTypeLists>
                                         implements ASN_3gppVisitor<AlternativeTypeLists> {
  public defaultResult(): AlternativeTypeLists {
    return undefined;
  }

  public visitChildren(alternativeTypeListsCtx: AlternativeTypeListsContext): AlternativeTypeLists {
    const childCtxes = alternativeTypeListsCtx.children;
    const rootAlternativeTypeListCtx = childCtxes[0];
    const extensionAndExceptionCtx = childCtxes[2];
    const extensionAdditionAlternativesCtx = childCtxes[3];
    const optionalExtensionMarkerCtx = childCtxes[4];

    const alternativeTypeList: AlternativeTypeLists =
      rootAlternativeTypeListCtx.accept(new RootAlternativeTypeListVisitor());
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
