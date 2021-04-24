/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ObjectIdentifierType } from '../classes/objectIdentifierType';
import { ObjectIdentifierTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * ObjectIdentifierTypeVisitor: OBJECT_LITERAL IDENTIFIER_LITERAL
 * ```
 */
export class ObjectIdentifierTypeVisitor
  extends AbstractParseTreeVisitor<ObjectIdentifierType>
  implements grammar3rdVisitor<ObjectIdentifierType> {
  // eslint-disable-next-line no-unused-vars
  public visitChildren(ctx: ObjectIdentifierTypeContext): ObjectIdentifierType {
    return new ObjectIdentifierType();
  }

  protected defaultResult(): ObjectIdentifierType {
    return unimpl();
  }
}
