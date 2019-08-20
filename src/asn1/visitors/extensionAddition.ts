import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ExtensionAdditionContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAdditionGroup } from '../classes/extensionAdditionGroup';
import { NamedType } from '../classes/namedType';
import { ComponentTypeVisitor } from './componentType';
import { ExtensionAdditionGroupVisitor } from './extensionAdditionGroup';

type ExtensionAddition = NamedType | ExtensionAdditionGroup;

/**
 * ANTLR4 grammar
 * ```
 * extensionAddition  : componentType  |  extensionAdditionGroup
 * ```
 */
export class ExtensionAdditionVisitor extends AbstractParseTreeVisitor<ExtensionAddition>
                                      implements ASN_3gppVisitor<ExtensionAddition> {
  public defaultResult(): ExtensionAddition {
    return undefined;
  }

  public visitChildren(extensionAdditionCtx: ExtensionAdditionContext): ExtensionAddition {
    const childCtx = extensionAdditionCtx.children[0];
    let extensionAddition: ExtensionAddition;
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
