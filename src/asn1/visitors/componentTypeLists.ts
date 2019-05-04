import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';
import { ExtensionAdditionsVisitor } from './extensionAdditions';
import { ExtensionAndExceptionVisitor } from './extensionAndException';
import { OptionalExtensionMarkerVisitor } from './optionalExtensionMarker';
import { RootComponentTypeListVisitor } from './rootComponentTypeList';

/**
 * ANTRL4 grammar
 * ```
 *  componentTypeLists :
 *     rootComponentTypeList (COMMA  extensionAndException  extensionAdditions
 *      (optionalExtensionMarker|(EXTENSTIONENDMARKER  COMMA  rootComponentTypeList)))?
 *    |  extensionAndException  extensionAdditions
 *      (optionalExtensionMarker | (EXTENSTIONENDMARKER  COMMA    rootComponentTypeList))
 * ```
 */
export class ComponentTypeListsVisitor {
  public visitChildren(componentTypeListsCtx: any): any /* TODO */ {
    const childCtxes = componentTypeListsCtx.children;
    let componentTypeLists = null;
    switch (getContextName(childCtxes[0])) {
      case 'rootComponentTypeList': {
        const rootComponentTypeListCtx = childCtxes[0];
        componentTypeLists = rootComponentTypeListCtx.accept(new RootComponentTypeListVisitor());
        const extensionAndExceptionCtx = childCtxes[2];
        if (extensionAndExceptionCtx) {
          componentTypeLists.splice(componentTypeLists.length, 0,
            ...extensionAndExceptionCtx.accept(new ExtensionAndExceptionVisitor()));
        }
        const extensionAdditionsCtx = childCtxes[3];
        if (extensionAdditionsCtx) {
          componentTypeLists.splice(componentTypeLists.length, 0,
            ...extensionAdditionsCtx.accept(new ExtensionAdditionsVisitor()));
        }
        switch (childCtxes.length) {
          case 1: {
            break;
          }
          case 5: {
            const optionalExtensionMarkerCtx = childCtxes[4];
            const optionalExtensionMarker = optionalExtensionMarkerCtx.accept(new OptionalExtensionMarkerVisitor());
            if (optionalExtensionMarker) {
              componentTypeLists.push(optionalExtensionMarker);
            }
            break;
          }
          case 7: {
            const extendedRootComponentTypeListCtx = childCtxes[6];
            componentTypeLists.splice(componentTypeLists.length, 0,
              ...extendedRootComponentTypeListCtx.accept(new RootComponentTypeListVisitor()));
            break;
          }
          default: {
            log.warn(getLogWithAsn1(componentTypeListsCtx, 'Not supported ASN1:'));
            break;
          }
        }
        // TODO
        break;
      }
      case 'extensionAndException': {
        const extensionAndExceptionCtx = childCtxes[0];
        componentTypeLists.splice(componentTypeLists.length, 0,
          ...extensionAndExceptionCtx.accept(new ExtensionAndExceptionVisitor()));
        const extensionAdditionsCtx = childCtxes[1];
        componentTypeLists.splice(componentTypeLists.length, 0,
          ...extensionAdditionsCtx.accept(new ExtensionAdditionsVisitor()));
        switch (childCtxes.length) {
          case 3: {
            const optionalExtensionMarkerCtx = childCtxes[2];
            const optionalExtensionMarker = optionalExtensionMarkerCtx.accept(new OptionalExtensionMarkerVisitor());
            if (optionalExtensionMarker) {
              componentTypeLists.push(optionalExtensionMarker);
            }
            break;
          }
          case 5: {
            const extendedRootComponentTypeListCtx = childCtxes[4];
            componentTypeLists.splice(componentTypeLists.length, 0,
              ...extendedRootComponentTypeListCtx.accept(new RootComponentTypeListVisitor()));
            break;
          }
          default: {
            log.warn(getLogWithAsn1(componentTypeListsCtx, 'Not supported ASN1:'));
            break;
          }
        }
        break;
      }
      default: {
        log.warn(getLogWithAsn1(componentTypeListsCtx, 'Not supported ASN1:'));
        break;
      }
    }
    return componentTypeLists;
  }
}
