import { AsnType } from './asnType';
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
}

export interface ITypeAndValue {
  asnType: AsnType;
  value: Value;
}
