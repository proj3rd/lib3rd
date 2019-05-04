import { ExtensionAdditionAlternativesGroup } from '../classes/extensionAdditionAlternativesGroup';

import { AlternativeTypeListVisitor } from './alternativeTypeList';
import { VersionNumberVisitor } from './versionNumber';

/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternativesGroup  :  DOUBLE_L_BRACKET  versionNumber  alternativeTypeList  DOUBLE_R_BRACKET
 * ```
 */
export class ExtensionAdditionAlternativesGroupVisitor {
  public visitChildren(extensionAdditionAlternativesGroupCtx: any): ExtensionAdditionAlternativesGroup {
    const childCtxes = extensionAdditionAlternativesGroupCtx.children;
    const versionNumberCtx = childCtxes[1];
    const alternativeTypeListCtx = childCtxes[2];

    const versionNumber = versionNumberCtx.accept(new VersionNumberVisitor());
    const alternativeTypeList = alternativeTypeListCtx.accept(new AlternativeTypeListVisitor());
    return new ExtensionAdditionAlternativesGroup(alternativeTypeList, versionNumber);
  }
}
