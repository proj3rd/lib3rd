import { Optionality } from './optionality';
import { PrimitiveFieldName } from './primitiveFieldName';

export class TypeFieldSpec {
  public fieldReference: PrimitiveFieldName;
  public optionality: Optionality | undefined;

  private typeFieldSpecTag: undefined;

  constructor(fieldRerence: PrimitiveFieldName, optionality?: Optionality) {
    this.fieldReference = fieldRerence;
    this.optionality = optionality;
  }

  public toString(): string {
    if (this.optionality === undefined) {
      return this.fieldReference.toString();
    }
    return `${this.fieldReference.toString()} ${this.optionality.toString()}`;
  }
}
