import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ObjectidentifiertypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjectIdentifier } from '../classes/objectIdentifier';

/**
 * ANTLR4 grammar
 * ```
 * objectidentifiertype  :  OBJECT_LITERAL IDENTIFIER_LITERAL
 * ```
 */
export class ObjectidentifiertypeVisitor extends AbstractParseTreeVisitor<ObjectIdentifier>
                                         implements ASN_3gppVisitor<ObjectIdentifier> {
  public defaultResult(): ObjectIdentifier {
    return new ObjectIdentifier();
  }

  public visitChildren(objectidentifiertypeCtx: ObjectidentifiertypeContext): ObjectIdentifier {
    return new ObjectIdentifier();
  }
}
