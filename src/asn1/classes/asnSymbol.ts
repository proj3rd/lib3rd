export type AsnSymbol = Reference;

export class Reference {
  public name: string;
  public parameterized: boolean;

  private referenceTag: undefined;

  constructor(name: string, parameterized: boolean = false) {
    this.name = name;
    this.parameterized = parameterized;
  }
}
