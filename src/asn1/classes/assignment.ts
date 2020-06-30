import { unimpl } from '../../_devUtils';
import { IExpandOption } from '../expander';
import { AsnType } from './asnType';
import { Modules } from './modules';
import { Parameter } from './parameter';
import { Value } from './value';

export type Assignment =
  | TypeAssignment
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

  public expand(modules: Modules, expandOption: IExpandOption): TypeAssignment {
    const expandedType = this.asnType.expand(modules, expandOption);
    if (expandedType !== undefined) {
      this.asnType = expandedType;
    }
    return this;
  }

  public toString(): string {
    return `${this.name} ::= ${this.asnType.toString()}`;
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
    expandOption: IExpandOption
  ): ParameterizedTypeAssignment {
    return unimpl();
  }

  public toString(): string {
    const arrToString = [this.name];
    const parametersString = this.parameters
      .map((parameter) => parameter.toString())
      .join(', ');
    arrToString.push(`{ ${parametersString} }`);
    arrToString.push('::=');
    arrToString.push(this.asnType.toString());
    return arrToString.join(' ');
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
    expandOption: IExpandOption
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
