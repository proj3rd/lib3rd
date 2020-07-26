export class PrimitiveFieldName {
  public name: string;

  private primitiveFieldNameTag: undefined;

  constructor(name: string) {
    this.name = name;
  }

  public toString(): string {
    return `@${this.name}`;
  }
}
