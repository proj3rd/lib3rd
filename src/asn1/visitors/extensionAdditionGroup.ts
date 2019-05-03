import { ExtensionAdditionGroup } from '../classes/extensionAdditionGroup';

import { ComponentTypeListVisitor } from './componentTypeList';
import { VersionNumberVisitor } from './versionNumber';

/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionGroup  :  DOUBLE_L_BRACKET  versionNumber  componentTypeList  DOUBLE_R_BRACKET
 * ```
 */
export class ExtensionAdditionGroupVisitor {
  public visitChildren(extensionAdditionGroupCtx: any): any /* TODO */ {
    const childCtxes = extensionAdditionGroupCtx.children;
    const versionNumberCtx = childCtxes[1];
    const versionNumber = versionNumberCtx.accept(new VersionNumberVisitor());
    const componentTypeListCtx = childCtxes[2];
    const componentTypeList = componentTypeListCtx.accept(new ComponentTypeListVisitor());
    return new ExtensionAdditionGroup(componentTypeList, versionNumber);
  }
}
