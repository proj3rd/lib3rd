import { ExponentParenthesis } from "./exponentParenthesis";

export class Reference {
  public name: string;
  public exponent: ExponentParenthesis | undefined;

  public csnTypeReference = true;

  constructor(name: string, exponent?: ExponentParenthesis) {
    this.name = name;
    this.exponent = exponent;
  }
}
