import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { AsnType, AsnTypeFromObject } from '../types/asnType';
import { Value, ValueFromObject } from '../types/value';
import { Modules } from './modules';

export class ValueAssignment {
  public name: string;
  public asnType: AsnType;
  public value: Value;

  public valueAssignmentTag = true;

  constructor(name: string, asnType: AsnType, value: Value) {
    this.name = name;
    this.asnType = asnType;
    this.value = value;
  }

  public static fromObject(obj: unknown): ValueAssignment {
    const { name: nameObject, asnType: asnTypeObject, value: valueObject, valueAssignmentTag } = obj as ValueAssignment;
    if (!valueAssignmentTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!nameObject || typeof nameObject !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const asnType = AsnTypeFromObject(asnTypeObject);
    const value = ValueFromObject(valueObject);
    return new ValueAssignment(nameObject, asnType, value);
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
