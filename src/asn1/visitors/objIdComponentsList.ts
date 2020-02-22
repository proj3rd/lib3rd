import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ObjIdComponentsListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { BuiltinType } from './builtinType';
import { ObjIdComponentsVisitor } from './objIdComponents';

/**
 * ANTLR4 grammar
 * ```
 * objIdComponentsList: (objIdComponents) (objIdComponents)*
 * ```
 */
export class ObjIdComponentsListVisitor extends AbstractParseTreeVisitor<Array<BuiltinType | string | number>>
                                  implements ASN_3gppVisitor<Array<BuiltinType | string | number>> {
  public defaultResult(): Array<BuiltinType | string | number> {
    return [];
  }

  public visitChildren(objIdComponentsListCtx: ObjIdComponentsListContext): Array<BuiltinType | string | number> {
    const { children } = objIdComponentsListCtx;
    return children.map((childCtx) => childCtx.accept(new ObjIdComponentsVisitor()));
  }
}
