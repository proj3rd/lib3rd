import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootChoiceComponents } from '../classes/choiceType';
import {
  AlternativeTypeListsContext,
  ExtensionAdditionAlternativesContext,
  ExtensionAndExceptionContext,
  OptionalExtensionMarkerContext,
  RootAlternativeTypeListContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { OptionalExtensionMarkerVisitor } from './optionalExtensionMarkerVisitor';
import { RootAlternativeTypeListVisitor } from './rootAlternativeTypeList';

/**
 * # Grammar
 * ```
 * alternativeTypeLists: rootAlternativeTypeList
 *   (COMMA extensionAndException extensionAdditionAlternatives optionalExtensionMarker)?
 * ```
 */
export class AlternativeTypeListsVisitor
  extends AbstractParseTreeVisitor<RootChoiceComponents[]>
  implements ASN_3gppVisitor<RootChoiceComponents[]> {
  public visitChildren(
    ctx: AlternativeTypeListsContext
  ): RootChoiceComponents[] {
    const rootComponents: RootChoiceComponents[] = [];
    for (let i = 0; i < ctx.childCount; i++) {
      const childCtx = ctx.getChild(0);
      if (childCtx instanceof RootAlternativeTypeListContext) {
        rootComponents.push(
          ...childCtx.accept(new RootAlternativeTypeListVisitor())
        );
      } else if (childCtx instanceof ExtensionAndExceptionContext) {
        throw Error('Not implemented');
      } else if (childCtx instanceof ExtensionAdditionAlternativesContext) {
        throw Error('Not implemented');
      } else if (childCtx instanceof OptionalExtensionMarkerContext) {
        const optionalExtensionMarker = childCtx.accept(
          new OptionalExtensionMarkerVisitor()
        );
        if (optionalExtensionMarker !== undefined) {
          rootComponents.push(optionalExtensionMarker);
        }
      }
    }
    return rootComponents;
  }

  protected defaultResult(): RootChoiceComponents[] {
    return [];
  }
}
