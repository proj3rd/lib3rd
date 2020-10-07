/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootChoiceComponents } from '../classes/choiceType';
import {
  AlternativeTypeListsContext,
  ExtensionAdditionAlternativesContext,
  ExtensionAndExceptionContext,
  OptionalExtensionMarkerContext,
  RootAlternativeTypeListContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ExtensionAdditionAlternativesVisitor } from './extensionAdditionAlternativesVisitor';
import { ExtensionAndExceptionVisitor } from './extensionAndExceptionVisitor';
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
  implements grammar3rdVisitor<RootChoiceComponents[]> {
  public visitChildren(
    ctx: AlternativeTypeListsContext,
  ): RootChoiceComponents[] {
    const rootComponents: RootChoiceComponents[] = [];
    for (let i = 0; i < ctx.childCount; i += 1) {
      const childCtx = ctx.getChild(i);
      if (childCtx instanceof RootAlternativeTypeListContext) {
        rootComponents.push(
          ...childCtx.accept(new RootAlternativeTypeListVisitor()),
        );
      } else if (childCtx instanceof ExtensionAndExceptionContext) {
        const extensionAndException = childCtx.accept(
          new ExtensionAndExceptionVisitor(),
        );
        rootComponents.push(extensionAndException);
      } else if (childCtx instanceof ExtensionAdditionAlternativesContext) {
        const extensionAdditionAlternatives = childCtx.accept(
          new ExtensionAdditionAlternativesVisitor(),
        );
        rootComponents.push(...extensionAdditionAlternatives);
      } else if (childCtx instanceof OptionalExtensionMarkerContext) {
        const optionalExtensionMarker = childCtx.accept(
          new OptionalExtensionMarkerVisitor(),
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
