import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo } from 'unimpl';
import {
  Assignment,
  ObjectClassAssignment,
  ParameterizedTypeAssignment,
  TypeAssignment,
  ValueAssignment,
} from '../classes/assignment';
import { NullType } from '../classes/nullType';
import { ObjectSetAssignment } from '../classes/objectSetAssignment';
import { AssignmentContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ObjectClassAssignmentVisitor } from './objectClassAssignmentVisitor';
import { ParameterizedAssignmentVisitor } from './parameterizedAssignmentVisitor';
import { TypeAssignmentVisitor } from './typeAssignmentVisitor';
import { ValueAssignmentVisitor } from './valueAssignmentVisitor';

/**
 * # Grammar
 * ```
 * assignment: IDENTIFIER (
 *   valueAssignment |
 *   typeAssignment |
 *   parameterizedAssignment |
 *   objectClassAssignment
 * )
 * ```
 */
export class AssignmentVisitor extends AbstractParseTreeVisitor<Assignment>
  implements ASN_3gppVisitor<Assignment> {
  public visitChildren(ctx: AssignmentContext): Assignment {
    const name = ctx.getChild(0).text;
    const valueAssignmentCtx = ctx.valueAssignment();
    if (valueAssignmentCtx !== undefined) {
      const typeAndValue = valueAssignmentCtx.accept(
        new ValueAssignmentVisitor()
      );
      const { asnType, value } = typeAndValue;
      return new ValueAssignment(name, asnType, value);
    }
    const typeAssignmentCtx = ctx.typeAssignment();
    if (typeAssignmentCtx !== undefined) {
      const asnType = typeAssignmentCtx.accept(new TypeAssignmentVisitor());
      return new TypeAssignment(name, asnType);
    }
    const parameterizedAssignmentCtx = ctx.parameterizedAssignment();
    if (parameterizedAssignmentCtx !== undefined) {
      const {
        parameterizedTypeAssignmentElements,
        objectSetAssignmentElements,
      } = parameterizedAssignmentCtx.accept(
        new ParameterizedAssignmentVisitor()
      );
      if (parameterizedTypeAssignmentElements) {
        const { parameters, asnType } = parameterizedTypeAssignmentElements;
        return new ParameterizedTypeAssignment(name, parameters, asnType);
      } else if (objectSetAssignmentElements) {
        const { definedObjectClass, objectSet } = objectSetAssignmentElements;
        return new ObjectSetAssignment(name, definedObjectClass, objectSet);
      }
    }
    const objectClassAssignmentCtx = ctx.objectClassAssignment();
    if (objectClassAssignmentCtx !== undefined) {
      const objectClass = objectClassAssignmentCtx.accept(
        new ObjectClassAssignmentVisitor()
      );
      return new ObjectClassAssignment(name, objectClass);
    }
    throw Error();
  }

  protected defaultResult(): Assignment {
    return new TypeAssignment('', NullType.getInstance());
  }
}
