import { AsnType } from './asnType';
import { Value } from './value';

export type Assignment = TypeAssignment | ValueAssignment;

export class TypeAssignment {
  public name: string;
  public asnType: AsnType;

  private typeAssignmentTag: undefined;

  constructor(name: string, asnType: AsnType) {
    this.name = name;
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
