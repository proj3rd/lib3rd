import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ComponentTypeListsContext, ExtensionAdditionsContext, ExtensionAndExceptionContext,
         OptionalExtensionMarkerContext, RootComponentTypeListContext, TagContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';
import { NamedType } from '../classes/namedType';
import { ExtensionAddition } from './extensionAddition';
import { ExtensionAdditionsVisitor } from './extensionAdditions';
import { ExtensionAndExceptionVisitor } from './extensionAndException';
import { OptionalExtensionMarkerVisitor } from './optionalExtensionMarker';
import { RootComponentTypeListVisitor } from './rootComponentTypeList';
import { TagVisitor } from './tag';

type ComponentTypeLists = Array<NamedType | ExtensionMarker | ExtensionAddition>;

/**
 * ANTRL4 grammar
 * ```
 *  componentTypeLists :
 *     rootComponentTypeList
 *       (tag | (COMMA tag? extensionAndException  extensionAdditions
 *                 (optionalExtensionMarker|(EXTENSTIONENDMARKER  COMMA  rootComponentTypeList tag?)?))?))?
 *    |  extensionAndException  extensionAdditions
 *         (optionalExtensionMarker | (EXTENSTIONENDMARKER  COMMA    rootComponentTypeList tag?)?))?
 * ```
 */
export class ComponentTypeListsVisitor extends AbstractParseTreeVisitor<ComponentTypeLists>
                                       implements ASN_3gppVisitor<ComponentTypeLists> {
  public defaultResult(): ComponentTypeLists {
    return [];
  }

  public visitChildren(componentTypeListsCtx: ComponentTypeListsContext): ComponentTypeLists {
    const childCtxes = componentTypeListsCtx.children;
    const componentTypeLists = [];
    childCtxes.forEach((childCtx) => {
      if (childCtx instanceof RootComponentTypeListContext) {
        componentTypeLists.splice(componentTypeLists.length, 0,
          ...childCtx.accept(new RootComponentTypeListVisitor()));
      } else if (childCtx instanceof TagContext) {
        const tag = childCtx.accept(new TagVisitor());
        componentTypeLists[componentTypeLists.length - 1].tag = tag;
      } else if (childCtx instanceof ExtensionAndExceptionContext) {
        componentTypeLists.splice(componentTypeLists.length, 0,
          ...childCtx.accept(new ExtensionAndExceptionVisitor()));
      } else if (childCtx instanceof ExtensionAdditionsContext) {
        componentTypeLists.splice(componentTypeLists.length, 0,
          ...childCtx.accept(new ExtensionAdditionsVisitor()));
      } else if (childCtx instanceof OptionalExtensionMarkerContext) {
        componentTypeLists.splice(componentTypeLists.length, 0,
          ...childCtx.accept(new OptionalExtensionMarkerVisitor()));
      } else {
        // COMMA or EXTENSIONENDMARKER
        switch (childCtx.text) {
          case ', ...': {
            componentTypeLists.push(new ExtensionMarker());
            break;
          }
          case ',': {
            break;
          }
          default: {
            log.warn(getLogWithAsn1(childCtx, 'Not supported ASN1:'));
            break;
          }
        }
      }
    });
    return componentTypeLists;
  }
}
