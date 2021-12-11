import { cloneDeep, isEqual } from "lodash";
import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { Choice } from "./choice";
import { Concatenation } from "./concatenation";
import { Definitions } from "./definitions";
import { ExponentStar } from "./exponentStar";
import { Intersection } from "./intersection";
import { Label } from "./label";
import { RawExpression } from "./rawExpression";
import { Reference } from "./reference";

type Expression = Label | Reference | RawExpression | Choice | Concatenation

function ExpressionFromObject(obj: unknown): Expression {
  const { csnTypeLabel } = obj as Partial<Label>;
  if (csnTypeLabel) {
    return Label.fromObject(obj);
  }
  const { csnTypeReference } = obj as Partial<Reference>;
  if (csnTypeReference) {
    return Reference.fromObject(obj);
  }
  const { csnTypeRawExpression } = obj as Partial<RawExpression>;
  if (csnTypeRawExpression) {
    return RawExpression.fromObject(obj);
  }
  const { csnTypeChoice } = obj as Partial<Choice>;
  if (csnTypeChoice) {
    return Choice.fromObject(obj);
  }
  const { csnTypeConcatenation } = obj as Partial<Concatenation>;
  if (csnTypeConcatenation) {
    return Concatenation.fromObject(obj);
  }
  throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION)
}

export class ConcatableExpression {
  public expression: Expression;
  public intersection: Intersection | undefined;
  public exponentStar: ExponentStar | undefined;

  public csnTypeConcatableExpression = true;

  constructor(
    expression: Expression,
    { intersection, exponentStar }: {
      intersection: Intersection | undefined;
      exponentStar: ExponentStar | undefined;
    } = { intersection: undefined, exponentStar: undefined },
  ) {
    this.expression = expression;
    this.intersection = intersection;
    this.exponentStar = exponentStar;
  }

  public expand(definitions: Definitions, index: number = 0): ConcatableExpression {
    const expandedExpression = cloneDeep(this.expression).expand(definitions, index);
    if (!isEqual(expandedExpression, this.expression)) {
      this.expression = expandedExpression;
    }
    return this;
  }

  public static fromObject(obj: unknown): ConcatableExpression {
    const {
      expression: expressionObj,
      intersection: intersectionObj,
      exponentStar: exponentStarObj,
      csnTypeConcatableExpression,
    } = obj as ConcatableExpression;
    if (!csnTypeConcatableExpression) {
      throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
    }
    const expression = ExpressionFromObject(expressionObj);
    const intersection = intersectionObj && Intersection.fromObject(intersectionObj);
    const exponentStar = exponentStarObj && ExponentStar.fromObject(exponentStarObj);
    return new ConcatableExpression(expression, { intersection, exponentStar });
  }
}
