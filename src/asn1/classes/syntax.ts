export class Syntax {
  public literal: string;
  public primitiveFieldName: string;
  public optional: boolean;

  constructor(literal: string, primitiveFieldName: string, optional: boolean = false) {
    this.literal = literal;
    this.primitiveFieldName = primitiveFieldName;
    this.optional = optional;
  }
}
