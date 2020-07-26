import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ObjectIdentifierValue } from '../classes/objectIdentifierValue';
import { ObjectIdentifierValueContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ObjIdComponentsListVisitor } from './objIdComponentsListVisitor';

/**
 * # Grammar
 * ```
 * objectIdentifierValue: L_BRACE objIdComponentsList R_BRACE
 * ```
 */
export class ObjectIdentifierValueVisitor
  extends AbstractParseTreeVisitor<ObjectIdentifierValue>
  implements ASN_3gppVisitor<ObjectIdentifierValue> {
  public visitChildren(
    ctx: ObjectIdentifierValueContext
  ): ObjectIdentifierValue {
    const objIdComponentsListCtx = ctx.objIdComponentsList();
    const objIdComponentsList = objIdComponentsListCtx.accept(
      new ObjIdComponentsListVisitor()
    );
    return new ObjectIdentifierValue(objIdComponentsList);
  }

  protected defaultResult(): ObjectIdentifierValue {
    return unimpl();
  }
}
