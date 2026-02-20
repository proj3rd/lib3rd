/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { ObjectClass } from '../classes/objectClass';
import { ObjectClassAssignmentContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ObjectClassVisitor } from './objectClassVisitor';

/**
 * # Grammar
 * ```
 * objectClassAssignment: ASSIGN_OP objectClass
 * ```
 */
export class ObjectClassAssignmentVisitor
  extends AbstractParseTreeVisitor<ObjectClass>
  implements grammar3rdVisitor<ObjectClass> {
  public visitChildren(ctx: ObjectClassAssignmentContext): ObjectClass {
    const objectClassCtx = ctx.objectClass();
    return objectClassCtx.accept(new ObjectClassVisitor());
  }

  protected defaultResult(): ObjectClass {
    return unimpl();
  }
}
