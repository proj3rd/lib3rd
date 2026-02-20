/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { ExtensionAddition } from '../classes/sequenceType';
import { ExtensionAdditionsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ExtensionAdditionListVisitor } from './extensionAdditionListVisitor';

/**
 * #  Grammar
 * ```
 * extensionAdditions: (COMMA extensionAdditionList)?
 * ```
 */
export class ExtensionAdditionsVisitor
  extends AbstractParseTreeVisitor<ExtensionAddition[]>
  implements grammar3rdVisitor<ExtensionAddition[]> {
  public visitChildren(ctx: ExtensionAdditionsContext): ExtensionAddition[] {
    const extensionAdditionListCtx = ctx.extensionAdditionList();
    if (extensionAdditionListCtx !== undefined) {
      return extensionAdditionListCtx.accept(
        new ExtensionAdditionListVisitor(),
      );
    }
    return [];
  }

  protected defaultResult(): ExtensionAddition[] {
    return unimpl();
  }
}
