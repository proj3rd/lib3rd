import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ComponentTypeListsContext } from '../ASN_3gppParser';
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
 *     rootComponentTypeList (tag | (COMMA tag? extensionAndException  extensionAdditions (tag | (COMMA tag? ELLIPSIS  (COMMA  rootComponentTypeList tag?)?))?))?
 *    |  extensionAndException  extensionAdditions (tag | (COMMA tag? ELLIPSIS  (COMMA    rootComponentTypeList tag?)?))?
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
      switch (getContextName(childCtx)) {
        case 'rootComponentTypeList': {
          componentTypeLists.splice(componentTypeLists.length, 0,
            ...childCtx.accept(new RootComponentTypeListVisitor()));
          break;
        }
        case 'tag': {
          const tag = childCtx.accept(new TagVisitor());
          componentTypeLists[componentTypeLists.length - 1].tag = tag;
          break;
        }
        case 'extensionAndException': {
          componentTypeLists.splice(componentTypeLists.length, 0,
            ...childCtx.accept(new ExtensionAndExceptionVisitor()));
          break;
        }
        case 'extensionAdditions': {
          componentTypeLists.splice(componentTypeLists.length, 0,
            ...childCtx.accept(new ExtensionAdditionsVisitor()));
          break;
        }
        case 'optionalExtensionMarker': {
          componentTypeLists.splice(componentTypeLists.length, 0,
            ...childCtx.accept(new OptionalExtensionMarkerVisitor()));
          break;
        }
        default: {
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
          break;
        }
      }
    });
    return componentTypeLists;
  }
}
