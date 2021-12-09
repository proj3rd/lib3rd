import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";

export class ExponentParenthesis {
  // `undefined` = indefinite
  public exponent: string | undefined;

  public csnTypeExponentParenthesis = true;

  constructor(exponent?: string) {
    this.exponent = exponent;
  }

  public static fromObject(obj: unknown): ExponentParenthesis {
    const { exponent, csnTypeExponentParenthesis } = obj as ExponentParenthesis;
    if (
      (typeof exponent !== 'string' && exponent !== undefined) ||
      !csnTypeExponentParenthesis
    ) {
      throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
    }
    return new ExponentParenthesis(exponent);
  }
}
