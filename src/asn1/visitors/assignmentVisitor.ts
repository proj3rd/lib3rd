/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NullType } from '../classes/nullType';
import { ObjectClassAssignment } from '../classes/objectClassAssignment';
import { ObjectSetAssignment } from '../classes/objectSetAssignment';
import { ParameterizedTypeAssignment } from '../classes/parameterizedTypeAssignment';
import { TypeAssignment } from '../classes/typeAssignment';
import { ValueAssignment } from '../classes/valueAssignment';
import { AssignmentContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { Assignment } from '../types';
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
  implements grammar3rdVisitor<Assignment> {
  public visitChildren(ctx: AssignmentContext): Assignment {
    const name = ctx.getChild(0).text;
    const valueAssignmentCtx = ctx.valueAssignment();
    if (valueAssignmentCtx !== undefined) {
      const typeAndValue = valueAssignmentCtx.accept(
        new ValueAssignmentVisitor(),
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
        new ParameterizedAssignmentVisitor(),
      );
      if (parameterizedTypeAssignmentElements) {
        const { parameters, asnType } = parameterizedTypeAssignmentElements;
        return new ParameterizedTypeAssignment(name, parameters, asnType);
      } if (objectSetAssignmentElements) {
        const { definedObjectClass, objectSet } = objectSetAssignmentElements;
        return new ObjectSetAssignment(name, definedObjectClass, objectSet);
      }
    }
    const objectClassAssignmentCtx = ctx.objectClassAssignment();
    if (objectClassAssignmentCtx !== undefined) {
      const objectClass = objectClassAssignmentCtx.accept(
        new ObjectClassAssignmentVisitor(),
      );
      return new ObjectClassAssignment(name, objectClass);
    }
    throw Error();
  }

  protected defaultResult(): Assignment {
    return new TypeAssignment('', new NullType());
  }
}
