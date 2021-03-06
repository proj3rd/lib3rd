export class Reference {
  public name: string;
  public parameterized: boolean;

  private referenceTag: undefined;

  constructor(name: string, parameterized: boolean = false) {
    this.name = name;
    this.parameterized = parameterized;
  }

  public toString(): string {
    if (this.parameterized) {
      return `${this.name}{}`;
    }
    return this.name;
  }
}

export type AsnSymbol = Reference;
