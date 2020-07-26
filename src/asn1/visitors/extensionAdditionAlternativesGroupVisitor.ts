import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ExtensionAdditionAlternativeGroup } from '../classes/choiceType';
import { ExtensionAdditionAlternativesGroupContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { AlternativeTypeListVisitor } from './alternativeTypeListVisitor';
import { VersionNumberVisitor } from './versionNumberVisitor';

/**
 * # Grammar
 * ```
 * extensionAdditionAlternativesGroup: DOUBLE_L_BRACKET versionNumber alternativeTypeList DOUBLE_R_BRACKET
 * ```
 */
export class ExtensionAdditionAlternativesGroupVisitor
  extends AbstractParseTreeVisitor<ExtensionAdditionAlternativeGroup>
  implements ASN_3gppVisitor<ExtensionAdditionAlternativeGroup> {
  public visitChildren(
    ctx: ExtensionAdditionAlternativesGroupContext
  ): ExtensionAdditionAlternativeGroup {
    const versionNumberCtx = ctx.versionNumber();
    const versionNumber = versionNumberCtx.accept(new VersionNumberVisitor());
    const alternativeTypeListCtx = ctx.alternativeTypeList();
    const alternativeTypeList = alternativeTypeListCtx.accept(
      new AlternativeTypeListVisitor()
    );
    return new ExtensionAdditionAlternativeGroup(
      versionNumber,
      alternativeTypeList
    );
  }

  protected defaultResult(): ExtensionAdditionAlternativeGroup {
    return unimpl();
  }
}
