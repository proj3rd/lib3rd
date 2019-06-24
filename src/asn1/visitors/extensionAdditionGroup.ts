import { ExtensionAdditionGroup } from '../classes/extensionAdditionGroup';

import { getContextName } from '../utils';
import { ComponentTypeListVisitor } from './componentTypeList';
import { TagVisitor } from './tag';
import { VersionNumberVisitor } from './versionNumber';

/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionGroup  :  DOUBLE_L_BRACKET  versionNumber  componentTypeList tag?  DOUBLE_R_BRACKET
 * ```
 */
export class ExtensionAdditionGroupVisitor {
  public visitChildren(extensionAdditionGroupCtx: any): any /* TODO */ {
    const childCtxes = extensionAdditionGroupCtx.children;
    const versionNumberCtx = childCtxes[1];
    const versionNumber = versionNumberCtx.accept(new VersionNumberVisitor());
    const componentTypeListCtx = childCtxes[2];
    const componentTypeList = componentTypeListCtx.accept(new ComponentTypeListVisitor());
    if (getContextName(childCtxes[2])) {
      const tag = childCtxes[2].accept(new TagVisitor());
      if (tag) {
        componentTypeList[componentTypeList.length - 1].tag = tag;
      }
    }
    return new ExtensionAdditionGroup(componentTypeList, versionNumber);
  }
}
