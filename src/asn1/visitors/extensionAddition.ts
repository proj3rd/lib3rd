import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ComponentTypeContext, ExtensionAdditionContext, ExtensionAdditionGroupContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAdditionGroup } from '../classes/extensionAdditionGroup';
import { NamedType } from '../classes/namedType';
import { ComponentTypeVisitor } from './componentType';
import { ExtensionAdditionGroupVisitor } from './extensionAdditionGroup';

export type ExtensionAddition = NamedType | ExtensionAdditionGroup;

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
    if (childCtx instanceof ComponentTypeContext) {
      extensionAddition = childCtx.accept(new ComponentTypeVisitor());
    } else if (childCtx instanceof ExtensionAdditionGroupContext) {
      extensionAddition = childCtx.accept(new ExtensionAdditionGroupVisitor());
    } else {
      log.warn(getLogWithAsn1(extensionAdditionCtx, 'Not supported ASN1:'));
    }
    return extensionAddition;
  }
}
