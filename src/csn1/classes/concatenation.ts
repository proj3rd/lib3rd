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
}
