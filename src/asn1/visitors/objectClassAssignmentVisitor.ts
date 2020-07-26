import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ObjectClass } from '../classes/objectClass';
import { ObjectClassAssignmentContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ObjectClassVisitor } from './objectClassVisitor';

/**
 * # Grammar
 * ```
 * objectClassAssignment: ASSIGN_OP objectClass
 * ```
 */
export class ObjectClassAssignmentVisitor
  extends AbstractParseTreeVisitor<ObjectClass>
  implements ASN_3gppVisitor<ObjectClass> {
  public visitChildren(ctx: ObjectClassAssignmentContext): ObjectClass {
    const objectClassCtx = ctx.objectClass();
    return objectClassCtx.accept(new ObjectClassVisitor());
  }

  protected defaultResult(): ObjectClass {
    return unimpl();
  }
}
