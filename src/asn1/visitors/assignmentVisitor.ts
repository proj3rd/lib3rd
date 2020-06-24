import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import {
  Assignment,
  ParameterizedTypeAssignment,
  TypeAssignment,
  ValueAssignment,
} from '../classes/assignment';
import { NullType } from '../classes/nullType';
import { AssignmentContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
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
      const { parameters, asnType } = parameterizedAssignmentCtx.accept(
        new ParameterizedAssignmentVisitor()
      );
      return new ParameterizedTypeAssignment(name, parameters, asnType);
    }
    const objectClassAssignment = ctx.objectClassAssignment();
    if (objectClassAssignment !== undefined) {
      throw Error('Not implemented');
    }
    throw Error();
  }

  protected defaultResult(): Assignment {
    return new TypeAssignment('', NullType.getInstance());
  }
}
