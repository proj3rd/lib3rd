import { ValueReference } from './ValueReference';

export class IntegerValue {
  public literal: string;
  public value: number | ValueReference;

  private integerValueTag: undefined;

  constructor(literal: string) {
    this.literal = literal;
    const value = +literal;
    if (Number.isNaN(value)) {
      this.value = new ValueReference(literal);
    } else {
      this.value = value;
    }
  }

  public getDepth(): number {
    return 0;
  }

  public toString(): string {
    return this.literal;
  }
}
