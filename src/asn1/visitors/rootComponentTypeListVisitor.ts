/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootComponentTypeListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { RootSequenceComponents } from '../types/rootSequenceComponents';
import { ComponentTypeListVisitor } from './componentTypeListVisitor';

/**
 * # Grammar
 * ```
 * rootComponentTypeList: componentTypeList
 * ```
 */
export class RootComponentTypeListVisitor
  extends AbstractParseTreeVisitor<RootSequenceComponents[]>
  implements grammar3rdVisitor<RootSequenceComponents[]> {
  public visitChildren(
    ctx: RootComponentTypeListContext,
  ): RootSequenceComponents[] {
    const componentTypeListCtx = ctx.componentTypeList();
    return componentTypeListCtx.accept(new ComponentTypeListVisitor());
  }

  protected defaultResult(): RootSequenceComponents[] {
    return [];
  }
}
