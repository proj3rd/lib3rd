import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ObjectIdentifierType } from '../classes/objectIdentifierType';
import { ObjectidentifiertypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * objectidentifiertype: OBJECT_LITERAL IDENTIFIER_LITERAL
 * ```
 */
export class ObjectidentifiertypeVisitor
  extends AbstractParseTreeVisitor<ObjectIdentifierType>
  implements ASN_3gppVisitor<ObjectIdentifierType> {
  public visitChildren(ctx: ObjectidentifiertypeContext): ObjectIdentifierType {
    return new ObjectIdentifierType();
  }

  protected defaultResult(): ObjectIdentifierType {
    return unimpl();
  }
}
