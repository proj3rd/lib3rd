/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ExtensionAdditionAlternative } from '../classes/choiceType';
import {
  ExtensionAdditionAlternativeContext,
  ExtensionAdditionAlternativesGroupContext,
  NamedTypeContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ExtensionAdditionAlternativesGroupVisitor } from './extensionAdditionAlternativesGroupVisitor';
import { NamedTypeVisitor } from './namedTypeVisitor';

/**
 * # Grammar
 * ```
 * extensionAdditionAlternative: extensionAdditionAlternativesGroup | namedType
 * ```
 */
export class ExtensionAdditionAlternativeVisitor
  extends AbstractParseTreeVisitor<ExtensionAdditionAlternative>
  implements grammar3rdVisitor<ExtensionAdditionAlternative> {
  public visitChildren(
    ctx: ExtensionAdditionAlternativeContext,
  ): ExtensionAdditionAlternative {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof ExtensionAdditionAlternativesGroupContext) {
      return childCtx.accept(new ExtensionAdditionAlternativesGroupVisitor());
    } if (childCtx instanceof NamedTypeContext) {
      return childCtx.accept(new NamedTypeVisitor());
    }
    throw Error();
  }

  protected defaultResult(): ExtensionAdditionAlternative {
    return unimpl();
  }
}
