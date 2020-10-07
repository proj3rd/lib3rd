/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ObjIdComponentsListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ObjectIdComponents } from '../types';
import { ObjIdComponentsVisitor } from './objIdComponentsVisitor';

/**
 * # Grammar
 * ```
 * objIdComponentsList: (objIdComponents) (objIdComponents)*
 * ```
 */
export class ObjIdComponentsListVisitor
  extends AbstractParseTreeVisitor<ObjectIdComponents[]>
  implements grammar3rdVisitor<ObjectIdComponents[]> {
  public visitChildren(ctx: ObjIdComponentsListContext): ObjectIdComponents[] {
    const objIdComponentsCtxes = ctx.objIdComponents();
    const objIdComponentsList = objIdComponentsCtxes
      .map((objIdComponentsCtx) => objIdComponentsCtx.accept(new ObjIdComponentsVisitor()));
    return objIdComponentsList;
  }

  protected defaultResult(): ObjectIdComponents[] {
    return unimpl();
  }
}
