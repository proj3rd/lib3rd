import { cloneDeep, isEqual } from "lodash";
import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { ConcatableExpression } from "./concatableExpression";
import { Definitions } from "./definitions";
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

  public expand(definitions: Definitions, index: number = 0): Concatenation {
    this.concatableExpressionList = this.concatableExpressionList.map((concatableExpression) => {
      const expandedChoice = cloneDeep(concatableExpression).expand(definitions, index);
      if (isEqual(expandedChoice, concatableExpression)) {
        return concatableExpression;
      }
      return expandedChoice;
    });
    return this;
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
