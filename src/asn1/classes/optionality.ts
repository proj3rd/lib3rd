import { AsnType } from './asnType';
import { Value } from './value';

/**
 * `Optionality` class indicates that `ComponentType` is optional.
 * For an optional component type without a default value,
 * use a singleton instance: `Optionality.getInstance()`.
 * For an optional componenttype with a default value,
 * instantiate a new instance: `new Optionality(defaultValue)`.
 */
export class Optionality {
  public defaultValue: AsnType | Value | undefined;

  private optionalityTag: undefined;

  constructor(defaultValue?: AsnType | Value) {
    this.defaultValue = defaultValue;
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
