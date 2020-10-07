import { AsnType } from './asnType';
import { Modules } from './modules';
import { Value } from './value';

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

  // eslint-disable-next-line no-unused-vars
  public expand(modules: Modules): ValueAssignment {
    // TODO: Shall `Value::ObjectIdentifierValue` be expanded?
    return this;
  }

  public getDepth(): number {
    if (typeof this.value === 'string') {
      return 0;
    }
    return this.value.getDepth();
  }

  public toString(): string {
    return `${
      this.name
    }  ${this.asnType.toString()} ::= ${this.value.toString()}`;
  }
}
