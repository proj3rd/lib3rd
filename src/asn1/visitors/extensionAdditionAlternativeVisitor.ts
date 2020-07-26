import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ExtensionAdditionAlternative } from '../classes/choiceType';
import {
  ExtensionAdditionAlternativeContext,
  ExtensionAdditionAlternativesGroupContext,
  NamedTypeContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
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
  implements ASN_3gppVisitor<ExtensionAdditionAlternative> {
  public visitChildren(
    ctx: ExtensionAdditionAlternativeContext
  ): ExtensionAdditionAlternative {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof ExtensionAdditionAlternativesGroupContext) {
      return childCtx.accept(new ExtensionAdditionAlternativesGroupVisitor());
    } else if (childCtx instanceof NamedTypeContext) {
      return childCtx.accept(new NamedTypeVisitor());
    } else {
      throw Error();
    }
  }

  protected defaultResult(): ExtensionAdditionAlternative {
    return unimpl();
  }
}
