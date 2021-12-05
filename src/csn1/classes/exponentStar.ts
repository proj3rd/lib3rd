import { ExponentParenthesis } from "./exponentParenthesis";

export class ExponentStar {
  // `undefined` = indefinite
  public exponent: string | ExponentParenthesis | undefined;

  public csnTypeExponentStar = true;

  constructor(exponent?: string | ExponentParenthesis) {
    this.exponent = exponent;
  }
}
