/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { ExtensionAdditionAlternative } from '../classes/choiceType';
import { ExtensionAdditionAlternativesListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ExtensionAdditionAlternativeVisitor } from './extensionAdditionAlternativeVisitor';

/**
 * # Grammar
 * ```
 * extensionAdditionAlternativesList:
 *   (extensionAdditionAlternative) (COMMA extensionAdditionAlternative)*
 * ```
 */
export class ExtensionAdditionAlternativesListVisitor
  extends AbstractParseTreeVisitor<ExtensionAdditionAlternative[]>
  implements grammar3rdVisitor<ExtensionAdditionAlternative[]> {
  public visitChildren(
    ctx: ExtensionAdditionAlternativesListContext,
  ): ExtensionAdditionAlternative[] {
    const extensionAdditionAlternativeCtxes = ctx.extensionAdditionAlternative();
    return extensionAdditionAlternativeCtxes.map(
      (extensionAdditionAlternativeCtx) => extensionAdditionAlternativeCtx.accept(
        new ExtensionAdditionAlternativeVisitor(),
      ),
    );
  }

  protected defaultResult(): ExtensionAdditionAlternative[] {
    return unimpl();
  }
}
