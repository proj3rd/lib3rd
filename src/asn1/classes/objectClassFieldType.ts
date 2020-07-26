import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { TableConstraint } from '../types';
import { DefinedObjectClass } from './asnType';
import { ComponentRelationConstraint } from './componentRelationConstraint';
import { _Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
import { PrimitiveFieldName } from './primitiveFieldName';

export class ObjectClassFieldType {
  public definedObjectClass: DefinedObjectClass;
  public fieldName: PrimitiveFieldName[];
  public constraint: TableConstraint | undefined;

  private objectClassFieldType: undefined;

  constructor(
    definedObjectClass: DefinedObjectClass,
    fieldName: PrimitiveFieldName[]
  ) {
    this.definedObjectClass = definedObjectClass;
    this.fieldName = fieldName;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): ObjectClassFieldType {
    return unimpl();
  }

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length === 0) {
      return;
    }
    if (constraints.length > 1) {
      unimpl();
    }
    const constraint = constraints[0];
    if (constraint instanceof ContentsConstraint) {
      unimpl();
    } else if (constraint instanceof InnerTypeConstraints) {
      unimpl();
    } else if (constraint instanceof ObjectSet) {
      this.constraint = constraint;
    } else if (constraint instanceof ComponentRelationConstraint) {
      this.constraint = constraint;
    } else {
      unimpl();
    }
  }

  public toString(): string {
    return unimpl();
  }
}
