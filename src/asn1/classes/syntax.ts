import { PrimitiveFieldName } from './primitiveFieldName';

export class Syntax {
  public literal: string;
  public primitiveFieldName: PrimitiveFieldName;
  public optional: boolean;

  private syntaxTag: undefined;

  constructor(
    literal: string,
    primitiveFieldName: PrimitiveFieldName,
    optional: boolean
  ) {
    this.literal = literal;
    this.primitiveFieldName = primitiveFieldName;
    this.optional = optional;
  }

  public toString(): string {
    if (this.optional) {
      return `[${this.literal}    ${this.primitiveFieldName.toString()}]`;
    }
    return `${this.literal}    ${this.primitiveFieldName.toString()}`;
  }
}
