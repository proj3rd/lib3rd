/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootSequenceComponents, SequenceType } from '../classes/sequenceType';
import { SequenceTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ComponentTypeListsVisitor } from './componentTypeListsVisitor';
import { ExtensionAndExceptionVisitor } from './extensionAndExceptionVisitor';
import { OptionalExtensionMarkerVisitor } from './optionalExtensionMarkerVisitor';

/**
 * # Grammar
 * ```
 * sequenceType: SEQUENCE_LITERAL L_BRACE
 *   (extensionAndException  optionalExtensionMarker | componentTypeLists)?
 *   R_BRACE
 * ```
 */
export class SequenceTypeVisitor extends AbstractParseTreeVisitor<SequenceType>
  implements grammar3rdVisitor<SequenceType> {
  public visitChildren(ctx: SequenceTypeContext): SequenceType {
    const componentTypes: RootSequenceComponents[] = [];
    const extensionAndExceptionCtx = ctx.extensionAndException();
    if (extensionAndExceptionCtx !== undefined) {
      const extensionAndException = extensionAndExceptionCtx.accept(
        new ExtensionAndExceptionVisitor(),
      );
      componentTypes.push(extensionAndException);
    }
    const optionalExtensionMarkerCtx = ctx.optionalExtensionMarker();
    if (optionalExtensionMarkerCtx !== undefined) {
      const optionalExtensionMarker = optionalExtensionMarkerCtx.accept(
        new OptionalExtensionMarkerVisitor(),
      );
      if (optionalExtensionMarker !== undefined) {
        componentTypes.push(optionalExtensionMarker);
      }
    }
    const componentTypeListsCtx = ctx.componentTypeLists();
    if (componentTypeListsCtx !== undefined) {
      componentTypes.push(
        ...componentTypeListsCtx.accept(new ComponentTypeListsVisitor()),
      );
    }
    return new SequenceType(componentTypes);
  }

  protected defaultResult(): SequenceType {
    return new SequenceType([]);
  }
}
