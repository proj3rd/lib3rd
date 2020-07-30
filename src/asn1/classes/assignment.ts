import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { AsnType } from './asnType';
import { Modules } from './modules';
import { ObjectClass } from './objectClass';
import { ObjectSetAssignment } from './objectSetAssignment';
import { Parameter } from './parameter';
import { Value } from './value';

export type Assignment =
  | TypeAssignment
  | ObjectClassAssignment
  | ObjectSetAssignment
  | ParameterizedTypeAssignment
  | ValueAssignment;

export class TypeAssignment {
  public name: string;
  public asnType: AsnType;

  private typeAssignmentTag: undefined;

  constructor(name: string, asnType: AsnType) {
    this.name = name;
    this.asnType = asnType;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): TypeAssignment {
    const expandedType = this.asnType.expand(modules, parameterMappings);
    if (expandedType !== undefined) {
      this.asnType = expandedType;
    }
    return this;
  }

  public toString(): string {
    return `${this.name} ::= ${this.asnType.toString()}`;
  }
}

export class ObjectClassAssignment {
  public name: string;
  public objectClass: ObjectClass;

  private objectClassAssignmentTag: undefined;

  constructor(name: string, objectClass: ObjectClass) {
    this.name = name;
    this.objectClass = objectClass;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): ObjectClassAssignment {
    return unimpl();
  }

  public toString(): string {
    return `${this.name} ::= ${this.objectClass.toString()}`;
  }
}

export class ParameterizedTypeAssignment {
  public name: string;
  public parameters: Parameter[];
  public asnType: AsnType;

  private parameterizedTypeAssignmentTag: undefined;

  constructor(name: string, parameters: Parameter[], asnType: AsnType) {
    this.name = name;
    this.parameters = parameters;
    this.asnType = asnType;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): ParameterizedTypeAssignment {
    const parameterMappingsNew: IParameterMapping[] = this.parameters.map(
      (parameter) => {
        return {
          actualParameter: undefined,
          parameter,
        };
      }
    );
    const expandedType = this.asnType.expand(modules, parameterMappingsNew);
    if (expandedType !== undefined) {
      this.asnType = expandedType;
    }
    return this;
  }

  public toString(): string {
    const parametersString = this.parameters
      .map((parameter) => parameter.toString())
      .join(', ');
    return `${this.name} {${parametersString}} ::= ${this.asnType.toString()}`;
  }
}

export class ValueAssignment {
  public name: string;
  public asnType: AsnType;
  public value: Value;

  private valueAssignmentTag: undefined;

  constructor(name: string, asnType: AsnType, value: Value) {
    this.name = name;
    this.asnType = asnType;
    this.value = value;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): ValueAssignment {
    return this;
  }

  public toString(): string {
    return `${
      this.name
    }  ${this.asnType.toString()} ::= ${this.value.toString()}`;
  }
}

export interface ITypeAndValue {
  asnType: AsnType;
  value: Value;
}
