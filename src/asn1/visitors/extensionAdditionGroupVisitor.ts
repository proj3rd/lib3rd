import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ExtensionAdditionGroup } from '../classes/sequenceType';
import { ExtensionAdditionGroupContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ComponentTypeListVisitor } from './componentTypeListVisitor';
import { TagVisitor } from './tagVisitor';
import { VersionNumberVisitor } from './versionNumberVisitor';

/**
 * # Grammar
 * ```
 * extensionAdditionGroup: DOUBLE_L_BRACKET versionNumber componentTypeList tag? DOUBLE_R_BRACKET
 * ```
 */
export class ExtensionAdditionGroupVisitor
  extends AbstractParseTreeVisitor<ExtensionAdditionGroup>
  implements ASN_3gppVisitor<ExtensionAdditionGroup> {
  public visitChildren(
    ctx: ExtensionAdditionGroupContext
  ): ExtensionAdditionGroup {
    const versionNumberCtx = ctx.versionNumber();
    const versionNumber = versionNumberCtx.accept(new VersionNumberVisitor());
    const componentTypeListCtx = ctx.componentTypeList();
    const componentTypeList = componentTypeListCtx.accept(
      new ComponentTypeListVisitor()
    );
    const tagCtx = ctx.tag();
    if (tagCtx !== undefined) {
      const tag = tagCtx.accept(new TagVisitor());
      const { length } = componentTypeList;
      if (length === 0) {
        throw Error();
      }
      const lastComponentType = componentTypeList[length - 1];
      lastComponentType.tag = tag;
    }
    return new ExtensionAdditionGroup(versionNumber, componentTypeList);
  }

  protected defaultResult(): ExtensionAdditionGroup {
    return unimpl();
  }
}
