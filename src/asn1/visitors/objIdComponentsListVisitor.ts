import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ObjIdComponentsListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
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
  implements ASN_3gppVisitor<ObjectIdComponents[]> {
  public visitChildren(ctx: ObjIdComponentsListContext): ObjectIdComponents[] {
    const objIdComponentsCtxes = ctx.objIdComponents();
    const objIdComponentsList = objIdComponentsCtxes.map((objIdComponentsCtx) =>
      objIdComponentsCtx.accept(new ObjIdComponentsVisitor())
    );
    return objIdComponentsList;
  }

  protected defaultResult(): ObjectIdComponents[] {
    return unimpl();
  }
}
