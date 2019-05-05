import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ComponentTypeVisitor } from './componentType';
import { ExtensionAdditionGroupVisitor } from './extensionAdditionGroup';

/**
 * ANTLR4 grammar
 * ```
 * extensionAddition  : componentType  |  extensionAdditionGroup
 * ```
 */
export class ExtensionAdditionVisitor {
  public visitChildren(extensionAdditionCtx: any): any /* TODO */ {
    const childCtx = extensionAdditionCtx.children[0];
    let extensionAddition = null;
    switch (getContextName(childCtx)) {
      case 'componentType': {
        extensionAddition = childCtx.accept(new ComponentTypeVisitor());
        break;
      }
      case 'extensionAdditionGroup': {
        extensionAddition = childCtx.accept(new ExtensionAdditionGroupVisitor());
        break;
      }
      default: {
        log.warn(getLogWithAsn1(extensionAdditionCtx, 'Not supported ASN1:'));
        break;
      }
    }
    return extensionAddition;
  }
}
