export class ValueReference {
  public valueReference: string;

  private valueReferenceTag: undefined;

  constructor(valueReference: string) {
    this.valueReference = valueReference;
  }

  public toString(): string {
    return this.valueReference;
  }
}
