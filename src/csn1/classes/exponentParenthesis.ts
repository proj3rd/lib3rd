export class ExponentParenthesis {
  // `undefined` = indefinite
  public exponent: string | undefined;

  public csnTypeExponentParenthesis = true;

  constructor(exponent?: string) {
    this.exponent = exponent;
  }
}
