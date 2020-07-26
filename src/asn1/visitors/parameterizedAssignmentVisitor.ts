import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { AsnType, DefinedObjectClass } from '../classes/asnType';
import { ObjectSet } from '../classes/objectSet';
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
import { DefinedObjectClassVisitor } from './definedObjectClassVisitor';
import { ObjectSetVisitor } from './objectSetVisitor';
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
  extends AbstractParseTreeVisitor<IParameterizedAssignmentElements>
  implements ASN_3gppVisitor<IParameterizedAssignmentElements> {
  public visitChildren(
    ctx: ParameterizedAssignmentContext
  ): IParameterizedAssignmentElements {
    const parameterListCtx = ctx.parameterList();
    const thirdCtx = ctx.getChild(2);
    if (parameterListCtx !== undefined) {
      const parameters = parameterListCtx.accept(new ParameterListVisitor());
      if (thirdCtx instanceof AsnTypeContext) {
        const asnType = thirdCtx.accept(new AsnTypeVisitor());
        return { parameterizedTypeAssignmentElements: { parameters, asnType } };
      } else if (thirdCtx instanceof ValueContext) {
        return unimpl();
      } else if (thirdCtx instanceof ValueSetContext) {
        return unimpl();
      }
      throw Error();
    }
    const definedObjectClassCtx = ctx.definedObjectClass();
    if (definedObjectClassCtx !== undefined) {
      const definedObjectClass = definedObjectClassCtx.accept(
        new DefinedObjectClassVisitor()
      );
      if (thirdCtx instanceof ObjectContext) {
        return unimpl();
      } else if (thirdCtx instanceof ObjectClassContext) {
        return unimpl();
      } else if (thirdCtx instanceof ObjectSetContext) {
        const objectSet = thirdCtx.accept(new ObjectSetVisitor());
        return {
          objectSetAssignmentElements: { definedObjectClass, objectSet },
        };
      }
      throw Error();
    }
    throw Error();
  }

  protected defaultResult(): IParameterizedAssignmentElements {
    return unimpl();
  }
}

interface IParameterizedAssignmentElements {
  parameterizedTypeAssignmentElements?: IParameterizedTypeAssignmentElements;
  objectSetAssignmentElements?: IObjectSetAssignmentElements;
}

interface IParameterizedTypeAssignmentElements {
  parameters: Parameter[];
  asnType: AsnType;
}

interface IObjectSetAssignmentElements {
  definedObjectClass: DefinedObjectClass;
  objectSet: ObjectSet;
}
