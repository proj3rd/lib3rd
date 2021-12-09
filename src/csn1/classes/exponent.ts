import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { ExponentParenthesis } from "./exponentParenthesis";
import { ExponentStar } from "./exponentStar";

export type Exponent = ExponentParenthesis | ExponentStar;

export function ExponentFromObject(obj: unknown): Exponent {
  const { csnTypeExponentParenthesis } = obj as Partial<ExponentParenthesis>;
  if (csnTypeExponentParenthesis) {
    return ExponentParenthesis.fromObject(obj);
  }
  const { csnTypeExponentStar } = obj as Partial<ExponentStar>;
  if (csnTypeExponentStar) {
    return ExponentStar.fromObject(obj);
  }
  throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
}
