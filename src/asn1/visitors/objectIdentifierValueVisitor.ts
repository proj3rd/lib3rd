/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ObjectIdentifierValue } from '../classes/objectIdentifierValue';
import { ObjectIdentifierValueContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ObjIdComponentsListVisitor } from './objIdComponentsListVisitor';

/**
 * # Grammar
 * ```
 * objectIdentifierValue: L_BRACE objIdComponentsList R_BRACE
 * ```
 */
export class ObjectIdentifierValueVisitor
  extends AbstractParseTreeVisitor<ObjectIdentifierValue>
  implements grammar3rdVisitor<ObjectIdentifierValue> {
  public visitChildren(
    ctx: ObjectIdentifierValueContext,
  ): ObjectIdentifierValue {
    const objIdComponentsListCtx = ctx.objIdComponentsList();
    const objIdComponentsList = objIdComponentsListCtx.accept(
      new ObjIdComponentsListVisitor(),
    );
    return new ObjectIdentifierValue(objIdComponentsList);
  }

  protected defaultResult(): ObjectIdentifierValue {
    return unimpl();
  }
}
