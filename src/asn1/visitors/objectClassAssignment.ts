import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectClassAssignmentContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjectClass } from '../classes/objectClass';
import { ObjectClassVisitor } from './objectClass';

/**
 * ANTLR4 grammar
 * ```
 * objectClassAssignment : ASSIGN_OP objectClass
 * ```
 */
export class ObjectClassAssignmentVisitor extends AbstractParseTreeVisitor<ObjectClass>
                                          implements ASN_3gppVisitor<ObjectClass> {
  public defaultResult(): ObjectClass {
    return undefined;
  }

  public visitChildren(objectClassAssignmentCtx: ObjectClassAssignmentContext): ObjectClass {
    const objectClassCtx = objectClassAssignmentCtx.children[1];
    return objectClassCtx.accept(new ObjectClassVisitor());
  }
}
