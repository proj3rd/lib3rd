import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { ConcatableExpression } from "./concatableExpression";
import { Truncation } from "./truncation";

export class Concatenation {
  public concatableExpressionList: ConcatableExpression[];
  public truncation: Truncation | undefined;

  public csnTypeConcatenation = true;

  constructor(
    concatableExpressionList: ConcatableExpression[],
    truncation?: Truncation,
  ) {
    this.concatableExpressionList = concatableExpressionList;
    this.truncation = truncation;
  }

  public static fromObject(obj: unknown): Concatenation {
    const {
      concatableExpressionList: concatableExpressionListObj,
      truncation: truncationObj,
      csnTypeConcatenation,
    } = obj as Concatenation;
    if (!csnTypeConcatenation || !(concatableExpressionListObj instanceof Array)) {
      throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
    }
    const concatableExpressionList = concatableExpressionListObj.map(
      (item) => ConcatableExpression.fromObject(item)
    );
    const truncation = truncationObj && Truncation.fromObject(truncationObj);
    return new Concatenation(concatableExpressionList, truncation);
  }
}
