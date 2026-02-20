/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { ExtensionAdditionAlternative } from '../classes/choiceType';
import { ExtensionAdditionAlternativesContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ExtensionAdditionAlternativesListVisitor } from './extensionAdditionAlternativesListVisitor';

/**
 * # Grammar
 * ```
 * extensionAdditionAlternatives: (COMMA extensionAdditionAlternativesList)?
 * ```
 */
export class ExtensionAdditionAlternativesVisitor
  extends AbstractParseTreeVisitor<ExtensionAdditionAlternative[]>
  implements grammar3rdVisitor<ExtensionAdditionAlternative[]> {
  public visitChildren(
    ctx: ExtensionAdditionAlternativesContext,
  ): ExtensionAdditionAlternative[] {
    const extensionAdditionAlternativesListCtx = ctx.extensionAdditionAlternativesList();
    if (extensionAdditionAlternativesListCtx === undefined) {
      return [];
    }
    return extensionAdditionAlternativesListCtx.accept(
      new ExtensionAdditionAlternativesListVisitor(),
    );
  }

  protected defaultResult(): ExtensionAdditionAlternative[] {
    return unimpl();
  }
}
