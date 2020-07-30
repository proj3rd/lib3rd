import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { AsnType } from './asnType';
import { _Constraint } from './constraint';
import { Modules } from './modules';
import { NamedType } from './namedType';
import { SizeConstraint } from './sizeConstraint';

export class SequenceOfType {
  public baseType: AsnType | NamedType;
  public constraint: SizeConstraint | undefined;

  private sequenceOfTypeTag: undefined;

  constructor(
    baseType: AsnType | NamedType,
    constraint: SizeConstraint | undefined
  ) {
    this.baseType = baseType;
    this.constraint = constraint;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): SequenceOfType {
    const expandedBaseType = this.baseType.expand(modules, parameterMappings);
    if (expandedBaseType !== undefined) {
      this.baseType = expandedBaseType;
    }
    return this;
  }

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toString(): string {
    if (this.constraint === undefined) {
      return `SEQUENCE OF ${this.baseType.toString()}`;
    }
    return `SEQUENCE (${this.constraint.toString()}) OF ${this.baseType.toString()}`;
  }
}
