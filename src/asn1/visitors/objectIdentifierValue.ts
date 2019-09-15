import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ObjectIdentifierValueContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjIdComponentsListVisitor } from './objIdComponentsList';

/**
 * ANTLR4 grammar
 * ```
 * objectIdentifierValue : L_BRACE objIdComponentsList R_BRACE
 * ```
 */
export class ObjectIdentifierValueVisitor extends AbstractParseTreeVisitor<any /* TODO */>
                                  implements ASN_3gppVisitor<any /* TODO */> {
  public defaultResult(): any /* TODO */ {
    return [];
  }

  public visitChildren(objectIdentifierValueCtx: ObjectIdentifierValueContext): any /* TODO */ {
    const { children } = objectIdentifierValueCtx;
    return children[1].accept(new ObjIdComponentsListVisitor());
  }
}
