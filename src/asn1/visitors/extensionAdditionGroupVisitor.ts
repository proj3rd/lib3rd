/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ExtensionAdditionGroup } from '../classes/extensionAdditionGroup';
import { ExtensionAdditionGroupContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
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
  implements grammar3rdVisitor<ExtensionAdditionGroup> {
  public visitChildren(
    ctx: ExtensionAdditionGroupContext,
  ): ExtensionAdditionGroup {
    const versionNumberCtx = ctx.versionNumber();
    const versionNumber = versionNumberCtx.accept(new VersionNumberVisitor());
    const componentTypeListCtx = ctx.componentTypeList();
    const componentTypeList = componentTypeListCtx.accept(
      new ComponentTypeListVisitor(),
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
