/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ExtensionAdditionAlternativeGroup } from '../classes/extensionAdditionAlternativeGroup';
import { ExtensionAdditionAlternativesGroupContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { AlternativeTypeListVisitor } from './alternativeTypeListVisitor';
import { VersionNumberVisitor } from './versionNumberVisitor';

/**
 * # Grammar
 * ```
 * extensionAdditionAlternativesGroup:
 *   DOUBLE_L_BRACKET versionNumber alternativeTypeList DOUBLE_R_BRACKET
 * ```
 */
export class ExtensionAdditionAlternativesGroupVisitor
  extends AbstractParseTreeVisitor<ExtensionAdditionAlternativeGroup>
  implements grammar3rdVisitor<ExtensionAdditionAlternativeGroup> {
  public visitChildren(
    ctx: ExtensionAdditionAlternativesGroupContext,
  ): ExtensionAdditionAlternativeGroup {
    const versionNumberCtx = ctx.versionNumber();
    const versionNumber = versionNumberCtx.accept(new VersionNumberVisitor());
    const alternativeTypeListCtx = ctx.alternativeTypeList();
    const alternativeTypeList = alternativeTypeListCtx.accept(
      new AlternativeTypeListVisitor(),
    );
    return new ExtensionAdditionAlternativeGroup(
      versionNumber,
      alternativeTypeList,
    );
  }

  protected defaultResult(): ExtensionAdditionAlternativeGroup {
    return unimpl();
  }
}
