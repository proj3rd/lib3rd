export class BooleanValue {
  public literal: string;
  public value: boolean;

  private booleanValueTag: undefined;

  constructor(literal: string) {
    this.literal = literal;
    if (literal === 'TRUE' || literal === 'true') {
      this.value = true;
    } else if (literal === 'FALSE' || literal === 'false') {
      this.value = false;
    } else {
      throw Error();
    }
  }
}
