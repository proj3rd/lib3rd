/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentType } from '../classes/componentType';
import { ExtensionMarker } from '../classes/extensionMarker';
import {
  ComponentTypeListsContext,
  ExtensionAdditionsContext,
  ExtensionAndExceptionContext,
  OptionalExtensionMarkerContext,
  RootComponentTypeListContext,
  TagContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { RootSequenceComponents } from '../types/rootSequenceComponents';
import { ExtensionAdditionsVisitor } from './extensionAdditionsVisitor';
import { ExtensionAndExceptionVisitor } from './extensionAndExceptionVisitor';
import { OptionalExtensionMarkerVisitor } from './optionalExtensionMarkerVisitor';
import { RootComponentTypeListVisitor } from './rootComponentTypeListVisitor';
import { TagVisitor } from './tagVisitor';

/**
 * # Grammar
 * ```
 * componentTypeLists :
 *     // RootComponentTypeList
 *     rootComponentTypeList tag?
 *     // | RootComponentTypeList "," ExtensionAndException ExtensionAdditions
 *            OptionalExtensionMarker
 *     // | RootComponentTypeList "," ExtensionAndException ExtensionAdditions
 *            ExtensionEndMarker "," RootComponentTypeList
 *   | rootComponentTypeList COMMA tag? extensionAndException extensionAdditions tag?
 *   | rootComponentTypeList COMMA tag? extensionAndException extensionAdditions
 *       (COMMA tag? ELLIPSIS (COMMA rootComponentTypeList tag?)?)?
 *     // | ExtensionAndException ExtensionAdditions ExtensionEndMarker "," RootComponentTypeList
 *     // | ExtensionAndException ExtensionAdditions OptionalExtensionMarker
 *   | extensionAndException extensionAdditions tag?
 *   | extensionAndException extensionAdditions
 *       (COMMA tag? ELLIPSIS (COMMA rootComponentTypeList tag?))?
 * ```
 */
export class ComponentTypeListsVisitor
  extends AbstractParseTreeVisitor<RootSequenceComponents[]>
  implements grammar3rdVisitor<RootSequenceComponents[]> {
  public visitChildren(
    ctx: ComponentTypeListsContext,
  ): RootSequenceComponents[] {
    const rootSequenceComponents: RootSequenceComponents[] = [];
    const { childCount } = ctx;
    for (let i = 0; i < childCount; i += 1) {
      const childCtx = ctx.getChild(i);
      if (childCtx instanceof RootComponentTypeListContext) {
        rootSequenceComponents.push(
          ...childCtx.accept(new RootComponentTypeListVisitor()),
        );
      } else if (childCtx instanceof TagContext) {
        const tag = childCtx.accept(new TagVisitor());
        const { length } = rootSequenceComponents;
        const lastComponent = rootSequenceComponents[length - 1];
        if (lastComponent instanceof ComponentType) {
          lastComponent.tag = tag;
        } else {
          throw Error();
        }
      } else if (childCtx instanceof ExtensionAndExceptionContext) {
        const extensionAndException = childCtx.accept(
          new ExtensionAndExceptionVisitor(),
        );
        rootSequenceComponents.push(extensionAndException);
      } else if (childCtx instanceof ExtensionAdditionsContext) {
        const extensionAdditions = childCtx.accept(
          new ExtensionAdditionsVisitor(),
        );
        rootSequenceComponents.push(...extensionAdditions);
      } else if (childCtx instanceof OptionalExtensionMarkerContext) {
        const optionalExtensionMarker = childCtx.accept(
          new OptionalExtensionMarkerVisitor(),
        );
        if (optionalExtensionMarker !== undefined) {
          rootSequenceComponents.push(optionalExtensionMarker);
        }
      } else {
        switch (childCtx.text) {
          case ',...': {
            rootSequenceComponents.push(ExtensionMarker.getInstance());
            break;
          }
          case ',': {
            break;
          }
          default: {
            throw Error(childCtx.text);
          }
        }
      }
    }
    return rootSequenceComponents;
  }

  protected defaultResult(): RootSequenceComponents[] {
    return [];
  }
}
