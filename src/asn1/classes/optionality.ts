import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { AsnType, AsnTypeFromObject } from '../types/asnType';
import { Value, ValueFromObject } from '../types/value';

/**
 * `Optionality` class indicates that `ComponentType` is optional.
 */
export class Optionality {
  public defaultValue: AsnType | Value | undefined;

  public optionalityTag = true;

  constructor(defaultValue?: AsnType | Value) {
    this.defaultValue = defaultValue;
  }

  public static fromObject(obj: unknown): Optionality {
    const { defaultValue: defaultValueObject, optionalityTag } = obj as Optionality;
    if (!optionalityTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    try {
      const defaultValue = AsnTypeFromObject(defaultValueObject);
      return new Optionality(defaultValue);
    } catch (e) {} finally {}
    try {
      const defaultValue = ValueFromObject(defaultValueObject);
      return new Optionality(defaultValueObject);
    } catch (e) {} finally {}
    if (defaultValueObject === undefined) {
      return new Optionality();
    }
    throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
  }

  public getDefaultValue(): AsnType | Value | undefined {
    return this.defaultValue;
  }

  public toString(): string {
    if (this.defaultValue !== undefined) {
      return `DEFAULT ${this.defaultValue.toString()}`;
    }
    return 'OPTIONAL';
  }
}
