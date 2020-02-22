import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ObjectIdentifierValueContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjectIdentifierValue } from '../classes/objectIdentifierValue';
import { ObjIdComponentsListVisitor } from './objIdComponentsList';

/**
 * ANTLR4 grammar
 * ```
 * objectIdentifierValue : L_BRACE objIdComponentsList R_BRACE
 * ```
 */
export class ObjectIdentifierValueVisitor extends AbstractParseTreeVisitor<ObjectIdentifierValue>
                                  implements ASN_3gppVisitor<ObjectIdentifierValue> {
  public defaultResult(): ObjectIdentifierValue {
    return new ObjectIdentifierValue([]);
  }

  public visitChildren(objectIdentifierValueCtx: ObjectIdentifierValueContext): ObjectIdentifierValue {
    const { children } = objectIdentifierValueCtx;
    return new ObjectIdentifierValue(children[1].accept(new ObjIdComponentsListVisitor()));
  }
}
