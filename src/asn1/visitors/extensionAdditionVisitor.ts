import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { ExtensionAddition } from '../classes/sequenceType';
import {
  ComponentTypeContext,
  ExtensionAdditionContext,
  ExtensionAdditionGroupContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ComponentTypeVisitor } from './componentTypeVisitor';
import { ExtensionAdditionGroupVisitor } from './extensionAdditionGroupVisitor';

/**
 * # Grammar
 * ```
 * extensionAddition: componentType | extensionAdditionGroup
 * ```
 */
export class ExtensionAdditionVisitor
  extends AbstractParseTreeVisitor<ExtensionAddition>
  implements ASN_3gppVisitor<ExtensionAddition> {
  public visitChildren(ctx: ExtensionAdditionContext): ExtensionAddition {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof ComponentTypeContext) {
      return childCtx.accept(new ComponentTypeVisitor());
    } else if (childCtx instanceof ExtensionAdditionGroupContext) {
      return childCtx.accept(new ExtensionAdditionGroupVisitor());
    }
    throw Error();
  }

  protected defaultResult(): ExtensionAddition {
    return unimpl();
  }
}
