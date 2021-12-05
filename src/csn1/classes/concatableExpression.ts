import { Choice } from "./choice";
import { Concatenation } from "./concatenation";
import { ExponentStar } from "./exponentStar";
import { Intersection } from "./intersection";
import { Label } from "./label";
import { RawExpression } from "./rawExpression";
import { Reference } from "./reference";

type Expression = Label | Reference | RawExpression | Choice | Concatenation

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
}
