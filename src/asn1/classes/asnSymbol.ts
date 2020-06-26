export type AsnSymbol = Reference;

export class Reference {
  public name: string;
  public parameterized: boolean;

  private referenceTag: undefined;

  constructor(name: string, parameterized: boolean = false) {
    this.name = name;
    this.parameterized = parameterized;
  }

  public toString(): string {
    const arrToString = [this.name];
    if (this.parameterized) {
      arrToString.push('{}');
    }
    return arrToString.join(' ');
  }
}
