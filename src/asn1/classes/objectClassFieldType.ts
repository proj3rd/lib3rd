import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { DefinedObjectClass } from './asnType';
import { ComponentRelationConstraint } from './componentRelationConstraint';
import { _Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
import { PrimitiveFieldName } from './primitiveFieldName';

/**
 * X.681 clause 14
 * ```
 * definedObjectClass.primitiveFieldName[0]....primitiveFieldName[n-1] ( constraint )
 * ```
 */
export class ObjectClassFieldType {
  public definedObjectClass: DefinedObjectClass;
  public fieldName: PrimitiveFieldName[];
  public constraint: ComponentRelationConstraint | undefined;

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
      unimpl();
    } else if (constraint instanceof ComponentRelationConstraint) {
      this.constraint = constraint;
    } else {
      unimpl();
    }
  }

  public toString(): string {
    const fieldNamesString = this.fieldName
      .map((primitiveFieldName) => primitiveFieldName.toString())
      .join('.');
    const outerString = `${this.definedObjectClass.toString()}.${fieldNamesString}`;
    if (this.constraint === undefined) {
      return outerString;
    }
    return `${outerString} (${this.constraint.toString()})`;
  }
}
