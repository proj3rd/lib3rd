/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ExtensionAddition } from '../classes/sequenceType';
import {
  ComponentTypeContext,
  ExtensionAdditionContext,
  ExtensionAdditionGroupContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
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
  implements grammar3rdVisitor<ExtensionAddition> {
  public visitChildren(ctx: ExtensionAdditionContext): ExtensionAddition {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof ComponentTypeContext) {
      return childCtx.accept(new ComponentTypeVisitor());
    } if (childCtx instanceof ExtensionAdditionGroupContext) {
      return childCtx.accept(new ExtensionAdditionGroupVisitor());
    }
    throw Error();
  }

  protected defaultResult(): ExtensionAddition {
    return unimpl();
  }
}
