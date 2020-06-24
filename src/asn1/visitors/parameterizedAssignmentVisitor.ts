import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { AsnType } from '../classes/asnType';
import { Parameter } from '../classes/parameter';
import {
  AsnTypeContext,
  ObjectClassContext,
  ObjectContext,
  ObjectSetContext,
  ParameterizedAssignmentContext,
  ValueContext,
  ValueSetContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { AsnTypeVisitor } from './asnTypeVisitor';
import { ParameterListVisitor } from './parameterListVisitor';

/**
 * # Grammar
 * ```
 * parameterizedAssignment:
 *   parameterList (ASSIGN_OP (asnType | value | valueSet)) |
 *   (definedObjectClass ASSIGN_OP (object | objectClass | objectSet))
 * ```
 */

export class ParameterizedAssignmentVisitor
  extends AbstractParseTreeVisitor<IParameterizedTypeAssignmentElements>
  implements ASN_3gppVisitor<IParameterizedTypeAssignmentElements> {
  public visitChildren(
    ctx: ParameterizedAssignmentContext
  ): IParameterizedTypeAssignmentElements {
    const parameterListCtx = ctx.parameterList();
    const thirdCtx = ctx.getChild(2);
    if (parameterListCtx !== undefined) {
      const parameters = parameterListCtx.accept(new ParameterListVisitor());
      if (thirdCtx instanceof AsnTypeContext) {
        const asnType = thirdCtx.accept(new AsnTypeVisitor());
        return { parameters, asnType };
      } else if (thirdCtx instanceof ValueContext) {
        return unimpl();
      } else if (thirdCtx instanceof ValueSetContext) {
        return unimpl();
      }
      throw Error();
    }
    const definedObjectClassCtx = ctx.definedObjectClass();
    if (definedObjectClassCtx !== undefined) {
      if (thirdCtx instanceof ObjectContext) {
        return unimpl();
      } else if (thirdCtx instanceof ObjectClassContext) {
        return unimpl();
      } else if (thirdCtx instanceof ObjectSetContext) {
        return unimpl();
      }
      throw Error();
    }
    throw Error();
  }

  protected defaultResult(): IParameterizedTypeAssignmentElements {
    return unimpl();
  }
}

interface IParameterizedTypeAssignmentElements {
  parameters: Parameter[];
  asnType: AsnType;
}
