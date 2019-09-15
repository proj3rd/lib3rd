import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ObjIdComponentsListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjIdComponentsVisitor } from './objIdComponents';

/**
 * ANTLR4 grammar
 * ```
 * objIdComponentsList: (objIdComponents) (objIdComponents)*
 * ```
 */
export class ObjIdComponentsListVisitor extends AbstractParseTreeVisitor<any /* TODO */>
                                  implements ASN_3gppVisitor<any /* TODO */> {
  public defaultResult(): any /* TODO */ {
    return [];
  }

  public visitChildren(objIdComponentsListCtx: ObjIdComponentsListContext): any /* TODO */ {
    const { children } = objIdComponentsListCtx;
    return children.map((childCtx) => childCtx.accept(new ObjIdComponentsVisitor()));
  }
}
