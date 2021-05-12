/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { DefinedObjectClass } from '../classes/asnType';
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
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { AsnType } from '../types/asnType';
import { AsnTypeVisitor } from './asnTypeVisitor';
import { DefinedObjectClassVisitor } from './definedObjectClassVisitor';
import { ObjectSetVisitor } from './objectSetVisitor';
import { ParameterListVisitor } from './parameterListVisitor';

interface IParameterizedTypeAssignmentElements {
  parameters: Parameter[];
  asnType: AsnType;
}

interface IObjectSetAssignmentElements {
  definedObjectClass: DefinedObjectClass;
  objectSet: ObjectSet;
}

interface IParameterizedAssignmentElements {
  parameterizedTypeAssignmentElements?: IParameterizedTypeAssignmentElements;
  objectSetAssignmentElements?: IObjectSetAssignmentElements;
}

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
  implements grammar3rdVisitor<IParameterizedAssignmentElements> {
  public visitChildren(
    ctx: ParameterizedAssignmentContext,
  ): IParameterizedAssignmentElements {
    const parameterListCtx = ctx.parameterList();
    const thirdCtx = ctx.getChild(2);
    if (parameterListCtx !== undefined) {
      const parameters = parameterListCtx.accept(new ParameterListVisitor());
      if (thirdCtx instanceof AsnTypeContext) {
        const asnType = thirdCtx.accept(new AsnTypeVisitor());
        return { parameterizedTypeAssignmentElements: { parameters, asnType } };
      } if (thirdCtx instanceof ValueContext) {
        return unimpl();
      } if (thirdCtx instanceof ValueSetContext) {
        return unimpl();
      }
      throw Error();
    }
    const definedObjectClassCtx = ctx.definedObjectClass();
    if (definedObjectClassCtx !== undefined) {
      const definedObjectClass = definedObjectClassCtx.accept(
        new DefinedObjectClassVisitor(),
      );
      if (thirdCtx instanceof ObjectContext) {
        return unimpl();
      } if (thirdCtx instanceof ObjectClassContext) {
        return unimpl();
      } if (thirdCtx instanceof ObjectSetContext) {
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
