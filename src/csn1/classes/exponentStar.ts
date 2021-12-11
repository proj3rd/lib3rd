import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { Definitions } from "./definitions";
import { ExponentParenthesis } from "./exponentParenthesis";

function ExponentFromObject(obj: unknown): string | ExponentParenthesis | undefined {
  if (typeof obj === 'string' || obj === undefined) {
    return obj;
  }
  return ExponentParenthesis.fromObject(obj);
}

export class ExponentStar {
  // `undefined` = indefinite
  public exponent: string | ExponentParenthesis | undefined;

  public csnTypeExponentStar = true;

  constructor(exponent?: string | ExponentParenthesis) {
    this.exponent = exponent;
  }

  public expand(definitions: Definitions, index: number = 0): ExponentStar {
    return this;
  }

  public static fromObject(obj: unknown): ExponentStar {
    const { exponent: exponentObj, csnTypeExponentStar } = obj as ExponentStar;
    if (!csnTypeExponentStar) {
      throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
    }
    const exponent = ExponentFromObject(exponentObj);
    return new ExponentStar(exponent);
  }
}
