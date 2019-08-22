import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ExtensionAdditionGroupContext, TagContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAdditionGroup } from '../classes/extensionAdditionGroup';
import { ComponentTypeListVisitor } from './componentTypeList';
import { TagVisitor } from './tag';
import { VersionNumberVisitor } from './versionNumber';

/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionGroup  :  DOUBLE_L_BRACKET  versionNumber  componentTypeList tag?  DOUBLE_R_BRACKET
 * ```
 */
export class ExtensionAdditionGroupVisitor extends AbstractParseTreeVisitor<ExtensionAdditionGroup>
                                           implements ASN_3gppVisitor<ExtensionAdditionGroup> {
  public defaultResult(): ExtensionAdditionGroup {
    return undefined;
  }

  public visitChildren(extensionAdditionGroupCtx: ExtensionAdditionGroupContext): ExtensionAdditionGroup {
    const childCtxes = extensionAdditionGroupCtx.children;
    const versionNumberCtx = childCtxes[1];
    const versionNumber = versionNumberCtx.accept(new VersionNumberVisitor());
    const componentTypeListCtx = childCtxes[2];
    const componentTypeList = componentTypeListCtx.accept(new ComponentTypeListVisitor());
    if (childCtxes[3] instanceof TagContext) {
      const tag = childCtxes[3].accept(new TagVisitor());
      if (tag) {
        componentTypeList[componentTypeList.length - 1].tag = tag;
      }
    }
    return new ExtensionAdditionGroup(componentTypeList, versionNumber);
  }
}
