import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootSequenceComponents } from '../classes/sequenceType';
import { RootComponentTypeListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ComponentTypeListVisitor } from './componentTypeListVisitor';

/**
 * # Grammar
 * ```
 * rootComponentTypeList: componentTypeList
 * ```
 */
export class RootComponentTypeListVisitor
  extends AbstractParseTreeVisitor<RootSequenceComponents[]>
  implements ASN_3gppVisitor<RootSequenceComponents[]> {
  public visitChildren(
    ctx: RootComponentTypeListContext
  ): RootSequenceComponents[] {
    const componentTypeListCtx = ctx.componentTypeList();
    return componentTypeListCtx.accept(new ComponentTypeListVisitor());
  }

  protected defaultResult(): RootSequenceComponents[] {
    return [];
  }
}
